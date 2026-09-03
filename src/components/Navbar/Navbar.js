import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className="
        fixed top-0 left-0 z-50 w-full
        bg-white dark:bg-[#09090b]
        backdrop-blur-2xl
        border-b border-gray-200/70
        dark:border-white/[0.08]
        transition-all duration-300
      "
    >
      <div
        className="
          mx-auto 
          max-w-[96%]
          flex
          h-[76px] md:h-[84px]
          items-center
          justify-between
          px-5 sm:px-10 lg:px-10
        "
      >
        {/* LOGO */}
        <NavbarLogo />

        {/* DESKTOP */}
        <div className="hidden lg:flex flex-1 justify-end">
          <DesktopMenu />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="
            relative z-[60]
            flex h-11 w-11
            items-center justify-center
            rounded-xl
            text-gray-800
            transition-all duration-300
            hover:bg-gray-100
            dark:text-gray-100
            dark:hover:bg-white/10
            lg:hidden
          "
        >
          <span className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`
                h-[2px] w-full
                rounded-full
                bg-current
                origin-center
                transition-all duration-300
                ${
                  mobileOpen
                    ? "translate-y-[9px] rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`
                h-[2px] w-full
                rounded-full
                bg-current
                transition-all duration-300
                ${
                  mobileOpen
                    ? "opacity-0 scale-x-0"
                    : "opacity-100"
                }
              `}
            />

            <span
              className={`
                h-[2px] w-full
                rounded-full
                bg-current
                origin-center
                transition-all duration-300
                ${
                  mobileOpen
                    ? "-translate-y-[9px] -rotate-45"
                    : ""
                }
              `}
            />
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
      />
    </nav>
  );
};

export default Navbar;