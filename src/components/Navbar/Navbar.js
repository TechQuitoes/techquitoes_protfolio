import { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionOpen, setSolutionOpen] = useState(false);
  const [dnaOpen, setDnaOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto h-[110px] px-6 flex items-center justify-between">

        <NavbarLogo />

        <DesktopMenu
          solutionOpen={solutionOpen}
          setSolutionOpen={setSolutionOpen}
          dnaOpen={dnaOpen}
          setDnaOpen={setDnaOpen}
        />

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-black text-2xl"
        >
          {mobileOpen ? "×" : "☰"}
        </button>
      </div>

      <MobileMenu
        open={mobileOpen}
        setOpen={setMobileOpen}
      />
    </nav>
  );
};

export default Navbar;