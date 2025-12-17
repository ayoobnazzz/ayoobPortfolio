import { useEffect, useRef, memo } from "react";

const ParticleBackground = memo(function ParticleBackground({ particleCount = 100, showShader = false }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const lastFrameTimeRef = useRef(0);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
    const isMobile = window.innerWidth < 768;
    
    // Performance detection - reduce particles on slower devices
    const isLowPerformance = navigator.hardwareConcurrency <= 2 || 
                            (navigator.deviceMemory && navigator.deviceMemory <= 4);
    
    let adjustedParticleCount = Math.min(particleCount, 150); // Cap at 150 max
    if (isMobile) {
      adjustedParticleCount = Math.min(Math.floor(particleCount / 4), 40); // Max 40 on mobile
    } else if (isLowPerformance) {
      adjustedParticleCount = Math.min(Math.floor(particleCount / 2), 80); // Max 80 on low-end
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    
    // Throttle resize event
    let resizeTimeout;
    const throttledResize = () => {
      if (resizeTimeout) return;
      resizeTimeout = setTimeout(() => {
        resizeCanvas();
        resizeTimeout = null;
      }, 250);
    };
    window.addEventListener("resize", throttledResize, { passive: true });

    // Intersection Observer to pause animation when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisibleRef.current = entry.isIntersecting;
          if (entry.isIntersecting && !animationFrameRef.current) {
            animate();
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(canvas);

    // Create particles
    const createParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < adjustedParticleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random() * 1000,
          speed: 0.5 + Math.random() * 0.5,
          size: 0.5 + Math.random() * 1,
          color: `hsl(${15 + Math.random() * 10}, 100%, ${50 + Math.random() * 20}%)`,
        });
      }
    };
    createParticles();

    // Throttle animation to 30fps for better performance
    const targetFPS = 30;
    const frameDelay = 1000 / targetFPS;

    // Animation loop with FPS throttling
    const animate = (currentTime = 0) => {
      if (!isVisibleRef.current) {
        animationFrameRef.current = null;
        return;
      }

      animationFrameRef.current = requestAnimationFrame(animate);

      // Throttle to target FPS
      const elapsed = currentTime - lastFrameTimeRef.current;
      if (elapsed < frameDelay) return;
      
      lastFrameTimeRef.current = currentTime - (elapsed % frameDelay);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Move particle
        particle.z -= particle.speed;
        if (particle.z <= 0) {
          particle.z = 1000;
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }

        // Calculate 3D position
        const scale = 200 / (200 + particle.z);
        const x2d = particle.x + (particle.x - canvas.width / 2) * scale;
        const y2d = particle.y + (particle.y - canvas.height / 2) * scale;
        const size2d = particle.size * scale;

        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = scale * 0.6;
        ctx.fill();
      });

      // Connection drawing removed for performance - was causing major scroll lag
    };

    animate();

    return () => {
      window.removeEventListener("resize", throttledResize);
      observer.disconnect();
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [particleCount, showShader]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        willChange: "transform",
        transform: "translateZ(0)", // Force GPU acceleration
      }}
    />
  );
});

export default ParticleBackground;

