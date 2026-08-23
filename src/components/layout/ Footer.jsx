import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black items-center">
      
      <div className="w-full py-6 text-sm text-gray-400">

        {/* Desktop - unchanged */}
        <div className="hidden sm:flex items-center justify-center gap-4">
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

        {/* Mobile only */}
        <div className="flex flex-col items-center gap-2 sm:hidden">

          {/* First row */}
          <p className="whitespace-nowrap">
            Copyright © 2026 Techquitoes Solutions
          </p>

          {/* Second row */}
          <div className="flex items-center justify-center gap-2 whitespace-nowrap">
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

        </div>

      </div>
    </footer>
  );
};

export default Footer;