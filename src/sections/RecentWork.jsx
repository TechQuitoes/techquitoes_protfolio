import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import api from "../api";

const RecentWork = () => {
  const [projects, setProjects] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  const fetchProjects = async () => {
    try {
      const response = await api.get("/api/projects/public");

      const data = response.data;

      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    } catch (error) {
      console.error("Failed to fetch projects:", error);
      setProjects([]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 text-[#1d1e20]">
      
      {/* ================= SECTION HEADING ================= */}
      <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-14">
        
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Recent{" "}
          <span className="text-cyan-500">
            Work
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
          Here are some of my latest projects built using modern technologies
          like React, FastAPI, and MongoDB.
        </p>

      </div>


      {/* ================= PROJECTS GRID ================= */}
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-6
          sm:gap-7
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {Array.isArray(projects) &&
          projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="min-w-0"
            >
              <PortfolioCard
                project={project}
                expanded={expandedId === project.id}
                onToggle={() =>
                  setExpandedId(
                    expandedId === project.id
                      ? null
                      : project.id
                  )
                }
              />
            </div>
          ))}
      </div>


      {/* ================= VIEW ALL ================= */}
      <div className="mt-12 flex justify-center sm:mt-14">
        <Link
          to="/case-study"
          className="
            inline-flex
            items-center
            justify-center
            rounded-full
            border
            border-[#111111]
            px-8
            py-3
            text-sm
            font-semibold
            text-[#111111]
            transition-all
            duration-300
            hover:bg-[#111111]
            hover:text-white
            sm:px-9
            sm:py-3.5
            sm:text-base
          "
        >
          View All Projects
        </Link>
      </div>

    </section>
  );
};

export default RecentWork;