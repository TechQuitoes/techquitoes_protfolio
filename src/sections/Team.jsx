import React from "react";
import { team } from "../data/ teamData";

export default function Team() {
  return (
    <section className="relative py-16">
      <div
        className="
          mx-auto
          grid
          max-w-6xl
          items-center
          gap-10
          px-6
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-14
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="w-full max-w-xl">
          <h3 className="mb-5 text-center text-4xl font-bold text-white md:text-left md:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff4fd8] via-[#d946ef] to-[#a855f7] bg-clip-text text-transparent">
              Team
            </span>
          </h3>

          <p className="mb-5 text-center text-base leading-relaxed text-gray-300 md:text-left lg:text-lg">
            At TechQuitoes Solution, our team is a blend of creative
            designers, skilled developers, and strategic thinkers working
            together to build impactful digital solutions. We combine
            innovation, dedication, and continuous learning to go beyond just
            building software — we become trusted partners in your digital
            journey.
          </p>

          <p className="mb-7 text-center text-base leading-relaxed text-gray-300 md:text-left lg:text-lg">
            With a culture of transparency, dedication, and continuous
            learning, we go beyond just building software — we become trusted
            partners in your digital journey.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="
                rounded-lg
                bg-gradient-to-r
                from-indigo-500
                to-purple-600
                px-7
                py-3.5
                font-semibold
                text-white
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-1
                hover:from-[#ff4fd8]
                hover:via-[#d946ef]
                hover:to-[#a855f7]
                hover:shadow-xl
              "
            >
              Read More →
            </button>
          </div>
        </div>

        {/* ================= RIGHT TEAM ================= */}
        <div className="mx-auto grid w-full max-w-[500px] grid-cols-2 gap-4">
          {team.map((member, i) => (
            <div
              key={i}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-white/20
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
    objectPosition: member.objectPosition || "center center",
  }}
              />

              {/* Member Info */}
              <div className="p-3">
                <h4 className="text-sm font-semibold text-white md:text-base">
                  {member.name}
                </h4>

                <p className="mt-1 text-xs text-gray-400 md:text-sm">
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