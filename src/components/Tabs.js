import React from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LayoutGrid,
  Code,
  Palette,
  Settings,
  ShoppingCart,
  BarChart3,
} from "lucide-react";

const tabConfig = [
  { name: "All", icon: LayoutGrid },
  { name: "Web Development", icon: Code },
  { name: "Brand Identity", icon: Palette },
  { name: "Business Automation", icon: Settings },
  { name: "E-Commerce Applications", icon: ShoppingCart },
  { name: "Intelligence Dashboard", icon: BarChart3 },
];

const Tabs = ({ projects }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = decodeURIComponent(searchParams.get("tab") || "All");

  const handleClick = (tab) => {
    setSearchParams({ tab: encodeURIComponent(tab) });
  };

  return (
    <div className="mb-10 ">
      {/* Scroll Container */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 bg-black">
        {tabConfig.map((tab) => {
          const Icon = tab.icon;

          const count =
            tab.name === "All"
              ? projects.length
              : projects.filter(
                  (p) =>
                    p.category?.toLowerCase() === tab.name.toLowerCase()
                ).length;

          const isActive = activeTab === tab.name;

          return (
            <button
              key={tab.name}
              onClick={() => handleClick(tab.name)}
              className="relative flex items-center gap-2 px-5 py-2 rounded-full whitespace-nowrap bg-black border-2"
            >
              {/* Animated Background */}
              {isActive && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-cyan-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}

              {/* Content */}
              <span
                className={`relative z-10 flex items-center gap-2 text-sm transition bg-black
                ${
                  isActive
                    ? "text-black font-bold text-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <Icon size={16} />
                {tab.name} ({count})
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;