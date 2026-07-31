import { motion, useReducedMotion } from "framer-motion";

// Shared shell for Login / Signup:
// Single centered card on a white background — same size on every device.
const AuthLayout = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative min-h-dvh w-full bg-white flex items-center justify-center overflow-x-hidden overflow-y-auto px-4 py-10">
      {/* Background blobs, clipped so they never cause horizontal scroll */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-indigo-200/30 blur-3xl sm:h-56 sm:w-56" />
        <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-violet-200/30 blur-3xl sm:h-56 sm:w-56" />
      </div>

      {/* Fixed-size card: max-w-[380px], identical on phone/tablet/desktop */}
      <motion.div
        initial={{
          opacity: 0,
          y: shouldReduceMotion ? 0 : 16,
          scale: shouldReduceMotion ? 1 : 0.98,
        }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-[380px] rounded-2xl border border-neutral-100 bg-white p-6 shadow-xl shadow-neutral-900/5 sm:p-8"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;