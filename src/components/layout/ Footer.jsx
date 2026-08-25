import React from "react";

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-black">
      <div className="mx-auto flex w-full items-center justify-center px-4 py-5 sm:px-6 sm:py-6">

        {/* Desktop */}
        <div className="hidden items-center justify-center gap-4 text-[16px] font-normal leading-5 text-gray-400 sm:flex">
          <p className="m-0 whitespace-nowrap text-[16px] font-normal leading-5 text-gray-400">
            Copyright © 2026 Techquitoes Solutions
          </p>

          <span className="text-gray-600">|</span>

          <a
            href="/privacy-policy"
            className="whitespace-nowrap text-[16px] font-normal leading-5 text-gray-400 transition-colors duration-200 hover:text-indigo-400"
          >
            Privacy Policy
          </a>

          <span className="text-gray-600">|</span>

          <a
            href="/terms-and-conditions"
            className="whitespace-nowrap text-[16px] font-normal leading-5 text-gray-400 transition-colors duration-200 hover:text-indigo-400"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center justify-center gap-1.5 text-center sm:hidden">

          {/* Copyright */}
          <p className="m-0 whitespace-nowrap text-[11px] font-normal leading-5 text-gray-400">
            Copyright © 2026 Techquitoes Solutions
          </p>

          {/* Links */}
          <div className="flex items-center justify-center gap-2 whitespace-nowrap">
            <a
              href="/privacy-policy"
              className="text-[11px] font-normal leading-5 text-gray-400 transition-colors duration-200 hover:text-indigo-400"
            >
              Privacy Policy
            </a>

            <span className="text-[11px] text-gray-600">
              |
            </span>

            <a
              href="/terms-and-conditions"
              className="text-[11px] font-normal leading-5 text-gray-400 transition-colors duration-200 hover:text-indigo-400"
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