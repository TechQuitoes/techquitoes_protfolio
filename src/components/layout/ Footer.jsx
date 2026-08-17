import React from "react";
// import { useLocation } from "react-router-dom";


const Footer = () => {
  // const location = useLocation(); // ✅ FIX
  // const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <footer className="relative overflow-hidden bg-[#231002] text-gray-300">
     

      {/* Bottom (COMMON for both) */}
      <div className="w-full max-w-4xl h-px bg-white mx-auto"></div>
      <div className="flex flex-col items-center justify-center gap-4 px-6 py-6 text-sm md:flex-row">
        <p className="text-gray-400">
          Copyright © 2025 Techquitoes Solutions | All Rights Reserved{" "}
          <span className="text-red-500">❤</span>
        </p>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-indigo-400">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-indigo-400">
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;