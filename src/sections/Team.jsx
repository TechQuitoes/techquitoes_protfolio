import React from "react";
import { team } from "../data/ teamData";

export default function Team() {
  return (
    <section
      className="
        relative
        w-full
        px-5
        bg-[var(--bg-primary)]
        py-16
        text-[var(--text-primary)]
        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          grid
        max-w-[95%]
          items-center
          gap-10
          px-6
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-14
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full max-w-xl">
          <h3
            className="
              mb-5
              text-center
              text-4xl
              font-bold
              text-[var(--text-primary)]
              md:text-left
              md:text-5xl
            "
          >
            Our{" "}
            <span
              className="
                bg-gradient-to-r
                from-[var(--accent-start)]
                via-[var(--accent-middle)]
                to-[var(--accent-end)]
                bg-clip-text
                text-transparent
              "
            >
              Team
            </span>
          </h3>

          <p
            className="
              mb-5
              text-center
              text-base
              leading-relaxed
              text-[var(--text-secondary)]
              md:text-left
              lg:text-lg
            "
          >
            At TechQuitoes Solution, our team is a blend of creative
            designers, skilled developers, and strategic thinkers working
            together to build impactful digital solutions. We combine
            innovation, dedication, and continuous learning to go beyond just
            building software — we become trusted partners in your digital
            journey.
          </p>

          <p
            className="
              mb-7
              text-center
              text-base
              leading-relaxed
              text-[var(--text-secondary)]
              md:text-left
              lg:text-lg
            "
          >
            With a culture of transparency, dedication, and continuous
            learning, we go beyond just building software — we become trusted
            partners in your digital journey.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="
                rounded-lg
                bg-gradient-to-r
                from-[var(--accent-start)]
                via-[var(--accent-middle)]
                to-[var(--accent-end)]
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              Read More →
            </button>
          </div>
        </div>

        {/* ================= RIGHT TEAM ================= */}
        <div className="mx-auto grid w-full max-w-[600px] grid-cols-2 gap-8">
          {team.map((member, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-[var(--border-color)]
                bg-[var(--card-bg)]
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-lg
              "
            >
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="
                  h-44
                  w-full
                  object-cover
                  object-[center_20%]
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
                style={{
                  objectPosition:
                    member.objectPosition || "center center",
                }}
              />

              {/* Member Info */}
              <div className="p-3">
                <h4
                  className="
                    text-sm
                    font-semibold
                    text-[var(--text-primary)]
                    md:text-base
                  "
                >
                  {member.name}
                </h4>

                <p
                  className="
                    mt-1
                    text-xs
                    text-[var(--text-muted)]
                    md:text-sm
                  "
                >
                  {member.role}
                </p>
              </div>

              {/* Online Indicator */}
              <span
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-5
                  w-5
                  items-center
                  justify-center
                  rounded-full
                  bg-green-500
                  text-[10px]
                  font-bold
                  text-white
                  shadow-lg
                "
              >
                ✓
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}