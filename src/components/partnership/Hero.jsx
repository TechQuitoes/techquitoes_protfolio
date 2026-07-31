import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const mouseRef = useRef({
    x: null,
    y: null,
    radius: 150,
  });

  const particlesRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function drawParticle(particle) {
      ctx.beginPath();
      ctx.arc(
        particle.x,
        particle.y,
        particle.size,
        0,
        Math.PI * 2,
        false
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
    }

    function updateParticle(particle, mouse) {
      if (particle.x > particle.canvasWidth || particle.x < 0)
        particle.directionX = -particle.directionX;

      if (particle.y > particle.canvasHeight || particle.y < 0)
        particle.directionY = -particle.directionY;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + particle.size) {
          if (
            mouse.x < particle.x &&
            particle.x < particle.canvasWidth - particle.size * 10
          )
            particle.x += 2;

          if (
            mouse.x > particle.x &&
            particle.x > particle.size * 10
          )
            particle.x -= 2;

          if (
            mouse.y < particle.y &&
            particle.y < particle.canvasHeight - particle.size * 10
          )
            particle.y += 2;

          if (
            mouse.y > particle.y &&
            particle.y > particle.size * 10
          )
            particle.y -= 2;
        }
      }

      particle.x += particle.directionX;
      particle.y += particle.directionY;

      drawParticle(particle);
    }

    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    }

    function initParticles() {
      particlesRef.current = [];

      let numberOfParticles =
        (canvas.width * canvas.height) / 11000;

      if (numberOfParticles > 120)
        numberOfParticles = 120;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;

        const x =
          Math.random() * (canvas.width - size * 4) +
          size * 2;

        const y =
          Math.random() * (canvas.height - size * 4) +
          size * 2;

        const directionX =
          Math.random() * 0.4 - 0.2;

        const directionY =
          Math.random() * 0.4 - 0.2;

        particlesRef.current.push({
          x,
          y,
          directionX,
          directionY,
          size,
          color: "rgba(155,81,224,0.45)",
          canvasWidth: canvas.width,
          canvasHeight: canvas.height,
        });
      }
    }

    function connectNodes() {
      for (
        let a = 0;
        a < particlesRef.current.length;
        a++
      ) {
        for (
          let b = a;
          b < particlesRef.current.length;
          b++
        ) {
          const dx =
            particlesRef.current[a].x -
            particlesRef.current[b].x;

          const dy =
            particlesRef.current[a].y -
            particlesRef.current[b].y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 115) {
            const opacityValue =
              1 - distance / 115;

            ctx.strokeStyle = `rgba(
              155,
              81,
              224,
              ${opacityValue * 0.25}
            )`;

            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.moveTo(
              particlesRef.current[a].x,
              particlesRef.current[a].y
            );

            ctx.lineTo(
              particlesRef.current[b].x,
              particlesRef.current[b].y
            );

            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particlesRef.current.forEach((particle) => {
        updateParticle(
          particle,
          mouseRef.current
        );
      });

      connectNodes();

      animationRef.current =
        requestAnimationFrame(animate);
    }

    function handleMouseMove(event) {
      const rect =
        canvas.getBoundingClientRect();

      mouseRef.current.x =
        event.clientX - rect.left;

      mouseRef.current.y =
        event.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    }

    container.addEventListener(
      "mousemove",
      handleMouseMove
    );

    container.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    resizeCanvas();
    animate();

    return () => {
      container.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      container.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-40 px-[5%] text-center text-white bg-[#090d16] min-h-[65vh] flex flex-col items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-[1] pointer-events-none"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,rgba(155,81,224,0.15),transparent_60%)] z-[2] pointer-events-none" />

      <div className="relative z-[3] max-w-[950px]">
        <h1 className="text-[2.6rem] md:text-[3.2rem] lg:text-[4.2rem] font-extrabold mb-6 tracking-[-1.5px] leading-[1.15]">
          Scaling Your Agency?
          <br />

          <span className="bg-gradient-to-r from-[#b975ff] to-[#e0b0ff] bg-clip-text text-transparent inline-block relative">
            Techquitoes
          </span>{" "}
          is Your Invisible Workforce.
        </h1>

        <p className="text-[1.15rem] md:text-[1.4rem] text-[#cbd5e1] max-w-[780px] mx-auto font-light">
          Deliver elite projects, access dedicated tech talent on contract,
          and expand your service offerings seamlessly under your own brand
          footprint.
        </p>
      </div>
    </section>
  );
}