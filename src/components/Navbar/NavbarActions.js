import Button from "../ui/Button";
import { FaSignOutAlt } from "react-icons/fa";

const NavbarActions = ({
  user,
  navigate,
  location,
  checkuser,
  isAdmin,
  isCaseStudyPage,
  isLoginPage,
  handleCase,
  handleAuthClick,
}) => {
  return (
    <div className="flex items-center gap-[clamp(12px,1.5vw,28px)]">
      {/* Dashboard */}
      {checkuser &&
        isAdmin &&
        location.pathname !== "/admin" && (
          <Button
            className="text-[clamp(0.85rem,1vw,1rem)] px-[clamp(14px,2vw,24px)] py-[clamp(8px,1vw,14px)]"
            onClick={() => navigate("/admin")}
          >
            Dashboard
          </Button>
        )}

      {/* Portfolio */}
      {!isCaseStudyPage && (
        <button
          onClick={handleCase}
          className="text-[clamp(0.85rem,1.2vw,2rem)] px-[clamp(14px,2vw,24px)] py-[clamp(8px,1vw,14px)] text-gray-600"
        >
          Portfolio
        </button>
      )}

      {/* Authentication */}
      {!isCaseStudyPage && (
        <button
          onClick={handleAuthClick}
          className={`flex items-center gap-2 transition-all duration-300 text-[clamp(0.8rem,1vw,2rem)] ${
            user
              ? "text-red-400 hover:text-red-300"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {user ? (
            checkuser ? (
              <>
                <FaSignOutAlt />
                Log Out
              </>
            ) : (
              "LogIn"
            )
          ) : isLoginPage ? (
            ""
          ) : (
            "Login"
          )}
        </button>
      )}
    </div>
  );
};

export default NavbarActions;