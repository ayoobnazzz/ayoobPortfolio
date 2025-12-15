import { useEffect, useRef } from "react";

export default function ParticleBackground({ particleCount = 400, showShader = true }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const isMobile = window.innerWidth < 768;
    
    // Performance detection - reduce particles on slower devices
    const isLowPerformance = navigator.hardwareConcurrency <= 2 || 
                            (navigator.deviceMemory && navigator.deviceMemory <= 4);
    
    let adjustedParticleCount = particleCount;
    if (isMobile) {
      adjustedParticleCount = Math.floor(particleCount / 3);
    } else if (isLowPerformance) {
      adjustedParticleCount = Math.floor(particleCount / 2);
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

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

    // Animation loop
    const animate = () => {
      timeRef.current += 0.01;
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

      // Draw connections between nearby particles (optimized)
      if (showShader) {
        const maxConnections = Math.min(particlesRef.current.length, 50); // Limit connection checks
        const connectionDistance = 100;
        const connectionDistanceSq = connectionDistance * connectionDistance; // Use squared distance to avoid sqrt
        
        // Pre-calculate 2D positions for particles
        const positions2D = particlesRef.current.map((p) => {
          const scale = 200 / (200 + p.z);
          return {
            x: p.x + (p.x - canvas.width / 2) * scale,
            y: p.y + (p.y - canvas.height / 2) * scale,
            scale
          };
        });

        // Optimized connection drawing with early exit
        let connectionCount = 0;
        for (let i = 0; i < particlesRef.current.length && connectionCount < maxConnections * 2; i++) {
          for (let j = i + 1; j < particlesRef.current.length && connectionCount < maxConnections * 2; j++) {
            const pos1 = positions2D[i];
            const pos2 = positions2D[j];

            const dx = pos1.x - pos2.x;
            const dy = pos1.y - pos2.y;
            const distanceSq = dx * dx + dy * dy;

            if (distanceSq < connectionDistanceSq) {
              const distance = Math.sqrt(distanceSq);
              ctx.beginPath();
              ctx.moveTo(pos1.x, pos1.y);
              ctx.lineTo(pos2.x, pos2.y);
              ctx.strokeStyle = `rgba(247, 80, 35, ${0.1 * (1 - distance / connectionDistance)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
              connectionCount++;
            }
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
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
      }}
    />
  );
}

