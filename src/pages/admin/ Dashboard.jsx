import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Code2,
  Tags,
  RefreshCw,
  ArrowUpRight,
  Activity,
  Terminal,
  Layers3,
  Clock3,
  ChevronRight,
  Eye,
  EyeOff,
  BarChart3,
  Sparkles,
} from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import api from "../../api";

/* =====================================================
   COUNT UP
===================================================== */

const CountUp = ({ value, duration = 900 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setDisplay(Math.round(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      if (frame) cancelAnimationFrame(frame);
    };
  }, [value, duration]);

  return <>{display}</>;
};

/* =====================================================
   ANIMATIONS
===================================================== */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },

  show: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =====================================================
   STAT CARD
===================================================== */

const StatCard = ({
  index,
  icon: Icon,
  label,
  value,
  description,
  gradient,
  iconBg,
  iconColor,
  loading,
}) => {
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      whileHover={{ y: -5 }}
      className="
        group relative overflow-hidden
        rounded-2xl border border-slate-200
        bg-white p-5
        shadow-sm transition-all duration-300
        hover:shadow-xl
      "
    >
      {/* Background Glow */}
      <div
        className={`
          pointer-events-none absolute
          -right-10 -top-10
          h-32 w-32 rounded-full
          bg-gradient-to-br ${gradient}
          opacity-10 blur-2xl
          transition-all duration-500
          group-hover:scale-150
          group-hover:opacity-20
        `}
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <div
            className={`
              flex h-12 w-12
              items-center justify-center
              rounded-xl ${iconBg}
            `}
          >
            <Icon size={22} className={iconColor} />
          </div>

          <ArrowUpRight
            size={18}
            className="
              text-slate-300
              transition-all duration-300
              group-hover:-translate-y-1
              group-hover:translate-x-1
              group-hover:text-slate-500
            "
          />
        </div>

        <div className="mt-5">
          <p
            className="
              text-xs font-semibold uppercase
              tracking-[0.18em] text-slate-500
            "
          >
            {label}
          </p>

          <p className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
            {loading ? (
              <span className="block h-10 w-20 animate-pulse rounded-lg bg-slate-100" />
            ) : (
              <CountUp value={value} />
            )}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

/* =====================================================
   TECH STACK BAR
===================================================== */

const TechBar = ({ name, count, maxCount, index }) => {
  const width =
    maxCount > 0 ? `${(count / maxCount) * 100}%` : "0%";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="min-w-0 truncate text-sm font-medium text-slate-600">
          {name}
        </span>

        <span className="text-xs font-semibold text-slate-400">
          {count}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
          }}
          className="
            h-full rounded-full
            bg-gradient-to-r
            from-violet-500
            via-purple-500
            to-fuchsia-500
          "
        />
      </div>
    </motion.div>
  );
};

/* =====================================================
   CATEGORY BAR
===================================================== */

const CategoryBar = ({ name, count, maxCount, index }) => {
  const width =
    maxCount > 0 ? `${(count / maxCount) * 100}%` : "0%";

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="truncate text-sm font-medium text-slate-600">
          {name}
        </span>

        <span className="text-xs font-semibold text-slate-400">
          {count}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width }}
          transition={{
            duration: 0.8,
            delay: index * 0.05,
          }}
          className="
            h-full rounded-full
            bg-gradient-to-r
            from-emerald-400
            to-teal-500
          "
        />
      </div>
    </motion.div>
  );
};

/* =====================================================
   PROJECT ACTIVITY
===================================================== */

const ProjectActivity = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="
        group flex items-center gap-3
        rounded-xl border border-slate-200
        bg-slate-50/70 p-3
        transition-all duration-300
        hover:border-violet-200
        hover:bg-violet-50/50
      "
    >
      <div
        className="
          flex h-10 w-10 shrink-0
          items-center justify-center
          rounded-lg bg-violet-100
          text-violet-600
        "
      >
        <FolderKanban size={17} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-slate-800">
          {project.title}
        </p>

        <div className="mt-1 flex items-center gap-2">
          <span className="max-w-[160px] truncate text-xs text-slate-500">
            {project.category || "Uncategorized"}
          </span>

          <span className="h-1 w-1 rounded-full bg-slate-300" />

          <span
            className={`text-xs ${
              project.is_visible
                ? "text-emerald-600"
                : "text-slate-400"
            }`}
          >
            {project.is_visible ? "Visible" : "Hidden"}
          </span>
        </div>
      </div>

      <ChevronRight
        size={17}
        className="
          text-slate-300
          transition-transform
          group-hover:translate-x-1
          group-hover:text-violet-500
        "
      />
    </motion.div>
  );
};

/* =====================================================
   SECTION HEADER
===================================================== */

