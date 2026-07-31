import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api";

const PASSWORD_REGEX =
/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;

const Signup = () => {
const navigate = useNavigate();

const [form, setForm] = useState({
name: "",
email: "",
password: "",
confirmPassword: "",
});

const [showPassword, setShowPassword] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setForm((prev) => ({
...prev,
[e.target.name]: e.target.value,
}));
};

const handleSignup = async (e) => {
e.preventDefault();


// Password validation
if (!PASSWORD_REGEX.test(form.password)) {
  toast.error(
    "Password must be 8-14 chars with uppercase, number & special character"
  );
  return;
}

// Confirm password validation
if (form.password !== form.confirmPassword) {
  toast.error("Passwords do not match ❌");
  return;
}

setLoading(true);

try {
  await api.post("/api/auth/register", {
    name: form.name,
    email: form.email,
    password: form.password,
  });

  toast.success("Signup successful 🎉");

  navigate("/login");
} catch (error) {
  toast.error(error.response?.data?.detail || "Signup failed");
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-dvh w-full overflow-x-hidden bg-white">


  <main className="relative flex min-h-dvh items-center justify-center px-6 py-12">

    {/* ================= MAIN LAYOUT ================= */}
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">

      {/* ================= LEFT SIDE ================= */}
      <div className="flex flex-col items-start text-left">

        {/* LOGO - CENTERED IN LEFT SECTION */}
        <div className="mb-8 flex w-full justify-center pr-10">

          <div className="relative flex h-28 w-28 items-center justify-center">

            {/* ROTATING RING */}
            <span className="tq-ring-spin absolute inset-0 rounded-full border border-dashed border-fuchsia-400/25" />

            {/* GLOW */}
            <span
              className="tq-pulse absolute inset-2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(192,38,211,0.35), transparent 70%)",
              }}
            />

            {/* LOGO */}
            <img
              src="/TQ_logo.png"
              alt="TechQuitoes"
              className="
                relative
                h-20
                w-20
                object-contain
                drop-shadow-[0_0_25px_rgba(192,38,211,0.45)]
              "
            />

          </div>

        </div>


        {/* EYEBROW */}
        <span
          className="
            tq-font-mono
            mb-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-fuchsia-200
            bg-fuchsia-50
            px-3
            py-1
            text-xs
            tracking-widest
            text-fuchsia-600
          "
        >

          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-fuchsia-500
              shadow-[0_0_8px_2px_rgba(232,121,249,0.7)]
            "
          />

          TECHQUITOES.SYS

        </span>


        {/* MAIN HEADING */}
        <h1
          className="
            tq-font-display
            bg-gradient-to-r
            from-violet-500
            via-fuchsia-500
            to-pink-500
            bg-clip-text
            text-5xl
            font-bold
            tracking-tight
            text-transparent
            sm:text-6xl
            lg:text-7xl
          "
        >
          Join TechQuitoes
        </h1>


        {/* DESCRIPTION */}
        <p
          className="
            tq-font-body
            mt-4
            max-w-md
            text-base
            leading-relaxed
            text-gray-500
            sm:text-lg
          "
        >
          Create your account and become part of a community building ideas,
          technology, and innovation.
        </p>


        {/* DECORATIVE LINE */}
        <div
          className="
            mt-8
            h-px
            w-24
            bg-gradient-to-r
            from-fuchsia-500
            to-transparent
          "
        />

      </div>


      {/* ================= RIGHT SIDE SIGNUP ================= */}
      <div className="relative mx-auto w-full max-w-[340px] lg:ml-auto">

  {/* LOADER OVERLAY */}
  {loading && (
    <div
      className="
        absolute
        inset-0
        z-50
        flex
        items-center
        justify-center
        rounded-2xl
        bg-white/80
        backdrop-blur-sm
      "
    >
      <div className="flex flex-col items-center gap-3">

        <div
          className="
            h-8
            w-8
            animate-spin
            rounded-full
            border-4
            border-purple-200
            border-t-purple-600
          "
        />

        <p className="text-xs font-medium text-gray-600">
          Creating account...
        </p>

      </div>
    </div>
  )}


  {/* SIGNUP HEADING */}
  <div className="mb-5">

    <h2 className="text-2xl font-bold text-gray-900">
      Create Account
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      Start your journey with TechQuitoes
    </p>

  </div>


  {/* FORM */}
  <form onSubmit={handleSignup} className="space-y-3">

    {/* FULL NAME */}
    <div>

      <label className="mb-1 block text-xs font-medium text-gray-700">
        Full Name
      </label>

      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={form.name}
        onChange={handleChange}
        disabled={loading}
        autoComplete="name"
        required
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          px-3
          py-2
          text-sm
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
      />

    </div>


    {/* EMAIL */}
    <div>

      <label className="mb-1 block text-xs font-medium text-gray-700">
        Email Address
      </label>

      <input
        type="email"
        name="email"
        placeholder="john@example.com"
        value={form.email}
        onChange={handleChange}
        disabled={loading}
        autoComplete="email"
        required
        className="
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
          px-3
          py-2
          text-sm
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
      />

    </div>


    {/* PASSWORD */}
    <div>

      <label className="mb-1 block text-xs font-medium text-gray-700">
        Password
      </label>

      <div className="relative">

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
          disabled={loading}
          autoComplete="new-password"
          required
          className="
            w-full
            rounded-lg
            border
            border-gray-300
            bg-white
            px-3
            py-2
            pr-10
            text-sm
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
        />

        <PasswordToggle
          visible={showPassword}
          onClick={() => setShowPassword((prev) => !prev)}
        />

      </div>

      <p className="mt-1 text-[10px] text-gray-400">
        8–14 characters · 1 uppercase · 1 number · 1 special character
      </p>

    </div>


    {/* CONFIRM PASSWORD */}
    <div>

      <label className="mb-1 block text-xs font-medium text-gray-700">
        Confirm Password
      </label>

      <div className="relative">

        <input
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          disabled={loading}
          autoComplete="new-password"
          required
          className="
            w-full
            rounded-lg
            border
            border-gray-300
            bg-white
            px-3
            py-2
            pr-10
            text-sm
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
        />

        <PasswordToggle
          visible={showConfirm}
          onClick={() => setShowConfirm((prev) => !prev)}
        />

      </div>

    </div>


    {/* SIGNUP BUTTON */}
    <button
      type="submit"
      disabled={loading}
      className="
        mt-2
        w-full
        rounded-lg
        bg-gradient-to-r
        from-purple-600
        to-fuchsia-600
        py-2.5
        text-sm
        font-semibold
        text-white
        shadow-md
        shadow-purple-500/20
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-purple-500/30
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {loading ? "Creating Account..." : "Create Account"}
    </button>

  </form>


  {/* LOGIN FOOTER */}
  <div className="mt-4 text-center text-xs text-gray-500">

    Already have an account?{" "}

    <button
      type="button"
      onClick={() => navigate("/login")}
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
      Sign In
    </button>

  </div>

</div>
</div>

  </main>

</div>


);
};

/* ================= PASSWORD TOGGLE ================= */

const PasswordToggle = ({ visible, onClick }) => (
<button
type="button"
onClick={onClick}
className="
absolute
right-3
top-1/2
-translate-y-1/2
text-gray-400
transition-colors
hover:text-gray-600
"
aria-label={visible ? "Hide password" : "Show password"}

>

{visible ? (

  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-10-8-10-8a18.45 18.45 0 0 1 5.06-5.94" />

    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.16 3.19" />

    <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />

    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>

) : (

  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s3-8 11-8 11 8 11 8-3 8-11 8-11-8-11-8Z" />

    <circle cx="12" cy="12" r="3" />
  </svg>

)}

  </button>
);

export default Signup;
