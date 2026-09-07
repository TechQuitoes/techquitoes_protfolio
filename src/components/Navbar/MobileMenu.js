
import { useState } from "react";
import { Link } from "react-router-dom";

import AuthButton from "./AuthButton";

const SOLUTIONS_ITEMS = [
  {
    label: "Our Services",
    path: "/our-services",
  },
  {
    label: "AI-powered Innovation",
    path: "/ai-innovation",
  },
];

const DNA_ITEMS = [
  {
    label: "CEO Message",
    path: "/ceo",
  },
  {
    label: "Our Culture",
    path: "/why-choose-us",
  },
  {
    label: "Our Approach",
    path: "/our-approach",
  },
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
      type="button"
      onClick={onToggle}
      className="
        group
        flex w-full
        items-center justify-between
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
          transition-colors
          duration-200
          group-hover:text-violet-600
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
          transition-all duration-300

          ${
            isOpen
              ? "rotate-180 bg-gradient-to-br from-violet-600 to-indigo-500 text-white"
              : ""
          }
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
              key={item.path}
              to={item.path}
              onClick={onLinkClick}
              className="
                group
                flex items-center
                justify-between
                rounded-xl
                px-3 py-3
                text-[15px]
                theme-text-secondary
                transition-all duration-200
                hover:bg-violet-50/80
                hover:text-violet-600
                dark:hover:bg-violet-500/10
              "
            >
              <span>{item.label}</span>

              <span
                className="
                  translate-x-[-4px]
                  opacity-0
                  transition-all duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const MobileMenu = ({ open, setOpen }) => {
  const [solutionsOpen, setSolutionsOpen] =
    useState(false);

  const [dnaOpen, setDnaOpen] =
    useState(false);

  const close = () => {
    setOpen(false);
    setSolutionsOpen(false);
    setDnaOpen(false);
  };

  return (
    <>
      {/* ================================================= */}
      {/* MOBILE NAVBAR ACTIONS */}
      {/* Theme Toggle stays OUTSIDE the mobile menu */}
      {/* ================================================= */}

      


      {/* ================================================= */}
      {/* BACKDROP */}
      {/* ================================================= */}

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
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* ================================================= */}
      {/* MOBILE PANEL */}
      {/* ================================================= */}

      <div
        className={`
          lg:hidden
          fixed
          top-[70px]
          md:top-[90px]
          right-0
          z-50

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

          {/* ================================================= */}
          {/* THE HUB */}
          {/* ================================================= */}

          <Link
            to="/"
            onClick={close}
            className="
              group
              flex items-center justify-between
              border-b
              theme-border
              py-4
              text-[16px]
              font-semibold
              theme-text
              transition-colors duration-200
              hover:text-violet-600
            "
          >
            <span>The Hub</span>

            <span
              className="
                translate-x-[-4px]
                opacity-0
                transition-all duration-200
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >
              →
            </span>
          </Link>


          {/* ================================================= */}
          {/* SOLUTIONS */}
          {/* ================================================= */}

          <AccordionSection
            title="Solutions / Expertise"
            items={SOLUTIONS_ITEMS}
            isOpen={solutionsOpen}
            onToggle={() =>
              setSolutionsOpen((prev) => !prev)
            }
            onLinkClick={close}
          />


          {/* ================================================= */}
          {/* OUR DNA */}
          {/* ================================================= */}

          <AccordionSection
            title="Our DNA"
            items={DNA_ITEMS}
            isOpen={dnaOpen}
            onToggle={() =>
              setDnaOpen((prev) => !prev)
            }
            onLinkClick={close}
          />


          {/* ================================================= */}
          {/* PORTFOLIO */}
          {/* ================================================= */}

          <Link
            to="/case-study"
            onClick={close}
            className="
              group
              flex items-center justify-between
              border-b
              theme-border
              py-4
              text-[16px]
              font-semibold
              theme-text
              transition-colors duration-200
              hover:text-violet-600
            "
          >
            <span>Portfolio</span>

            <span
              className="
                translate-x-[-4px]
                opacity-0
                transition-all duration-200
                group-hover:translate-x-0
                group-hover:opacity-100
              "
            >
              →
            </span>
          </Link>


          {/* ================================================= */}
          {/* AUTH SECTION */}
          {/* Login / Admin / Logout */}
          {/* ================================================= */}

          <div
            className="
              mt-6
              flex
              flex-col
              gap-3
            "
          >
            <AuthButton />
          </div>


          {/* ================================================= */}
          {/* PARTNER WITH US */}
          {/* ================================================= */}

          <Link
            to="/partnership"
            onClick={close}
            className="
              group
              relative
              mt-4
              flex h-[52px]
              w-full
              items-center
              justify-center
              overflow-hidden
              rounded-full

              bg-gradient-to-r
              from-violet-600
              to-indigo-500

              px-6

              text-[14.5px]
              font-semibold
              tracking-wide
              text-white

              shadow-[0_14px_30px_-8px_rgba(124,58,237,0.55)]

              transition-all duration-300

              hover:scale-[1.02]
              hover:shadow-[0_18px_40px_-8px_rgba(124,58,237,0.7)]
            "
          >
            {/* Shine */}
            <span
              className="
                pointer-events-none
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/30
                to-transparent
                transition-transform duration-700
                group-hover:translate-x-full
              "
            />

            <span
              className="
                relative z-10
                flex items-center gap-2
              "
            >
              Partner With Us

              <span
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </span>
          </Link>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;
