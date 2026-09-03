import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import api from "../api";

const Login = () => {
const navigate = useNavigate();
const { login, user } = useAuth();

const [form, setForm] = useState({
email: "",
password: "",
});

const [loading, setLoading] = useState(false);

// Prevent logged-in user from accessing login page
useEffect(() => {
if (user?.token) {
if (user?.is_admin) {
navigate("/admin", { replace: true });
} else {
navigate("/", { replace: true });
}
}
}, [user, navigate]);

const handleChange = (e) => {
setForm((prev) => ({
...prev,
[e.target.name]: e.target.value,
}));
};

const handleLogin = async (e) => {
e.preventDefault();


setLoading(true);

try {
  const formData = new URLSearchParams();

  formData.append("username", form.email);
  formData.append("password", form.password);

  const response = await api.post("/api/auth/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const data = response.data;

  localStorage.setItem("token", data.access_token);
  localStorage.setItem("is_admin", data.is_admin.toString());

  login({
    token: data.access_token,
    is_admin: data.is_admin,
  });

  toast.success("Login Successful 🚀");

  if (data.is_admin) {
    navigate("/admin");
  } else {
    navigate("/");
  }
} catch (error) {
  toast.error(error.response?.data?.detail || "Login failed");
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">


  <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

    {/* ================= LEFT SIDE ================= */}
    <div className="flex flex-col items-start text-left">

  {/* LOGO - CENTERED IN LEFT SECTION */}
  
<div className="mb-8 flex w-full justify-center pr-10">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <span className="tq-ring-spin absolute inset-0 rounded-full border border-dashed border-fuchsia-400/25" />
              <span
                className="tq-pulse absolute inset-2 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(192,38,211,0.35), transparent 70%)" }}
              />
              <Link to="/">
              <img
                src="/TQ_logo.png"
                alt="TechQuitoes"
                className="relative h-20 w-20 object-contain drop-shadow-[0_0_25px_rgba(192,38,211,0.45)]"
              /></Link>
            </div>
          </div>
          

   {/* EYEBROW / MONO TAG */}
          <span className="tq-font-mono mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-md tracking-widest text-fuchsia-300/80">
            <span className="h-3.5 w-3.5 rounded-full bg-fuchsia-400 shadow-[0_0_8px_2px_rgba(232,121,249,0.7)]" />
             TECHQUITOES SOLUTIONS
          </span>
 
         
 
          {/* WELCOME TEXT */}
          <h2 className="tq-font-display bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Admin Panel 
          </h2>
 
          <p className="tq-font-body mt-4 max-w-md text-base leading-relaxed text-[#9491a8] sm:text-lg">
            Empowering ideas, technology, and innovation.
            Sign in to continue your journey with TechQuitoes.
          </p>
 
          {/* DECORATIVE LINE */}
          <div className="mt-8 h-px w-24 bg-gradient-to-r from-fuchsia-400/80 to-transparent" />
        </div>


    {/* ================= RIGHT SIDE LOGIN ================= */}
    <div className="relative w-full max-w-sm mx-auto lg:ml-auto">

      {/* LOADER OVERLAY */}
      {loading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm">

          <div className="flex flex-col items-center gap-4">

            <div className="h-10 w-10 animate-spin rounded-full border-4 border-purple-200 border-t-purple-600" />

            <p className="text-sm font-medium text-gray-600">
              Logging in...
            </p>

          </div>

        </div>
      )}

      {/* LOGIN HEADING */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-gray-900">
          Sign In
        </h2>

        <p className="mt-2 text-gray-500">
          Access your TechQuitoes account
        </p>

      </div>


      {/* FORM */}
      <form onSubmit={handleLogin} className="space-y-5">

        {/* EMAIL */}
        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            placeholder="john@example.com"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              transition
              focus:border-purple-500
              focus:ring-2
              focus:ring-purple-500/20
              disabled:cursor-not-allowed
              disabled:bg-gray-100
              disabled:opacity-70
            "
            required
          />

        </div>


        {/* PASSWORD */}
        <div>

          <label className="mb-2 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            disabled={loading}
            className="
              w-full
              rounded-xl
              border
              border-gray-300
              bg-white
              px-4
              py-3
              text-gray-900
              outline-none
              transition
              focus:border-purple-500
              focus:ring-2
              focus:ring-purple-500/20
              disabled:cursor-not-allowed
              disabled:bg-gray-100
              disabled:opacity-70
            "
            required
          />

        </div>


        {/* SIGN IN BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-600
            py-3
            font-semibold
            text-white
            shadow-lg
            shadow-purple-500/20
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:shadow-purple-500/30
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "Signing In..." : "Sign In"}
        </button>

      </form>


      {/* FOOTER */}
      <div className="mt-6 text-center text-sm text-gray-500">

        Don't have an account?{" "}

        <button
          type="button"
          onClick={() => navigate("/signup")}
          disabled={loading}
          className="
            font-semibold
            text-purple-600
            transition
            hover:text-fuchsia-600
            hover:underline
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          Create Account
        </button>

      </div>

    </div>

  </div>

</div>

);
};

export default Login;
