import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import ChecKUser from "../../CheckUser";
import { FaBars } from "react-icons/fa";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkuser = ChecKUser();

    if (!checkuser) {
      navigate("/login");
      return;
    }

    const is_admin = localStorage.getItem("is_admin");

    console.log(
      "is admin data in admin layout is :- ",
      is_admin
    );

    if (is_admin === "false") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div
      className="
        flex
        min-h-screen
        mt-20
        theme-bg-secondary
        theme-text
        transition-colors
        duration-300
      "
    >
      {/* =========================================
          MOBILE MENU BUTTON
      ========================================= */}

      <button
        onClick={() => setSidebarOpen(true)}
        className="
          fixed
          left-4
          top-24
          z-40
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-xl
          bg-slate-900
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:bg-slate-800
          md:hidden
        "
        aria-label="Open menu"
      >
        <FaBars size={16} />
      </button>

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main
        className="
          w-full
          min-w-0
          flex-1
          p-4
          transition-colors
          duration-300
          sm:p-8
          md:ml-64
        "
      >
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;