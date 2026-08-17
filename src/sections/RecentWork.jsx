import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PortfolioCard from "../components/PortfolioCard";
import api from "../api";
// import API_BASE_URL from "../api";



const RecentWork = () => {
  const [projects, setProjects] = useState([]);
  const [expandedId, setExpandedId] = useState(null);
const fetchProjects = async () => {
  try {
    const response = await api.get("/api/projects/public");

    const data = response.data;

    // console.log("API RESPONSE:", data);

    if (Array.isArray(data)) {
      setProjects(data);
    } else {
      setProjects([]);
    }

  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    fetchProjects();
  }, []);


  return (
    <section className="py-20 px-6 bg-white text-black ">

      {/* Section Heading */}
      <div className="max-w-7xl mx-auto text-center mb-14">

        <h2 className="text-4xl font-bold">
          Recent <span className="text-cyan-400">Work</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Here are some of my latest projects built using modern technologies
          like React, FastAPI, and MongoDB.
        </p>

      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

       {Array.isArray(projects) &&
  projects.slice(0, 3).map((project) => (
    <PortfolioCard
      key={project.id}
      project={project}
      expanded={expandedId === project.id}
      onToggle={() =>
        setExpandedId(expandedId === project.id ? null : project.id)
      }
    />
))}

      </div>

      {/* View All Button */}
      <div className="text-center mt-14">

        <Link
          to="case-study"
          className="inline-block px-8 py-3 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition"
        >
          View All Projects
        </Link>

      </div>

    </section>
  );
};

export default RecentWork;