import { useState } from "react";
import { Link } from "react-router-dom";

const SOLUTIONS_ITEMS = [
  "Our Services",
  "AI-powered Innovation",
];

const DNA_ITEMS = [
  "Our Culture",
  "Our Approach",
];

const AccordionSection = ({
  title,
  items,
  isOpen,
  onToggle,
  onLinkClick,
}) => (
  <div className="border-b theme-border">

    <button
      onClick={onToggle}
      className="
        w-full
        flex items-center justify-between
        py-4
        text-left
        theme-text
      "
      aria-expanded={isOpen}
    >
      <span
        className="
          text-[16px]
          font-semibold
          theme-text
        "
      >
        {title}
      </span>

      <span
        className={`
          flex h-7 w-7
          items-center justify-center
          rounded-full
          theme-icon-bg
          text-[10px]
          text-violet-600
          transition-transform duration-300
          ${isOpen ? "rotate-180" : ""}
        `}
      >
        ↓
      </span>
    </button>

    <div
      className={`
        grid
        overflow-hidden
        transition-all duration-300
        ${
          isOpen
            ? "grid-rows-[1fr] pb-3"
            : "grid-rows-[0fr]"
        }
      `}
    >
      <div className="overflow-hidden">
        <div className="flex flex-col gap-1 pl-2">

          {items.map((item) => (
            <Link
              key={item}
              to="/"
              onClick={onLinkClick}
              className="
                rounded-xl
                px-3 py-3
                text-[15px]
                theme-text-secondary
                transition-colors duration-200
                hover:bg-violet-50/80
                hover:text-violet-600
              "
            >
              {item}
            </Link>
          ))}

        </div>
      </div>
    </div>
  </div>
);


const MobileMenu = ({
  open,
  setOpen,
}) => {
  const [solutionsOpen, setSolutionsOpen] =
    useState(false);

  const [dnaOpen, setDnaOpen] =
    useState(false);

  const close = () => setOpen(false);

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={close}
        className={`
          lg:hidden
          fixed
          inset-0
          top-[70px]
          md:top-[90px]
          z-40
          bg-black/30
          backdrop-blur-sm
          transition-opacity duration-300
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* PANEL */}
      <div
        className={`
          lg:hidden
          fixed
          top-[70px]
          md:top-[90px]
          right-0
          z-40
          h-[calc(100vh-70px)]
          md:h-[calc(100vh-90px)]
          w-[85%]
          max-w-[380px]

          theme-bg

          shadow-[-20px_0_60px_-15px_rgba(20,16,31,0.25)]

          transition-transform duration-300 ease-out

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <div
          className="
            flex h-full
            flex-col
            overflow-y-auto
            px-6 py-6
          "
        >

          {/* THE HUB */}
          <Link
            to="/"
            onClick={close}
            className="
              py-4
              text-[16px]
              font-semibold
              theme-text
              border-b
              theme-border
            "
          >
            The Hub
          </Link>


          {/* SOLUTIONS */}
          <AccordionSection
            title="Solutions / Expertise"
            items={SOLUTIONS_ITEMS}
            isOpen={solutionsOpen}
            onToggle={() =>
              setSolutionsOpen((p) => !p)
            }
            onLinkClick={close}
          />


          {/* DNA */}
          <AccordionSection
            title="Our DNA"
            items={DNA_ITEMS}
            isOpen={dnaOpen}
            onToggle={() =>
              setDnaOpen((p) => !p)
            }
            onLinkClick={close}
          />


          {/* PORTFOLIO */}
          <Link
            to="/portfolio"
            onClick={close}
            className="
              py-4
              text-[16px]
              font-semibold
              theme-text
              border-b
              theme-border
            "
          >
            Portfolio
          </Link>


          {/* PARTNER */}
          <Link
            to="#contact"
            onClick={close}
            className="
              mt-6
              flex
              h-[52px]
              w-full
              items-center
              justify-center
              rounded-full

              bg-gradient-to-r
              from-violet-600
              to-indigo-500

              text-[14.5px]
              font-semibold
              text-white

              shadow-[0_14px_30px_-8px_rgba(124,58,237,0.55)]
            "
          >
            Partner With Us →
          </Link>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;