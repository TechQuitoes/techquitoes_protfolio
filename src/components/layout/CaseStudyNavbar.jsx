import { useState } from "react";
import { Menu, X, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const CaseStudyNavbar = () => {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Use the same AuthContext as your main Navbar
  const { user, logout } = useAuth();

  // ================= GET ADMIN =================
  const handleGetStarted = () => {
    if (user) {
      navigate("/admin");
    } else {
      navigate("/login");
    }

    setMobileMenuOpen(false);
  };

  // ================= LOGOUT =================
  const handleLogout = () => {
    // Use AuthContext logout
    logout();

    // Close mobile menu
    setMobileMenuOpen(false);

    // Show success message
    toast.success("Logged out successfully 👋");

    // Navigate after logout
    navigate("/login", { replace: true });
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-zinc-200/80 bg-white/95 backdrop-blur-md">

      {/* ================= NAVBAR ================= */}
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* ================= LOGO ================= */}
        <a
          href="https://techquitoes.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            src="/techqblack.png"
            alt="TechQ"
            className="h-10 w-auto"
          />
        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav className="hidden items-center space-x-8 text-sm font-medium text-zinc-600 md:flex">

          <a
            href="https://techquitoes.com/"
            className="transition-colors hover:text-purple-600"
          >
            The Hub
          </a>

          <a
            href="#demos"
            className="transition-colors hover:text-purple-600"
          >
            Product Demos
          </a>

          <Link
            to="/case-study"
            className="transition-colors hover:text-purple-600"
          >
            Portfolio
          </Link>

          <Link
            to="/partnership"
            className="transition-colors hover:text-purple-600"
          >
            Partner with us
          </Link>

        </nav>


        {/* ================= DESKTOP BUTTONS ================= */}
        <div className="hidden items-center gap-4 md:flex">

          {/* GET ADMIN / DASHBOARD BUTTON */}
          <button
            onClick={handleGetStarted}
            className="
              rounded-full
              bg-purple-600
              px-5
              py-2
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-purple-700
            "
          >
            {user ? "Dashboard" : "Get Admin"}
          </button>


          {/* LOGOUT BUTTON */}
          {user && (
            <button
              onClick={handleLogout}
              className="
                flex
                items-center
                gap-2
                rounded-full
                border
                border-red-200
                px-5
                py-2
                text-sm
                font-semibold
                text-red-600
                transition-all
                hover:bg-red-50
              "
            >
              <LogOut size={16} />

              Logout
            </button>
          )}

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          className="text-zinc-700 md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {mobileMenuOpen && (

        <div className="border-t border-zinc-200 bg-white px-6 py-4 md:hidden">

          <div className="flex flex-col space-y-4 text-zinc-700">

            {/* THE HUB */}
            <a
              href="https://techquitoes.com/"
              onClick={() => setMobileMenuOpen(false)}
            >
              The Hub
            </a>


            {/* PRODUCT DEMOS */}
            <a
              href="#demos"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product Demos
            </a>


            {/* PORTFOLIO */}
            <Link
              to="/case-study"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </Link>


            {/* PARTNERSHIP */}
            <Link
              to="/partnership"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner with us
            </Link>


            {/* DASHBOARD / GET ADMIN */}
            <button
              onClick={handleGetStarted}
              className="
                rounded-full
                bg-purple-600
                px-5
                py-2
                text-white
                transition-all
                hover:bg-purple-700
              "
            >
              {user ? "Dashboard" : "Get Admin"}
            </button>


            {/* LOGOUT */}
            {user && (
              <button
                onClick={handleLogout}
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  border
                  border-red-200
                  px-5
                  py-2
                  font-semibold
                  text-red-600
                  transition-all
                  hover:bg-red-50
                "
              >
                <LogOut size={16} />

                Logout
              </button>
            )}

          </div>

        </div>

      )}

    </header>
  );
};

export default CaseStudyNavbar;