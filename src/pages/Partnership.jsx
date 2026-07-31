import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import CaseStudyNavbar from '../components/layout/CaseStudyNavbar';
import TechStack from '../components/partnership/TechStack';
import ContactForm from '../components/partnership/ContactForm';
import FeatureCards from '../components/partnership/FeatureCards';
import Footer from '../components/partnership/Footer';

/**
 * SETUP NOTES (things this file relies on globally, same as the original HTML <head>):
 * 1. Inter font — add to your index.html <head>:
 *    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
 * 2. Devicon icons (the tech stack glyphs) — add to your index.html <head>:
 *    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
 * 3. Requires `framer-motion` to be installed: npm install framer-motion
 */



/* ---------------------------------------------------------------------- */
/* Hero particle constellation canvas — ported 1:1 from the vanilla JS    */
/* ---------------------------------------------------------------------- */
function HeroParticles({ containerRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationId;
    const mouse = { x: null, y: null, radius: 150 };

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
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) this.x += 2;
          if (mouse.x > this.x && this.x > this.size * 10) this.x -= 2;
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) this.y += 2;
          if (mouse.y > this.y && this.y > this.size * 10) this.y -= 2;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    function initParticles() {
      particlesArray = [];
      let numberOfParticles = (canvas.width * canvas.height) / 11000;
      if (numberOfParticles > 120) numberOfParticles = 120;

      for (let i = 0; i < numberOfParticles; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * (canvas.width - size * 4) + size * 2;
        const y = Math.random() * (canvas.height - size * 4) + size * 2;
        const directionX = Math.random() * 0.4 - 0.2;
        const directionY = Math.random() * 0.4 - 0.2;
        const color = 'rgba(155, 81, 224, 0.45)';
        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    function connectNodes() {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 115) {
            const opacityValue = 1 - distance / 115;
            ctx.strokeStyle = `rgba(155, 81, 224, ${opacityValue * 0.25})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => p.update());
      connectNodes();
      animationId = requestAnimationFrame(animate);
    }

    function resizeCanvas() {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      initParticles();
    }

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    resizeCanvas();
    animate();

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [containerRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}

/* ---------------------------------------------------------------------- */
/* Main component                                                         */
/* ---------------------------------------------------------------------- */
export default function Partnership() {
  const heroRef = useRef(null);



  return (
    <div className="bg-[#f8fafc] text-[#1e293b]" style={{ fontFamily: "'Inter', sans-serif" }}>
        <CaseStudyNavbar/>
      {/* ---------------- Hero ---------------- */}
      <section
        ref={heroRef}
        className="relative flex min-h-[65vh] flex-col items-center justify-center overflow-hidden mt-20 bg-[#090d16] px-[5%] pt-28 pb-36 text-center text-white md:pt-32 md:pb-40"
      >
        <HeroParticles containerRef={heroRef} />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-[radial-gradient(circle_at_50%_40%,rgba(155,81,224,0.15)_0%,transparent_60%)]" />

        <div className="relative z-[3] max-w-[950px] ">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
            className="mb-6 text-[2.6rem] font-bold leading-[1.15] tracking-[-1.5px] md:text-[3.2rem] lg:text-[4.2rem]"
          >
            Scaling Your Agency?
            <br />
            <span className="relative inline-block bg-gradient-to-r from-[#b975ff] to-[#e0b0ff] bg-clip-text text-transparent">
              Techquitoes
              <span className="absolute bottom-1 left-0 h-[3px] w-full rounded-sm bg-gradient-to-r from-[#9b51e0] to-transparent" />
            </span>{' '}
            is Your Invisible Workforce.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="mx-auto max-w-[780px] text-[1.15rem] font-light text-[#cbd5e1] md:text-[1.4rem]"
          >
            Deliver elite projects, access dedicated tech talent on contract, and expand your
            service offerings seamlessly under your own brand footprint.
          </motion.p>
        </div>
      </section>

      {/* ---------------- Feature cards ---------------- */}
      <FeatureCards/>

      {/* ---------------- Main content: tech stack + contact form ---------------- */}
      <div className="mx-auto mb-24 grid max-w-[1400px] grid-cols-1 items-start gap-16 px-[5%] lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        {/* Tech stack */}
        <TechStack/>

        {/* Contact form */}
       <ContactForm/>
      </div>

      {/* ---------------- Footer ---------------- */}
     <Footer/>
    </div>
  );
}