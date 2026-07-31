import { useState } from "react";
import Button from "../ui/Button";
import { navLinks } from "../../data/navData";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaSignOutAlt } from "react-icons/fa";
import ChecKUser from "../../CheckUser";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const { user, logout } = useAuth();

  const isAdminPage = location.pathname.startsWith("/admin");
  const isAdmin = localStorage.getItem("is_admin") === "true";
  const checkuser = ChecKUser();

  const isCaseStudyPage =
    location.pathname === "/case-study" ||
    location.pathname === "/form";

  const isLoginPage = location.pathname === "/login";
  const isAuthPage =
  location.pathname === "/login" ||
  location.pathname === "/signup";
  const handleCase = () => {
    navigate(isCaseStudyPage ? "/" : "/case-study");
  };

  const handleAuthClick = () => {
    if (user) {
      logout();
      navigate("/");
    } else {
      navigate(isLoginPage ? "/signup" : "/login");
    }
  };

  return (
    <nav
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
    isAdminPage
      ? "bg-white border-b border-gray-200 shadow-sm"
      : "bg-black/40 backdrop-blur-xl border-b border-white/10"
  }`}
>
      <div
        className={`relative flex items-center justify-between 
        px-[clamp(12px,2vw,28px)] 
        py-[clamp(10px,1.5vw,18px)] 
        ${
          isAdminPage
            ? "w-full"
            : "max-w-7xl mx-auto"
        }`}
      >
        {/* ================= LOGO ================= */}

        {isAdminPage ? (
          <>
            {/* Left Admin Text - hidden on small screens to avoid colliding with the centered logo */}
            <div className="z-10">
              <a
    href="https://techquitoes.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      className="w-[clamp(100px,12vw,190px)] object-contain"
       src={isAuthPage ? "/techqblack.png" : "/techqblack.png"}
      alt="TechQ"
    />
  </a>
            </div>

            {/* Center Logo */}
<div className="absolute left-1/2 -translate-x-1/2">
<h1 className="hidden sm:block text-black font-bold whitespace-nowrap text-[clamp(1rem,1.4vw,1.8rem)]">
                Admin Panel
              </h1>
  
</div>
</>
) : (
  <a
    href="https://techquitoes.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="shrink-0"
  >
    <img
      className="w-[clamp(120px,12vw,190px)] object-contain"
       src={isAuthPage ? "/techqblack.png" : "/techQlogo.png"}
      alt="TechQ"
    />
  </a>

        )}

        {/* ================= DESKTOP MENU ================= */}

        <div className="hidden md:flex items-center gap-[clamp(12px,1.5vw,28px)] ml-auto">
          {/* Home Nav Links */}
          {location.pathname === "/" && (
            <ul className="flex items-center gap-[clamp(16px,2vw,36px)]">
              {navLinks.map((link, i) => (
                <li key={i} className="relative group">
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-all duration-300 text-[clamp(0.85rem,1vw,1.05rem)]"
                  >
                    {link.label}

                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Dashboard */}
          {checkuser && isAdmin && location.pathname !== "/admin" && (
  <Button
    className="text-[clamp(0.85rem,1vw,1rem)] px-[clamp(14px,2vw,24px)] py-[clamp(8px,1vw,14px)]"
    onClick={() => navigate("/admin")}
  >
    Dashboard
  </Button>
)}

          {/* Case Study */}
{!isCaseStudyPage && (
  <button
    className="text-[clamp(0.85rem,1.2vw,2rem)] px-[clamp(14px,2vw,24px)] py-[clamp(8px,1vw,14px)] text-gray-600"
    onClick={handleCase}
  >
    Portfolio
  </button>
  
)}


          {/* Auth */}
          {!isCaseStudyPage &&(<button
            onClick={handleAuthClick}
            className={`flex items-center gap-2 transition-all duration-300 text-[clamp(0.8rem,1vw,2rem)] ${
              user
                ? "text-red-400 hover:text-red-300"
                : "text-gray-400 hover:text-white"
            }`}
          >
            

            {user
              ? checkuser
                ?  <>
        <FaSignOutAlt /> Log Out
      </>
                : "LogIn"
              : isLoginPage
              ? ""
              : "Login"}
          </button>)}
          
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden z-20 ${isAdminPage ? "text-black" : "text-white"}`}
          aria-label="Toggle Menu"
        >
          {open ? (
            <XMarkIcon className="h-7 w-7" />
          ) : (
            <Bars3Icon className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-5 py-5 flex flex-col gap-4">
          {/* Nav Links */}
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-pink-400 transition-colors text-[15px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/10 pt-4 flex flex-col gap-3">
            {/* Case Study */}
            <Button
              className="w-full"
              onClick={() => {
                handleCase();
                setOpen(false);
              }}
            >
              {isCaseStudyPage ? "Home" : "Case Study"}
            </Button>

            {/* Dashboard */}
            {checkuser && isAdmin && (
              <Button
                className="w-full"
                onClick={() => {
                  navigate(
                    location.pathname === "/admin"
                      ? "/"
                      : "/admin"
                  );

                  setOpen(false);
                }}
              >
                {location.pathname === "/admin"
                  ? "Home"
                  : "Dashboard"}
              </Button>
            )}

            {/* Auth */}
            {!user ? (
              <Button
                className="w-full"
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                Login
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={() => {
                  logout();
                  navigate("/");
                  setOpen(false);
                }}
              >
                Log Out
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;