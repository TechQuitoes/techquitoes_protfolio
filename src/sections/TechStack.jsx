import React, { useState } from "react";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiTailwindcss,
  SiAngular,
  SiVuedotjs,
  SiFlutter,
} from "react-icons/si";

const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: "Vue", icon: SiVuedotjs, color: "#42B883" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
];

const TechItem = ({ tech, hoveredTech, setHoveredTech }) => {
  const Icon = tech.icon;
  const isActive = hoveredTech === tech.name;

  return (
    <div
      className="tech-item"
      onMouseEnter={() => setHoveredTech(tech.name)}
      onMouseLeave={() => setHoveredTech(null)}
      onTouchStart={() => setHoveredTech(tech.name)}
    >
      <div
        className={`
          relative
          flex
          h-[70px]
          w-[70px]
          items-center
          justify-center
          transition-all
          duration-300
          ease-out
          sm:h-[84px]
          sm:w-[84px]
          ${
            isActive
              ? "scale-110 opacity-100"
              : "scale-100 opacity-40 grayscale"
          }
        `}
      >
        {/* Tooltip */}
        {isActive && (
          <div className="absolute -top-[35px] left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-md bg-[var(--tooltip-bg)] px-3 py-2 text-[10px] font-medium text-[var(--tooltip-text)] shadow-lg sm:text-[11px]">
            {tech.name}

            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-[var(--tooltip-bg)]" />
          </div>
        )}

        {/* Icon */}
        {isActive ? (
          <div
            className="flex h-[70px] w-[70px] items-center justify-center rounded-lg transition-all duration-300 sm:h-[84px] sm:w-[84px]"
            style={{
              backgroundColor: `${tech.color}12`,
              boxShadow: `0 8px 30px ${tech.color}20`,
            }}
          >
            <Icon
              className="text-[42px] sm:text-[54px]"
              style={{ color: tech.color }}
            />
          </div>
        ) : (
          <Icon className="text-[42px] text-[var(--icon-muted)] sm:text-[54px]" />
        )}
      </div>
    </div>
  );
};

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedTechnologies = [
    ...technologies,
    ...technologies,
  ];

  const handleEnter = () => {
    setIsPaused(true);
  };

  const handleLeave = () => {
    setIsPaused(false);
    setHoveredTech(null);
  };

  return (
    <section className="relative w-full overflow-hidden bg-[var(--bg-primary)] py-8 text-[var(--text-primary)] transition-colors duration-300 sm:py-10 md:py-12">
      <div className="mx-auto ">

        {/* HEADING */}
        <div className="relative z-10 px-5 text-center">
          <h2
            className="
              text-2xl
              font-semibold
              tracking-[-0.03em]
              text-[var(--text-primary)]
              sm:text-3xl
              md:text-[34px]
            "
          >
            No matter your tech stack, We’ve got you covered.
          </h2>
        </div>

        {/* CAROUSEL */}
        <div className="relative mt-3 w-full overflow-hidden pt-3">

          {/* LEFT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-12
              bg-gradient-to-r
              from-[var(--bg-primary)]
              to-transparent
              sm:w-32
            "
          />

          {/* RIGHT FADE */}
          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-12
              bg-gradient-to-l
              from-[var(--bg-primary)]
              to-transparent
              sm:w-32
            "
          />

          {/* TRACK */}
          <div
            className="tech-track"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onTouchStart={() => setIsPaused(false)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {duplicatedTechnologies.map((tech, index) => (
              <TechItem
                key={`${tech.name}-${index}`}
                tech={tech}
                hoveredTech={hoveredTech}
                setHoveredTech={setHoveredTech}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .tech-track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 28px;
          padding-top: 45px;
          padding-left: 24px;
          animation: tech-scroll 30s linear infinite;
          will-change: transform;
        }

        .tech-item {
          flex: 0 0 auto;
          width: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        @keyframes tech-scroll {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(
              calc(-50% - 14px),
              0,
              0
            );
          }
        }

        @media (min-width: 640px) {
          .tech-track {
            gap: 56px;
            padding-top: 48px;
            padding-left: 40px;
            animation-duration: 35s;
          }

          .tech-item {
            width: 90px;
          }
        }

        @media (max-width: 639px) {
          .tech-track {
            gap: 28px;
            padding-left: 24px;
            animation-duration: 24s;
          }

          .tech-item {
            width: 70px;
          }
        }

        @media (max-width: 400px) {
          .tech-track {
            gap: 24px;
            animation-duration: 22s;
          }

          .tech-item {
            width: 65px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-track {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;