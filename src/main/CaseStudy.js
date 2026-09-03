import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  LayoutGrid,
  Code,
  Palette,
  Settings,
  ShoppingCart,
  BarChart3,
  Smartphone,
  MoreHorizontal,
} from "lucide-react";

import PortfolioCard from "../components/PortfolioCard";
import api from "../api";
import CaseStudySkeleton from "../components/CaseStudySkeleton";

import HeroSection from "../components/HeroSection";


// ─────────────────────────────────────────────────────────────
// Category definitions
// ─────────────────────────────────────────────────────────────

const CATEGORY_DEFINITIONS = [
  { name: "Web Development", icon: Code },
  { name: "Microsoft 365", icon: Palette },
  { name: "AI & Automation", icon: Settings },
  { name: "E-commerce", icon: ShoppingCart },
  { name: "Marketing Design", icon: BarChart3 },
  { name: "Mobile Apps", icon: Smartphone },
  { name: "UI/UX Design", icon: Smartphone },
];

const ALL_TAB = {
  name: "All",
  icon: LayoutGrid,
};

const OTHER_TAB = {
  name: "Other",
  icon: MoreHorizontal,
};

// Normalize category strings
const normalize = (value) => (value || "").trim().toLowerCase();

const CaseStudy = () => {
  const [projects, setProjects] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = decodeURIComponent(
    searchParams.get("tab") || "All"
  );

  const [loading, setLoading] = useState(true);

  const tabScrollRef = useRef(null);
  const activeTabRef = useRef(null);

  // ─────────────────────────────────────────────────────────
  // Fetch Projects
  // ─────────────────────────────────────────────────────────

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await api.get("/api/projects/public");
      const data = response.data;

      if (Array.isArray(data)) {
        const sortedProjects = data.sort(
          (a, b) =>
            new Date(b.updated_at) - new Date(a.updated_at)
        );

        setProjects(sortedProjects);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error(error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // ─────────────────────────────────────────────────────────
  // Group projects by category
  // ─────────────────────────────────────────────────────────

  const { categoryMap, otherProjects } = useMemo(() => {
    const map = new Map(
      CATEGORY_DEFINITIONS.map((c) => [c.name, []])
    );

    const other = [];

    projects.forEach((project) => {
      const match = CATEGORY_DEFINITIONS.find(
        (c) =>
          normalize(c.name) ===
          normalize(project.category)
      );

      if (match) {
        map.get(match.name).push(project);
      } else {
        other.push(project);
      }
    });

    return {
      categoryMap: map,
      otherProjects: other,
    };
  }, [projects]);

  // ─────────────────────────────────────────────────────────
  // Dynamic tabs
  // ─────────────────────────────────────────────────────────

  const dynamicTabs = useMemo(() => {
    const tabs = [];

    if (projects.length > 0) {
      tabs.push(ALL_TAB);
    }

    CATEGORY_DEFINITIONS.forEach((category) => {
      if (categoryMap.get(category.name)?.length > 0) {
        tabs.push(category);
      }
    });

    if (otherProjects.length > 0) {
      tabs.push(OTHER_TAB);
    }

    return tabs;
  }, [projects, categoryMap, otherProjects]);

  const availableTabNames = useMemo(
    () => dynamicTabs.map((tab) => tab.name),
    [dynamicTabs]
  );

  // ─────────────────────────────────────────────────────────
  // Project count
  // ─────────────────────────────────────────────────────────

  const getCount = (tabName) => {
    if (tabName === "All") return projects.length;

    if (tabName === "Other") {
      return otherProjects.length;
    }

    return categoryMap.get(tabName)?.length || 0;
  };

  // ─────────────────────────────────────────────────────────
  // Active tab correction
  // ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (loading) return;
    if (dynamicTabs.length === 0) return;

    if (!availableTabNames.includes(activeTab)) {
      setSearchParams(
        {
          tab: encodeURIComponent(dynamicTabs[0].name),
        },
        {
          replace: true,
        }
      );

      setExpandedId(null);
    }
  }, [
    loading,
    dynamicTabs,
    availableTabNames,
    activeTab,
    setSearchParams,
  ]);

  // ─────────────────────────────────────────────────────────
  // Auto scroll active tab
  // ─────────────────────────────────────────────────────────

  useEffect(() => {
    if (
      activeTabRef.current &&
      tabScrollRef.current
    ) {
      const container = tabScrollRef.current;
      const element = activeTabRef.current;

      const elementLeft = element.offsetLeft;
      const elementWidth = element.offsetWidth;
      const containerWidth = container.offsetWidth;

      container.scrollTo({
        left:
          elementLeft -
          containerWidth / 2 +
          elementWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  // ─────────────────────────────────────────────────────────
  // Filtering
  // ─────────────────────────────────────────────────────────

  const filteredProjects = useMemo(() => {
    if (activeTab === "All") {
      return projects;
    }

    if (activeTab === "Other") {
      return otherProjects;
    }

    return categoryMap.get(activeTab) || [];
  }, [
    activeTab,
    projects,
    otherProjects,
    categoryMap,
  ]);

  // ─────────────────────────────────────────────────────────
  // Tab click
  // ─────────────────────────────────────────────────────────

  const handleTabClick = (tab) => {
    if (!availableTabNames.includes(tab)) return;

    setSearchParams({
      tab: encodeURIComponent(tab),
    });

    setExpandedId(null);
  };

  return (
    <div className="w-full theme-bg min-h-screen">
      {/* Hero */}
      <HeroSection />

      <div className="max-w-[90%] mx-auto px-4 sm:px-6 py-16 sm:py-32">

        {/* ───────────────────────────────────────────────
            TABS
        ─────────────────────────────────────────────── */}

        {dynamicTabs.length > 0 && (
          <div className="mb-10 sm:mb-16">

            {/* MOBILE TABS */}

            <div
              ref={tabScrollRef}
              className="
                grid
                grid-cols-2
                gap-2
                md:hidden
              "
            >
              {dynamicTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive =
                  activeTab === tab.name;

                const count = getCount(tab.name);

                return (
                  <button
                    key={tab.name}
                    ref={
                      isActive
                        ? activeTabRef
                        : null
                    }
                    onClick={() =>
                      handleTabClick(tab.name)
                    }
                    className="
                      relative
                      w-full
                      active:scale-95
                      transition-transform
                      duration-150
                    "
                  >

                    {/* Active background */}

                    {isActive && (
                      <motion.div
                        layoutId="activeTabMobile"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 32,
                        }}
                        className="
                          absolute
                          inset-0
                          rounded-full
                          bg-[var(--accent-end)]
                          shadow-lg
                          shadow-purple-500/20
                        "
                      />
                    )}

                    <span
                      className={`
                        relative
                        z-10
                        flex
                        items-center
                        justify-center
                        gap-2
                        w-full
                        px-3
                        py-2.5
                        rounded-full
                        text-xs
                        font-semibold
                        tracking-wide
                        whitespace-nowrap
                        border
                        transition-all
                        duration-200

                        ${
                          isActive
                            ? `
                              text-white
                              border-transparent
                            `
                            : `
                              theme-text-secondary
                              theme-card
                              theme-border
                              hover:theme-hover-bg
                            `
                        }
                      `}
                    >
                      <Icon
                        size={13}
                        strokeWidth={2}
                      />

                      <span className="truncate">
                        {tab.name}
                      </span>

                      <span
                        className={`
                          flex-shrink-0
                          text-[10px]
                          font-bold
                          rounded-full
                          px-1.5
                          py-0.5
                          min-w-[20px]
                          text-center
                          leading-none

                          ${
                            isActive
                              ? `
                                bg-white/20
                                text-white
                              `
                              : `
                                bg-[var(--icon-bg)]
                                theme-text-secondary
                              `
                          }
                        `}
                      >
                        {count}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* DESKTOP TABS */}

            <div className="hidden md:flex md:justify-end">
              <div
                className="
                  inline-flex
                  flex-wrap
                  items-center
                  justify-end
                  gap-1
                  p-1.5
                  rounded-full
                  theme-bg-secondary
                  theme-border
                  border
                "
              >
                {dynamicTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive =
                    activeTab === tab.name;

                  const count = getCount(tab.name);

                  return (
                    <button
                      key={tab.name}
                      onClick={() =>
                        handleTabClick(tab.name)
                      }
                      className="relative"
                    >

                      {/* Active background */}

                      {isActive && (
                        <motion.div
                          layoutId="activeTabDesktop"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 32,
                          }}
                          className="
                            absolute
                            inset-0
                            rounded-full
                            bg-[var(--accent-end)]
                            shadow-md
                            shadow-purple-500/20
                          "
                        />
                      )}

                      <span
                        className={`
                          relative
                          z-10
                          flex
                          items-center
                          gap-2
                          px-5
                          py-2
                          rounded-full
                          text-xs
                          font-semibold
                          whitespace-nowrap
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "text-white"
                              : `
                                theme-text-secondary
                                hover:theme-text
                                hover:theme-hover-bg
                              `
                          }
                        `}
                      >
                        <Icon size={14} />

                        {tab.name}

                        <span
                          className={`
                            text-[10px]
                            rounded-full
                            px-1.5
                            py-0.5

                            ${
                              isActive
                                ? `
                                  bg-white/20
                                  text-white
                                `
                                : `
                                  bg-[var(--icon-bg)]
                                  theme-text-secondary
                                `
                            }
                          `}
                        >
                          {count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ───────────────────────────────────────────────
            PROJECT GRID
        ─────────────────────────────────────────────── */}

        {loading ? (
          <CaseStudySkeleton />

        ) : projects.length === 0 ? (

          <div className="text-center py-20">
            <h3 className="text-2xl font-medium theme-text">
              No Projects Available
            </h3>
          </div>

        ) : filteredProjects.length === 0 ? (

          <div className="text-center py-20">
            <h3 className="text-2xl font-medium theme-text">
              No Projects In This Category
            </h3>
          </div>

        ) : (

          <motion.div
            layout
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
              items-start
            "
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{
                    opacity: 0,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -40,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <PortfolioCard
                    project={project}
                    expanded={
                      expandedId === project.id
                    }
                    onToggle={() =>
                      setExpandedId(
                        expandedId === project.id
                          ? null
                          : project.id
                      )
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      
    </div>
  );
};

export default CaseStudy;