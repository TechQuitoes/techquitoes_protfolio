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
  {
    name: "React",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "#339933",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "#3776AB",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "#47A248",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#4169E1",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "#2496ED",
  },
  {
    name: "Figma",
    icon: SiFigma,
    color: "#F24E1E",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Angular",
    icon: SiAngular,
    color: "#DD0031",
  },
  {
    name: "Vue",
    icon: SiVuedotjs,
    color: "#42B883",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    color: "#02569B",
  },
];

const TechItem = ({ tech, copy, hoveredTech, setHoveredTech }) => {
  const Icon = tech.icon;

  const isActive = hoveredTech === tech.name;

  return (
    <div
      className="tech-item"
      onMouseEnter={() => setHoveredTech(tech.name)}
      onMouseLeave={() => setHoveredTech(null)}
    >
      <div
        className={`
          relative
          flex
          h-[84px]
          w-[84px]
          items-center
          justify-center
          transition-all
          duration-300
          ease-out
          ${
            isActive
              ? "scale-110 opacity-100"
              : "scale-100 opacity-40 grayscale"
          }
        `}
      >
        {/* =========================
            TOOLTIP
        ========================= */}

        {isActive && (
          <div
            className="
              absolute
              -top-[38px]
              left-1/2
              z-50
              -translate-x-1/2
              whitespace-nowrap
              rounded-md
              bg-[#191919]
              px-3
              py-2
              text-[11px]
              font-medium
              text-white
              shadow-lg
            "
          >
            {tech.name}

            {/* Arrow */}

            <span
              className="
                absolute
                -bottom-1
                left-1/2
                h-2
                w-2
                -translate-x-1/2
                rotate-45
                bg-[#191919]
              "
            />
          </div>
        )}

        {/* =========================
            ACTIVE ICON
        ========================= */}

        {isActive ? (
          <div
            className="
              flex
              h-[84px]
              w-[84px]
              items-center
              justify-center
              rounded-lg
              transition-all
              duration-300
            "
            style={{
              backgroundColor: `${tech.color}12`,
              boxShadow: `0 8px 30px ${tech.color}20`,
            }}
          >
            <Icon
              size={54}
              style={{
                color: tech.color,
              }}
            />
          </div>
        ) : (
          <Icon
            size={54}
            className="
              text-[#b7b7b7]
              transition-all
              duration-300
            "
          />
        )}
      </div>
    </div>
  );
};

const TechStack = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  /*
    Duplicate the exact same array.

    Both copies use the SAME TechItem component,
    therefore both behave exactly the same.
  */

  const duplicatedTechnologies = [
    ...technologies,
    ...technologies,
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-8 sm:py-10 md:py-12">

      {/* =========================
          HEADING
      ========================= */}
<div className="max-w-7xl  mx-auto ">
      <div className="relative z-10 px-5 text-center">
        <h2
          className="
            text-2xl
            font-semibold
            tracking-[-0.03em]
            text-[#202124]
            sm:text-3xl
            md:text-[34px]
          "
        >
          No matter your tech stack, We’ve got you covered.
        </h2>
      </div>

      {/* =========================
          CAROUSEL
      ========================= */}

      <div className="relative mt-3 pt-3 w-full overflow-hidden">

        {/* LEFT FADE */}

        <div
          className="
            pointer-events-none
            absolute
            left-0
            top-0
            z-20
            h-full
            w-20
            bg-gradient-to-r
            from-white
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
            w-20
            bg-gradient-to-l
            from-white
            to-transparent
            sm:w-32
          "
        />

        {/* =========================
            TRACK
        ========================= */}

        <div
          className={`
            tech-track
            flex
            w-max
            items-center
            gap-10
            pt-12
            pl-10
            sm:gap-14
          `}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <TechItem
              key={`${tech.name}-${index}`}
              tech={tech}
              copy={index >= technologies.length}
              hoveredTech={hoveredTech}
              setHoveredTech={setHoveredTech}
            />
          ))}
        </div>
      </div>

      {/* =========================
          ANIMATION
      ========================= */}

      <style>{`
        .tech-track {
          animation: tech-scroll 35s linear infinite;
        }

        /*
          Pause the entire carousel when
          ANY item is hovered.
        */

        .tech-track:has(.tech-item:hover) {
          animation-play-state: paused;
        }

        @keyframes tech-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(
              calc(-50% - 28px)
            );
          }
        }

        .tech-item {
          flex-shrink: 0;
          width: 90px;

          display: flex;
          align-items: center;
          justify-content: center;

          cursor: pointer;
        }

        @media (max-width: 768px) {
          .tech-track {
            gap: 35px;
            animation-duration: 28s;
          }

          .tech-item {
            width: 75px;
          }
        }

        @media (max-width: 480px) {
          .tech-track {
            gap: 28px;
          }

          .tech-item {
            width: 65px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .tech-track {
            animation: none;
          }
        }
      `}</style>
      </div>
    </section>
  );
};

export default TechStack;