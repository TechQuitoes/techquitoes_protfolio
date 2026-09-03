import { Link, useLocation } from "react-router-dom";
import {
  FaProjectDiagram,
  FaTachometerAlt,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  {
    to: "/admin",
    label: "My Dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    to: "/admin/projects",
    label: "My Projects",
    icon: <FaProjectDiagram />,
  },
  {
    to: "/admin/about",
    label: "About Us",
    icon: <FaProjectDiagram />,
  },
  {
    to: "/admin/team",
    label: "Team",
    icon: <FaProjectDiagram />,
  },
  {
    to: "/admin/faqs",
    label: "FAQs",
    icon: <FaProjectDiagram />,
  },
  {
    to: "/admin/users",
    label: "User Management",
    icon: <FaProjectDiagram />,
  },
];

const Sidebar = ({
  isOpen = false,
  onClose = () => {},
}) => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/admin") {
      return location.pathname === "/admin";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* =========================================
          MOBILE BACKDROP
      ========================================= */}

      {isOpen && (
        <div
          onClick={onClose}
          className="
            fixed
            inset-0
            z-30
            bg-black/60
            backdrop-blur-sm
            md:hidden
          "
        />
      )}

      {/* =========================================
          SIDEBAR
      ========================================= */}

      <aside
        className={`
          fixed
          left-0
          top-20
          z-40
          flex
          h-[calc(100vh-5rem)]
          w-64
          flex-col
          overflow-y-auto
          border-r
          theme-border
          theme-card
          p-6
          transition-all
          duration-300
          ease-in-out

          ${
            isOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:translate-x-0
        `}
      >
        {/* =========================================
            MOBILE HEADER
        ========================================= */}

        <div
          className="
            mb-8
            flex
            items-center
            justify-between
            md:hidden
          "
        >
          <div>
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.18em]
                theme-text-secondary
              "
            >
              Admin
            </p>

            <h2
              className="
                mt-1
                text-lg
                font-bold
                theme-text
              "
            >
              Menu
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              theme-icon-bg
              theme-text-secondary
              transition-all
              duration-300
              hover:bg-[var(--hover-bg)]
              hover:text-[var(--accent-end)]
            "
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* =========================================
            DESKTOP SIDEBAR HEADER
        ========================================= */}

        <div className="mb-8 hidden md:block">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.2em]
              theme-text-secondary
            "
          >
            Admin Panel
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-bold
              theme-text
            "
          >
            Control Center
          </h2>

          <div
            className="
              mt-4
              h-px
              w-full
              theme-border
            "
          />
        </div>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = isActive(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onClose}
                className={`
                  group
                  relative
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  px-4
                  py-3
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    active
                      ? "bg-[var(--hover-bg)] text-[var(--accent-end)]"
                      : "theme-text-secondary hover:bg-[var(--hover-bg)] hover:text-[var(--accent-end)]"
                  }
                `}
              >
                {/* Active indicator */}
                {active && (
                  <span
                    className="
                      absolute
                      left-0
                      top-1/2
                      h-6
                      w-1
                      -translate-y-1/2
                      rounded-r-full
                      theme-accent
                    "
                  />
                )}

                <span
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    transition-all
                    duration-300

                    ${
                      active
                        ? "bg-[var(--icon-bg)] text-[var(--accent-end)]"
                        : "theme-icon-bg theme-text-secondary group-hover:text-[var(--accent-end)]"
                    }
                  `}
                >
                  {item.icon}
                </span>

                <span className="truncate">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* =========================================
            BOTTOM INFO
        ========================================= */}

        <div className="mt-auto pt-8">
          <div
            className="
              rounded-xl
              border
              theme-border
              theme-bg-secondary
              p-4
              transition-colors
              duration-300
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="
                  h-2
                  w-2
                  animate-pulse
                  rounded-full
                  bg-emerald-500
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  theme-text
                "
              >
                System Active
              </span>
            </div>

            <p
              className="
                mt-2
                text-[11px]
                leading-relaxed
                theme-text-secondary
              "
            >
              Admin panel is connected and ready.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;