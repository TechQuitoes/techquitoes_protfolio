import { useEffect, useRef } from "react";

export default function HeroParticles({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");

    let particlesArray = [];
    let animationId;

    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX;

        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY;

        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    function initParticles() {
      particlesArray = [];

      let numberOfParticles =
        (canvas.width * canvas.height) / 11000;

      if (numberOfParticles > 120) numberOfParticles = 120;

      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(
          new Particle(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            Math.random() * 0.4 - 0.2,
            Math.random() * 0.4 - 0.2,
            Math.random() * 2 + 1,
            "rgba(155,81,224,0.45)"
          )
        );
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => particle.update());

      animationId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      initParticles();
    }

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}