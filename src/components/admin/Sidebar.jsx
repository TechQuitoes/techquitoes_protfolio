import { Link } from "react-router-dom";
import { FaProjectDiagram, FaTachometerAlt, FaTimes } from "react-icons/fa";

const navItems = [
  { to: "/admin", label: "My Dashboard", icon: <FaTachometerAlt /> },
  { to: "/admin/projects", label: "My Projects", icon: <FaProjectDiagram /> },
  { to: "/admin/about", label: "AboutUs", icon: <FaProjectDiagram /> },
  { to: "/admin/team", label: "Team", icon: <FaProjectDiagram /> },
  { to: "/admin/faqs", label: "FAQs", icon: <FaProjectDiagram /> },
  { to: "/admin/users", label: "User Mangment", icon: <FaProjectDiagram /> },
];

const Sidebar = ({ isOpen = false, onClose = () => {} }) => {
  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-30 md:hidden"
        />
      )}

      {/* Sidebar - fixed on every breakpoint */}
      <div
        className={`w-64 bg-white text-black p-6 flex flex-col justify-between
        fixed top-20 left-0 h-screen z-40 overflow-y-auto
        pt-24 md:pt-6
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
      >
        {/* Top Section */}
        <div>
          <div className="flex items-center justify-between mb-6 md:hidden">
            <h2 className="text-lg font-bold">Menu</h2>
            <button onClick={onClose} aria-label="Close menu">
              <FaTimes className="text-xl" />
            </button>
          </div>

          <nav className="space-y-5 mt-5">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className="flex items-center gap-2 hover:text-gray-400"
              >
                {item.icon} {item.label}
              </Link>
            ))}
          </nav>
        </div>

        
      </div>
    </>
  );
};

export default Sidebar;