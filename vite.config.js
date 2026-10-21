import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';

const RESUME_FILENAME = 'Ayoob_Nazeer_Senior_Software_Engineer_React.pdf';

function resumeDownloadPlugin(resumeUrl) {
  const handler = async (req, res, next) => {
    const requestPath = req.url?.split('?')[0];
    if (requestPath !== '/resume.pdf') return next();

    try {
      const response = await fetch(resumeUrl);
      if (!response.ok) return next();
      const buffer = Buffer.from(await response.arrayBuffer());
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', buffer.length);
      res.setHeader('Content-Disposition', `attachment; filename="${RESUME_FILENAME}"`);
      res.end(buffer);
    } catch {
      next();
    }
  };

  return {
    name: 'resume-download',
    configureServer(server) {
      server.middlewares.use(handler);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const resumeUrl = `${env.VITE_R2_BASE_URL}/img/cv/${RESUME_FILENAME}`;

  return {
  plugins: [
    resumeDownloadPlugin(resumeUrl),
    react({
      jsxRuntime: 'automatic',
      // Enable Fast Refresh
      fastRefresh: true,
    }),
    // Gzip compression
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240, // Only compress files larger than 10KB
      algorithm: 'gzip',
      ext: '.gz',
    }),
    // Brotli compression (better than gzip)
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    // Bundle analyzer (only in analyze mode)
    process.env.ANALYZE &&
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: 'esbuild',
    target: 'es2015', // Better browser compatibility
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true, // Split CSS into separate files
    rollupOptions: {
      output: {
        // Improved chunk splitting strategy
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'ui-vendor': ['swiper'],
          'helmet-vendor': ['react-helmet-async'],
        },
        // Better file naming for caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Terser options for better compression (alternative to esbuild)
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
  },
  publicDir: 'public',
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'react-helmet-async'],
    exclude: ['wowjs'], // Lazy loaded
  },
  // Performance hints
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    drop: process.env.NODE_ENV === 'production' ? ['console', 'debugger'] : [],
  },
};
});

