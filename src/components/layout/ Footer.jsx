import React from "react";
// import { useLocation } from "react-router-dom";


const Footer = () => {
  // const location = useLocation(); // ✅ FIX
  // const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <footer className="relative overflow-hidden bg-black items-center ">
     

      {/* Bottom (COMMON for both) */}
     <div className="flex w-full items-center justify-center gap-4 py-6 text-sm text-gray-400">
  <p>
    Copyright © 2026 Techquitoes Solutions
  </p>

  <span>|</span>

  <a
    href="/privacy-policy"
    className="transition-colors hover:text-indigo-400"
  >
    Privacy Policy
  </a>

  <span>|</span>

  <a
    href="/terms-and-conditions"
    className="transition-colors hover:text-indigo-400"
  >
    Terms & Conditions
  </a>
</div>
    </footer>
  );
};


export default Footer;