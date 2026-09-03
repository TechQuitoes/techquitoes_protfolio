import {
  LogOut,
  ShieldCheck,
  CircleUserRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const AuthButton = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully 👋");

    navigate("/login", { replace: true });
  };

  // ================= NOT LOGGED IN =================
  if (!user) {
    return (
      <button
        onClick={() => navigate("/login")}
        aria-label="Login"
        title="Login"
        className="
          group
          flex
          flex-col
          items-center
          justify-center
          gap-1
          transition-all
          duration-300
        "
      >
        {/* User Icon */}
        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            theme-bg
            theme-text
            transition-all
            duration-300
            group-hover:text-[var(--accent-end)]
            group-hover:scale-105
          "
        >
          <CircleUserRound
            size={40}
            strokeWidth={1.8}
          />
        </div>

        {/* Login Text */}
        
      </button>
    );
  }

  // ================= LOGGED IN =================
  return (
    <div className="flex items-center gap-3">
      {/* Admin Button */}
      <button
        onClick={() => navigate("/admin")}
        className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-violet-600
          px-4
          py-2
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-violet-700
        "
      >
        <ShieldCheck size={18} />
        <span>Admin</span>
      </button>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        aria-label="Logout"
        title="Logout"
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          theme-icon-bg
          theme-text-secondary
          transition-all
          duration-300
          hover:bg-red-100
          hover:text-red-600
        "
      >
        <LogOut size={19} />
      </button>
    </div>
  );
};

export default AuthButton;