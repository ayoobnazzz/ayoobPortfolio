import { useEffect, useRef } from "react";

export default function ParticleBackground({ particleCount = 1500, showShader = true }) {
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const isMobile = window.innerWidth < 768;
    const adjustedParticleCount = isMobile ? Math.floor(particleCount / 3) : particleCount;

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

      // Draw connections between nearby particles
      if (showShader) {
        for (let i = 0; i < particlesRef.current.length; i++) {
          for (let j = i + 1; j < particlesRef.current.length; j++) {
            const p1 = particlesRef.current[i];
            const p2 = particlesRef.current[j];

            const scale1 = 200 / (200 + p1.z);
            const scale2 = 200 / (200 + p2.z);
            const x1 = p1.x + (p1.x - canvas.width / 2) * scale1;
            const y1 = p1.y + (p1.y - canvas.height / 2) * scale1;
            const x2 = p2.x + (p2.x - canvas.width / 2) * scale2;
            const y2 = p2.y + (p2.y - canvas.height / 2) * scale2;

            const dx = x1 - x2;
            const dy = y1 - y2;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.strokeStyle = `rgba(247, 80, 35, ${0.1 * (1 - distance / 100)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
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