const SectionHeader = ({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  description,
  rightIcon: RightIcon,
}) => {
  return (
    <div className="mb-6 flex items-start justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`
            flex h-10 w-10
            items-center justify-center
            rounded-xl ${iconBg}
          `}
        >
          <Icon size={19} className={iconColor} />
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">
            {title}
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        </div>
      </div>

      {RightIcon && (
        <RightIcon size={19} className="text-slate-300" />
      )}
    </div>
  );
};

/* =====================================================
   DASHBOARD
===================================================== */

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshedAt, setRefreshedAt] = useState(null);

  /* =====================================================
     LOAD PROJECTS
  ===================================================== */

  const loadStats = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.get("/api/projects/");

      const data = Array.isArray(response.data)
        ? response.data
        : [];

      setProjects(data);
      setRefreshedAt(new Date());
    } catch (err) {
      console.error("Dashboard API Error:", err);

      setError(
        err.response?.data?.detail ||
          "Unable to load dashboard data."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  /* =====================================================
     TECH STACK DATA
  ===================================================== */

  const techStats = useMemo(() => {
    const techMap = {};

    projects.forEach((project) => {
      let techs = [];

      if (Array.isArray(project.techstack)) {
        techs = project.techstack;
      } else if (typeof project.techstack === "string") {
        techs = project.techstack
          .split(",")
          .map((tech) => tech.trim());
      }

      techs.forEach((tech) => {
        if (!tech) return;

        techMap[tech] = (techMap[tech] || 0) + 1;
      });
    });

    return Object.entries(techMap)
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [projects]);

  /* =====================================================
     CATEGORY DATA
  ===================================================== */

  const categoryStats = useMemo(() => {
    const categoryMap = {};

    projects.forEach((project) => {
      const category = project.category?.trim();

      if (!category) return;

      categoryMap[category] =
        (categoryMap[category] || 0) + 1;
    });

    return Object.entries(categoryMap)
      .map(([name, count]) => ({
        name,
        count,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [projects]);

  /* =====================================================
     UNIQUE TECH COUNT
  ===================================================== */

  const uniqueTechCount = useMemo(() => {
    const techs = [];

    projects.forEach((project) => {
      if (Array.isArray(project.techstack)) {
        techs.push(...project.techstack);
      } else if (typeof project.techstack === "string") {
        techs.push(
          ...project.techstack
            .split(",")
            .map((tech) => tech.trim())
        );
      }
    });

    return new Set(techs.filter(Boolean)).size;
  }, [projects]);

  /* =====================================================
     CATEGORY COUNT
  ===================================================== */

  const categoryCount = useMemo(() => {
    return new Set(
      projects
        .map((project) => project.category?.trim())
        .filter(Boolean)
    ).size;
  }, [projects]);

  /* =====================================================
     VISIBILITY
  ===================================================== */

  const visibleProjects = useMemo(() => {
    return projects.filter(
      (project) => project.is_visible
    ).length;
  }, [projects]);

  const hiddenProjects = projects.length - visibleProjects;

  /* =====================================================
     MAX VALUES
  ===================================================== */

  const maxTechCount =
    techStats.length > 0
      ? techStats[0].count
      : 1;

  const maxCategoryCount =
    categoryStats.length > 0
      ? categoryStats[0].count
      : 1;

  const recentProjects = projects.slice(0, 5);

  /* =====================================================
     STATS
  ===================================================== */

  const stats = [
    {
      label: "Projects",
      value: projects.length,
      description: "Total projects in your portfolio",
      icon: FolderKanban,
      gradient: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
    },
    {
      label: "Tech Stack",
      value: uniqueTechCount,
      description: "Unique technologies being used",
      icon: Code2,
      gradient: "from-blue-500 to-indigo-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      label: "Categories",
      value: categoryCount,
      description: "Different project categories",
      icon: Tags,
      gradient: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <AdminLayout>
      <div className="min-h-full bg-slate-50/60 px-1 pb-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-8 flex flex-col gap-5
            lg:flex-row lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span
                className="
                  flex h-8 w-8
                  items-center justify-center
                  rounded-lg bg-slate-900
                  text-white
                "
              >
                <Terminal size={16} />
              </span>

              <span
                className="
                  text-xs font-semibold uppercase
                  tracking-[0.2em] text-slate-400
                "
              >
                Admin Console
              </span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                text-3xl font-bold
                tracking-tight text-slate-900
                sm:text-4xl
              "
            >
              Dashboard Overview
            </motion.h1>

            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Monitor your portfolio projects, technology usage,
              categories, and visibility from one place.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {refreshedAt && (
              <div
                className="
                  flex items-center gap-2
                  rounded-xl border border-slate-200
                  bg-white px-3 py-2
                  text-xs text-slate-500
                "
              >
                <Clock3 size={14} />

                Updated{" "}
                {refreshedAt.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            )}

            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={loadStats}
              disabled={loading}
              className="
                flex items-center gap-2
                rounded-xl bg-slate-900
                px-4 py-2.5
                text-sm font-semibold text-white
                shadow-sm transition-all
                hover:bg-slate-800
                disabled:cursor-not-allowed
                disabled:opacity-60
              "
            >
              <RefreshCw
                size={15}
                className={loading ? "animate-spin" : ""}
              />

              Refresh
            </motion.button>
          </div>
        </div>

        {/* =================================================
            ERROR
        ================================================= */}

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              mb-6 rounded-xl
              border border-red-200
              bg-red-50 px-4 py-3
              text-sm text-red-600
            "
          >
            {error}
          </motion.div>
        )}

        {/* =================================================
            STATS
        ================================================= */}

        <div
          className="
            grid grid-cols-1 gap-5
            sm:grid-cols-2
            xl:grid-cols-3
          "
        >
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              index={index}
              loading={loading}
              {...stat}
            />
          ))}
        </div>

        {/* =================================================
            VISIBILITY SUMMARY
        ================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="
            mt-6 grid grid-cols-1 gap-5
            sm:grid-cols-2
          "
        >
          <div
            className="
              flex items-center justify-between
              rounded-2xl border border-emerald-200
              bg-emerald-50 p-5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-emerald-100
                  text-emerald-600
                "
              >
                <Eye size={20} />
              </div>

              <div>
                <p className="text-sm font-medium text-emerald-700">
                  Visible Projects
                </p>

                <p className="mt-1 text-2xl font-bold text-emerald-900">
                  {loading ? "—" : visibleProjects}
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold text-emerald-600">
              LIVE
            </span>
          </div>

          <div
            className="
              flex items-center justify-between
              rounded-2xl border border-slate-200
              bg-white p-5
            "
          >
            <div className="flex items-center gap-3">
              <div
                className="
                  flex h-11 w-11
                  items-center justify-center
                  rounded-xl bg-slate-100
                  text-slate-500
                "
              >
                <EyeOff size={20} />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-600">
                  Hidden Projects
                </p>

                <p className="mt-1 text-2xl font-bold text-slate-900">
                  {loading ? "—" : hiddenProjects}
                </p>
              </div>
            </div>

            <span className="text-xs font-semibold text-slate-400">
              PRIVATE
            </span>
          </div>
        </motion.div>

        {/* =================================================
            TECH + CATEGORY
        ================================================= */}

        <div
          className="
            mt-6 grid grid-cols-1 gap-6
            xl:grid-cols-2
          "
        >
          {/* TECH STACK */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
              rounded-2xl border border-slate-200
              bg-white p-5 shadow-sm sm:p-6
            "
          >
            <SectionHeader
              icon={Code2}
              iconBg="bg-violet-100"
              iconColor="text-violet-600"
              title="Technology Usage"
              description="Most used technologies"
              rightIcon={Layers3}
            />

            <div className="space-y-5">
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="mb-2 h-4 w-24 rounded bg-slate-100" />
                    <div className="h-2 rounded-full bg-slate-100" />
                  </div>
                ))
              ) : techStats.length > 0 ? (
                techStats.map((tech, index) => (
                  <TechBar
                    key={tech.name}
                    {...tech}
                    maxCount={maxTechCount}
                    index={index}
                  />
                ))
              ) : (
                <div className="py-10 text-center text-sm text-slate-400">
                  No technology data found.
                </div>
              )}
            </div>
          </motion.section>

          {/* CATEGORIES */}

          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="
              rounded-2xl border border-slate-200
              bg-white p-5 shadow-sm sm:p-6
            "
          >
            <SectionHeader
              icon={Tags}
              iconBg="bg-emerald-100"
              iconColor="text-emerald-600"
              title="Project Categories"
              description="Project distribution"
              rightIcon={BarChart3}
            />

            <div className="space-y-5">
              {loading ? (
                Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="animate-pulse">
                    <div className="mb-2 h-4 w-28 rounded bg-slate-100" />
                    <div className="h-2 rounded-full bg-slate-100" />
                  </div>
                ))
              ) : categoryStats.length > 0 ? (
                categoryStats.map((category, index) => (
                  <CategoryBar
                    key={category.name}
                    {...category}
                    maxCount={maxCategoryCount}
                    index={index}
                  />
                ))
              ) : (
                <div className="py-10 text-center text-sm text-slate-400">
                  No category data found.
                </div>
              )}
            </div>
          </motion.section>
        </div>

        {/* =================================================
            RECENT PROJECTS
        ================================================= */}

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="
            mt-6 rounded-2xl
            border border-slate-200
            bg-white p-5 shadow-sm sm:p-6
          "
        >
          <SectionHeader
            icon={Activity}
            iconBg="bg-blue-100"
            iconColor="text-blue-600"
            title="Recent Projects"
            description="Latest portfolio activity"
            rightIcon={Clock3}
          />

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
            {loading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    h-16 animate-pulse
                    rounded-xl bg-slate-100
                  "
                />
              ))
            ) : recentProjects.length > 0 ? (
              recentProjects.map((project, index) => (
                <ProjectActivity
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))
            ) : (
              <div className="col-span-full py-10 text-center">
                <Sparkles
                  size={30}
                  className="mx-auto mb-3 text-slate-300"
                />

                <p className="text-sm text-slate-400">
                  No projects found.
                </p>
              </div>
            )}
          </div>
        </motion.section>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            mt-6 flex items-center gap-2
            text-xs text-slate-400
          "
        >
          <span
            className="
              h-2 w-2 animate-pulse
              rounded-full bg-emerald-500
            "
          />

          Dashboard is synced with your project data.
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;