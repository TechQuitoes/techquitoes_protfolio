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
import CaseStudyNavbar from "../components/layout/CaseStudyNavbar";
import HeroSection from "../components/HeroSection";
import CaseStudyFooter from "../components/layout/CaseStudyFooter";

// ─────────────────────────────────────────────────────────────
// Known category definitions (order here = display order).
// "All" and "Other" are handled separately because they are
// derived, not literal project categories.
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

const ALL_TAB = { name: "All", icon: LayoutGrid };
const OTHER_TAB = { name: "Other", icon: MoreHorizontal };

// Normalize category strings so comparisons are resilient to
// stray whitespace / casing differences coming from the API.
const normalize = (value) => (value || "").trim().toLowerCase();

const CaseStudy = () => {
  const [projects, setProjects] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = decodeURIComponent(searchParams.get("tab") || "All");
  const [loading, setLoading] = useState(true);

  // Ref for the scrollable tab container — used to auto-scroll active tab into view
  const tabScrollRef = useRef(null);
  const activeTabRef = useRef(null);

  // ✅ Fetch Projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await api.get("/api/projects/public");
      const data = response.data;
      if (Array.isArray(data)) {
        const sortedProjects = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
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
  // Group projects by category. Any project whose category does
  // not match a known CATEGORY_DEFINITIONS entry falls into "Other".
  // ─────────────────────────────────────────────────────────
  const { categoryMap, otherProjects } = useMemo(() => {
    const map = new Map(CATEGORY_DEFINITIONS.map((c) => [c.name, []]));
    const other = [];

    projects.forEach((project) => {
      const match = CATEGORY_DEFINITIONS.find(
        (c) => normalize(c.name) === normalize(project.category)
      );
      if (match) {
        map.get(match.name).push(project);
      } else {
        other.push(project);
      }
    });

    return { categoryMap: map, otherProjects: other };
  }, [projects]);

  // ─────────────────────────────────────────────────────────
  // Only tabs that actually contain at least one project are
  // included. "All" only shows if there is at least one project
  // overall, "Other" only shows if there's at least one unmatched
  // project. This guarantees empty tabs are never rendered/clickable.
  // ─────────────────────────────────────────────────────────
  const dynamicTabs = useMemo(() => {
    const tabs = [];

    if (projects.length > 0) tabs.push(ALL_TAB);

    CATEGORY_DEFINITIONS.forEach((c) => {
      if (categoryMap.get(c.name)?.length > 0) tabs.push(c);
    });

    if (otherProjects.length > 0) tabs.push(OTHER_TAB);

    return tabs;
  }, [projects, categoryMap, otherProjects]);

  const availableTabNames = useMemo(
    () => dynamicTabs.map((t) => t.name),
    [dynamicTabs]
  );

  // Returns the project count for a given tab name.
  const getCount = (tabName) => {
    if (tabName === "All") return projects.length;
    if (tabName === "Other") return otherProjects.length;
    return categoryMap.get(tabName)?.length || 0;
  };

  // ─────────────────────────────────────────────────────────
  // Active tab correction:
  // - If the URL points at a tab that no longer has any projects
  //   (or never existed), fall back to the first available tab.
  // - Runs after data finishes loading and whenever the available
  //   tabs change (e.g. after a fetch, or projects being filtered
  //   elsewhere).
  // ─────────────────────────────────────────────────────────
  useEffect(() => {
    if (loading) return;
    if (dynamicTabs.length === 0) return; // no projects at all — nothing to show

    if (!availableTabNames.includes(activeTab)) {
      setSearchParams(
        { tab: encodeURIComponent(dynamicTabs[0].name) },
        { replace: true }
      );
      setExpandedId(null);
    }
  }, [loading, dynamicTabs, availableTabNames, activeTab, setSearchParams]);

  // ✅ Auto-scroll active tab into view on mobile
  useEffect(() => {
    if (activeTabRef.current && tabScrollRef.current) {
      const container = tabScrollRef.current;
      const el = activeTabRef.current;
      const elLeft = el.offsetLeft;
      const elWidth = el.offsetWidth;
      const containerWidth = container.offsetWidth;
      // Center the active tab
      container.scrollTo({
        left: elLeft - containerWidth / 2 + elWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeTab]);

  // ─────────────────────────────────────────────────────────
  // Filtering — derives directly from the same grouping used to
  // build the tabs, so there's no risk of drift between what's
  // shown in the tab list and what's shown in the grid.
  // ─────────────────────────────────────────────────────────
  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return projects;
    if (activeTab === "Other") return otherProjects;
    return categoryMap.get(activeTab) || [];
  }, [activeTab, projects, otherProjects, categoryMap]);

  // ✅ Tab Click Handler — only ever called for tabs that are
  // actually rendered, so it can never navigate to an empty tab.
  const handleTabClick = (tab) => {
    if (!availableTabNames.includes(tab)) return; // safety guard
    setSearchParams({ tab: encodeURIComponent(tab) });
    setExpandedId(null);
  };

  return (
    <div className="w-full bg-white">
      <CaseStudyNavbar />
      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-32">
        {/* ─── TABS ─────────────────────────────────────────────── */}
        {dynamicTabs.length > 0 && (
          <div className="mb-10 sm:mb-16">
            {/*
             * MOBILE  → full-width, horizontally scrollable strip
             * DESKTOP → right-aligned, wrapping pill
             */}

           {/* ── Mobile grid (2 per row, hidden on md+) ── */}
<div
  ref={tabScrollRef}
  className="grid grid-cols-2 gap-2 md:hidden"
>
  {dynamicTabs.map((tab) => {
    const Icon = tab.icon;
    const isActive = activeTab === tab.name;
    const count = getCount(tab.name);

    return (
      <button
        key={tab.name}
        ref={isActive ? activeTabRef : null}
        onClick={() => handleTabClick(tab.name)}
        className="relative w-full active:scale-95 transition-transform duration-150"
      >
        {isActive && (
          <motion.div
            layoutId="activeTabMobile"
            transition={{ type: "spring", stiffness: 400, damping: 32 }}
            className="absolute inset-0 rounded-full bg-violet-600 shadow-lg shadow-violet-600/30"
          />
        )}
        <span
          className={`
            relative z-10
            flex items-center justify-center gap-2
            w-full
            px-3 py-2.5
            rounded-full
            text-xs font-semibold
            tracking-wide
            whitespace-nowrap
            border
            transition-colors duration-200
            ${
              isActive
                ? "text-white border-transparent"
                : "text-zinc-600 bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900"
            }
          `}
        >
          <Icon size={13} strokeWidth={2} />
          <span className="truncate">{tab.name}</span>
          <span
            className={`
              flex-shrink-0 text-[10px] font-bold rounded-full px-1.5 py-0.5 min-w-[20px] text-center leading-none
              ${isActive ? "bg-white/20 text-white" : "bg-zinc-100 text-zinc-500"}
            `}
          >
            {count}
          </span>
        </span>
      </button>
    );
  })}
</div>

{/* ── Desktop / tablet pill row (hidden below md) ── */}
<div className="hidden md:flex md:justify-end">
  <div className="inline-flex flex-wrap items-center justify-end gap-1 p-1.5 rounded-full bg-zinc-50 border border-zinc-100">
    {dynamicTabs.map((tab) => {
      const Icon = tab.icon;
      const isActive = activeTab === tab.name;
      const count = getCount(tab.name);

      return (
        <button
          key={tab.name}
          onClick={() => handleTabClick(tab.name)}
          className="relative"
        >
          {isActive && (
            <motion.div
              layoutId="activeTabDesktop"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
              className="absolute inset-0 rounded-full bg-violet-600"
            />
          )}
          <span
            className={`
              relative z-10
              flex items-center gap-2
              px-5 py-2
              rounded-full
              text-xs font-semibold
              whitespace-nowrap
              transition-all duration-300
              ${isActive ? "text-white" : "text-zinc-600 hover:text-zinc-900"}
            `}
          >
            <Icon size={14} />
            {tab.name}
            <span
              className={`
                text-[10px] rounded-full px-1.5 py-0.5
                ${isActive ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-500"}
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
        {/* ─────────────────────────────────────────────────────── */}

        {/* ─── PROJECT GRID ─────────────────────────────────────── */}
        {loading ? (
          <CaseStudySkeleton />
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-800">
              No Projects Available
            </h3>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-2xl font-medium text-gray-800">
              No Projects In This Category
            </h3>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.3 }}
                >
                  <PortfolioCard
                    project={project}
                    expanded={expandedId === project.id}
                    onToggle={() =>
                      setExpandedId(
                        expandedId === project.id ? null : project.id
                      )
                    }
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
        {/* ─────────────────────────────────────────────────────── */}
      </div>

      <CaseStudyFooter />
    </div>
  );
};

export default CaseStudy;