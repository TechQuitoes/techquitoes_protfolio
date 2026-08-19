import { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-[70px] md:h-[90px] lg:h-[110px] px-4 sm:px-6 flex items-center justify-between">
        <NavbarLogo />

        {/* Desktop nav — hidden below lg */}
        <div className="hidden lg:flex">
          <DesktopMenu />
        </div>

        {/* Hamburger — visible below lg only */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-full"
        >
          <span className="relative flex h-4 w-6 flex-col justify-between">
            <span
              className={`h-[2px] w-full bg-[#14101F] transition-all duration-300 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full bg-[#14101F] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full bg-[#14101F] transition-all duration-300 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
    </nav>
  );
};

export default Navbar;