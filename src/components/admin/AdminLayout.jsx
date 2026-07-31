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
    }

    const is_admin = localStorage.getItem("is_admin");
    console.log("is admin data in admin layout is :- ", is_admin);
    if (is_admin === "false") {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex mt-20 min-h-screen bg-gray-100">
      {/* Mobile menu toggle button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden fixed top-24 left-4 z-40 bg-black text-white p-2.5 rounded-lg shadow-lg"
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* md:ml-64 offsets content since the sidebar is now permanently fixed (out of flow) */}
      <div className="flex-1 p-4 sm:p-8 w-full min-w-0 md:ml-64">{children}</div>
    </div>
  );
};

export default AdminLayout;