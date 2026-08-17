import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const DesktopMenu = () => {
  return (
    <nav
      className="
        flex items-center justify-between
        bg-transparent
        px-3 py-2.5
        
        backdrop-blur-xl
      "
    >
      <div className="flex items-center gap-1.5">
        {/* THE HUB */}
        <Link to="/"
          className="
            group relative flex items-center
            rounded-full px-5 py-3
            text-[16px] font-semibold text-[#14101F]/80
            transition-all duration-300
            hover:bg-violet-50 hover:text-[#14101F]
          "
        >
          <span>The Hub</span>

          <span
            className="
              absolute bottom-1.5 left-1/2 h-[2.5px] w-0
              -translate-x-1/2 rounded-full
              bg-gradient-to-r from-violet-600 to-indigo-500
              transition-all duration-300
              group-hover:w-6
            "
          />
        </Link>

        {/* SOLUTIONS / EXPERTISE */}
        <div className="group relative">
          <button
            type="button"
            className="
              flex items-center gap-2.5
              rounded-full px-5 py-3
              text-[16px] font-semibold text-[#14101F]/80
              transition-all duration-300
              hover:bg-violet-50 hover:text-[#14101F]
            "
          >
            <span>Solutions / Expertise</span>

            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full bg-[#F6F3FC]
                text-[10px] text-violet-600
                transition-all duration-300
                group-hover:rotate-180
                group-hover:bg-gradient-to-br
                group-hover:from-violet-600
                group-hover:to-indigo-500
                group-hover:text-white
              "
            >
              ↓
            </span>
          </button>

          {/* Dropdown */}
          <div
            className="
              invisible absolute -left-32 top-full z-50
              origin-top pt-3.5
              opacity-0 translate-y-1
              transition-all duration-300
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <DropdownMenu
              title="SOLUTIONS"
              items={["Our Services", "AI-powered Innovation"]}
              featured={{
                title: "See AI-powered Innovation in action",
                description:
                  "How TechQuitoes turns raw data into decisions your team can act on same-day.",
                cta: "View case studies",
                href: "#portfolio",
              }}
            />
          </div>
        </div>

        {/* OUR DNA */}
        <div className="group relative">
          <button
            type="button"
            className="
              flex items-center gap-2.5
              rounded-full px-5 py-3
              text-[16px] font-semibold text-[#14101F]/80
              transition-all duration-300
              hover:bg-violet-50 hover:text-[#14101F]
            "
          >
            <span>Our DNA</span>

            <span
              className="
                flex h-6 w-6 items-center justify-center
                rounded-full bg-[#F6F3FC]
                text-[10px] text-violet-600
                transition-all duration-300
                group-hover:rotate-180
                group-hover:bg-gradient-to-br
                group-hover:from-violet-600
                group-hover:to-indigo-500
                group-hover:text-white
              "
            >
              ↓
            </span>
          </button>

          {/* Dropdown */}
          <div
            className="
              invisible absolute -left-32 top-full z-50 
              origin-top pt-3.5
              opacity-0 translate-y-1
              transition-all duration-300
              group-hover:visible
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <DropdownMenu
              title="OUR DNA"
              items={["Our Culture", "Our Approach"]}
              featured={{
                title: "The team behind the models",
                description:
                  "Meet the people setting the standard for how TechQuitoes builds and ships.",
                cta: "Meet the team",
                href: "#dna",
              }}
            />
          </div>
        </div>

        {/* PORTFOLIO */}
        <a
          href="#portfolio"
          className="
            group relative flex items-center
            rounded-full px-5 py-3
            text-[16px] font-semibold text-[#14101F]/80
            transition-all duration-300
            hover:bg-violet-50 hover:text-[#14101F]
          "
        >
          <span>Portfolio</span>

          <span
            className="
              absolute bottom-1.5 left-1/2 h-[2.5px] w-0
              -translate-x-1/2 rounded-full
              bg-gradient-to-r from-violet-600 to-indigo-500
              transition-all duration-300
              group-hover:w-6
            "
          />
        </a>
      </div>

      {/* PARTNER BUTTON */}
      <Link to="#contact"
        className="
          group relative ml-8
          flex h-[52px] min-w-[184px]
          items-center justify-center
          overflow-hidden rounded-full
          bg-gradient-to-r from-violet-600 to-indigo-500
          px-8
          text-[14.5px] font-semibold tracking-wide text-white
          shadow-[0_14px_30px_-8px_rgba(124,58,237,0.55)]
          transition-all duration-300
          hover:scale-[1.03]
          hover:shadow-[0_18px_40px_-8px_rgba(124,58,237,0.7)]
        "
      >
        {/* sheen sweep */}
        <span
          className="
            pointer-events-none absolute inset-0
            -translate-x-full
            bg-gradient-to-r from-transparent via-white/30 to-transparent
            transition-transform duration-700
            group-hover:translate-x-full
          "
        />

        <span className="relative z-10 flex items-center gap-2">
          Partner With Us
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </Link>
    </nav>
  );
};

export default DesktopMenu;