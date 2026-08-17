import React from "react";
import { ArrowRight } from "lucide-react";

const particles = [
  { left: "6%", top: "25%", size: 5, delay: "-1.8s" },
  { left: "16%", top: "56%", size: 4, delay: "-4.2s" },
  { left: "22%", top: "11%", size: 7, delay: "-2.4s" },
  { left: "30%", top: "67%", size: 5, delay: "-5.6s" },
  { left: "39%", top: "22%", size: 4, delay: "-3.2s" },
  { left: "51%", top: "78%", size: 7, delay: "-1.1s" },
  { left: "59%", top: "34%", size: 4, delay: "-4.9s" },
  { left: "68%", top: "12%", size: 7, delay: "-2.1s" },
  { left: "77%", top: "65%", size: 5, delay: "-3.7s" },
  { left: "87%", top: "24%", size: 6, delay: "-5.3s" },
  { left: "94%", top: "73%", size: 4, delay: "-2.8s" },
];

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[680px] w-full items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_12%_58%,rgba(24,78,155,.52),transparent_32%),radial-gradient(ellipse_at_87%_45%,rgba(25,57,148,.38),transparent_35%),linear-gradient(112deg,#020b25_0%,#03122f_46%,#060b2b_100%)]">

      {/* =========================================
          DARK VIGNETTE
      ========================================= */}

      <div className="pointer-events-none absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_50%_40%,transparent_24%,rgba(1,5,22,.58)_100%)]" />

      {/* =========================================
          DOT GRID
      ========================================= */}

      <div
        className="
          absolute
          inset-[-22%_-10%]
          z-[-2]
          opacity-[0.65]
          [background-image:radial-gradient(circle,rgba(101,151,255,.22)_1px,transparent_1.4px)]
          [background-size:17px_17px]
          [mask-image:linear-gradient(to_bottom,transparent_2%,black_18%,black_82%,transparent_100%)]
          [transform:perspective(560px)_rotateX(63deg)_rotateZ(-9deg)_translateY(10%)]
          animate-grid-drift
        "
      />

      {/* =========================================
          MAIN DIGITAL WAVE
      ========================================= */}

      <div
        className="
          absolute
          left-[-25%]
          top-[32%]
          z-[-1]
          h-[47%]
          w-[150%]
          opacity-[0.78]
          [background-image:radial-gradient(ellipse,rgba(81,143,255,.9)_1.25px,transparent_2.1px)]
          [background-size:12px_10px]
          [mask-image:radial-gradient(ellipse_at_50%_50%,black_8%,transparent_72%)]
          [transform:perspective(410px)_rotateX(61deg)_rotateZ(-7deg)_skewY(-12deg)]
          [filter:blur(.1px)]
          animate-wave
        "
      />

      {/* =========================================
          MAIN WAVE GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-10%]
          top-[40%]
          z-[-1]
          h-[180px]
          w-[120%]
          rounded-[50%]
          bg-[radial-gradient(ellipse,rgba(40,106,241,.72),transparent_60%)]
          opacity-60
          blur-[30px]
          animate-wave-glow
        "
      />

      {/* =========================================
          SECONDARY WAVE
      ========================================= */}

      <div
        className="
          absolute
          left-[-16%]
          top-[47%]
          z-[-1]
          h-[40%]
          w-[150%]
          opacity-[0.42]
          [background-image:radial-gradient(ellipse,rgba(81,143,255,.8)_1.25px,transparent_2.1px)]
          [background-size:14px_11px]
          [mask-image:radial-gradient(ellipse_at_50%_50%,black_8%,transparent_72%)]
          [transform:perspective(500px)_rotateX(67deg)_rotateZ(8deg)_skewY(9deg)_scaleY(.8)]
          animate-wave-secondary
        "
      />

      {/* =========================================
          LEFT GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[4%]
          top-[18%]
          z-[-1]
          h-[170px]
          w-[220px]
          rounded-full
          bg-[rgba(48,106,241,.2)]
          blur-[75px]
        "
      />

      {/* =========================================
          RIGHT GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[13%]
          right-[3%]
          z-[-1]
          h-[240px]
          w-[280px]
          rounded-full
          bg-[rgba(34,68,208,.19)]
          blur-[75px]
        "
      />

      {/* =========================================
          PARTICLES
      ========================================= */}

      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="
            absolute
            rounded-full
            bg-[#a8c9ff]
            shadow-[0_0_12px_3px_rgba(109,163,255,.8)]
            animate-particle
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: particle.delay,
          }}
        />
      ))}

      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          w-[min(850px,90%)]
          py-[72px]
          text-center
        "
      >
        {/* Eyebrow */}

        <p
          className="
            mb-[27px]
            text-[10px]
            font-bold
            tracking-[0.32em]
            text-[#82a9ec]
          "
        >
          NEXT-GENERATION TECHNOLOGY
        </p>

        {/* Heading */}

        <h1
          className="
            m-0
            text-[clamp(3.25rem,7vw,6.1rem)]
            font-medium
            leading-[0.99]
            tracking-[-0.065em]
            text-[#f8faff]
            [text-shadow:0_2px_25px_rgba(141,178,255,.12)]
          "
        >
          Empowering Your

          <span className="block text-[#8db8ff]">
            Digital Future
          </span>
        </h1>

        {/* Description */}

        <p
          className="
            mx-auto
            mt-[33px]
            text-[clamp(.93rem,1.3vw,1.12rem)]
            font-normal
            leading-[1.6]
            tracking-[0.015em]
            text-[#c2d0e9]
          "
        >
          Delivering intelligent digital solutions that drive business growth
        </p>

        {/* Button */}

        <button
          type="button"
          className="
            group
            mt-[41px]
            inline-flex
            items-center
            gap-[17px]
            rounded-full
            border
            border-[rgba(194,216,255,.75)]
            bg-[rgba(24,53,115,.23)]
            px-[27px]
            py-[14px]
            pr-[24px]
            text-[.84rem]
            font-semibold
            tracking-[.03em]
            text-[#f8fbff]
            shadow-[inset_0_0_13px_rgba(110,163,255,.1),0_0_20px_rgba(55,112,233,.09)]
            transition-all
            duration-300
            hover:-translate-y-[3px]
            hover:border-white
            hover:bg-[rgba(60,113,220,.35)]
            hover:shadow-[0_0_25px_rgba(91,151,255,.3)]
            active:-translate-y-px
          "
        >
          <span>Get Started</span>

          <ArrowRight
            size={17}
            strokeWidth={1.8}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>
      </div>

      {/* =========================================
          SCROLL CUE
      ========================================= */}

      <div
        className="
          absolute
          bottom-[29px]
          h-[29px]
          w-[18px]
          rounded-[20px]
          border
          border-[rgba(165,192,242,.48)]
        "
      >
        <span
          className="
            mx-auto
            mt-[6px]
            block
            h-[5px]
            w-[3px]
            rounded-[4px]
            bg-[#c9dbff]
            animate-scroll-drop
          "
        />
      </div>

      {/* =========================================
          RESPONSIVE WAVE
      ========================================= */}

      <style>{`
        @keyframes grid-drift {
          to {
            transform:
              perspective(560px)
              rotateX(63deg)
              rotateZ(-9deg)
              translateY(16%);
          }
        }

        @keyframes wave-pulse {
          from {
            transform:
              perspective(410px)
              rotateX(61deg)
              rotateZ(-7deg)
              skewY(-12deg)
              scaleY(.92);
          }

          to {
            transform:
              perspective(410px)
              rotateX(61deg)
              rotateZ(-7deg)
              skewY(-12deg)
              scaleY(1.1)
              translateX(2%);
          }
        }

        @keyframes wave-secondary {
          from {
            transform:
              perspective(500px)
              rotateX(67deg)
              rotateZ(8deg)
              skewY(9deg)
              scaleY(.76);
          }

          to {
            transform:
              perspective(500px)
              rotateX(67deg)
              rotateZ(8deg)
              skewY(9deg)
              scaleY(.9)
              translateX(-2%);
          }
        }

        @keyframes wave-glow {
          0%, 100% {
            transform: translateX(-2%) scaleY(.9);
            opacity: .4;
          }

          50% {
            transform: translateX(2%) scaleY(1.1);
            opacity: .7;
          }
        }

        @keyframes particle-float {
          0%, 100% {
            opacity: .35;
            transform: translate3d(0, 8px, 0) scale(.7);
          }

          50% {
            opacity: 1;
            transform: translate3d(0, -13px, 0) scale(1.25);
          }
        }

        @keyframes scroll-drop {
          0%, 100% {
            opacity: .2;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
            transform: translateY(8px);
          }
        }

        .animate-grid-drift {
          animation: grid-drift 18s linear infinite;
        }

        .animate-wave {
          animation: wave-pulse 8s ease-in-out infinite alternate;
        }

        .animate-wave-secondary {
          animation: wave-secondary 11s ease-in-out infinite alternate-reverse;
        }

        .animate-wave-glow {
          animation: wave-glow 8s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle-float 6s ease-in-out infinite;
        }

        .animate-scroll-drop {
          animation: scroll-drop 1.7s ease-in-out infinite;
        }

        @media (max-width: 640px) {
          .hero-mobile-wave {
            width: 220% !important;
            left: -59% !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;