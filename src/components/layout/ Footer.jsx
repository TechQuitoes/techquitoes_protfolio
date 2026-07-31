import React from "react";
import { useLocation } from "react-router-dom";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  const location = useLocation(); // ✅ FIX
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <footer className="relative overflow-hidden bg-transparent text-gray-300">
      {!isAdminPage ? (
        <div className="relative mx-auto max-w-7xl px-6 py-16">
          {/* Top Grid */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            
            {/* Brand */}
            <div>
              <div className="mb-4 text-2xl font-semibold text-white">
                <span className="text-indigo-400">Techquitoes</span>
              </div>
              <p className="text-sm leading-relaxed">
                Techquitoes Solution offer building user friendly websites
                for growing businesses
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  "Home",
                  "About Us",
                  "How It Works",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms & Conditions",
                ].map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer hover:text-indigo-400"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Core Services
              </h4>
              <ul className="space-y-3 text-sm">
                <li>e-commerce development</li>
                <li>Data Analytics and Dashboards</li>
                <li>Chat GPT and AI Development</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-lg font-semibold text-white">
                Techquitoes Solution
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPinIcon className="h-5 w-5 text-indigo-400" />
                  <span>
                    Indore, MP, India
                  </span>
                </li>
                <li className="flex gap-3">
                  <EnvelopeIcon className="h-5 w-5 text-indigo-400" />
                  hello@techquitoes.com
                </li>
                <li className="flex gap-3">
                  <PhoneIcon className="h-5 w-5 text-indigo-400" />
                  +91-7889822746
                </li>
              </ul>

              {/* Social */}
              <div className="mt-6 flex gap-3">
                {[FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-indigo-500"
                    >
                      <Icon size={16} />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-white/10" />
        </div>
      ) : null}

      {/* Bottom (COMMON for both) */}
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