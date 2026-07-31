import { useEffect, useState, useCallback } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api";
// import API_BASE_URL from "../../api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  // ✅ Fetch Projects from API
 const fetchProjects = useCallback(async () => {
  try {
    const response = await api.get("/api/projects/");

    setProjects([...response.data]);

  } catch (error) {
    toast.error("Failed to load projects ❌");
  }
}, []);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    fetchProjects();
  }, [fetchProjects, token, navigate]);

  // ✅ Toggle Visibility
  const handleToggleVisibility = async (project_id, currentVisibility) => {
  try {
    await api.patch(
      `/api/projects/${project_id}/visibility`,
      null,
      {
        params: {
          is_visible: !currentVisibility,
        },
      }
    );

    toast.success("Visibility Updated 🚀");
    fetchProjects();
  } catch (error) {
    toast.error("Error updating visibility ❌");
  }
};

  // ✅ Delete Project
 const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure?");
  if (!confirmDelete) return;

  try {
    await api.delete(`/api/projects/${id}`);

    toast.success("Project Deleted 🚀");
    fetchProjects();
  } catch (error) {
    toast.error("Error deleting project ❌");
  }
};

  const handleEdit = (id) => {
    navigate(`/admin/projects/edit/${id}`);
  };

  // helper function
  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Manage Projects</h1>
        <Link
          to="/admin/projects/add"
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + Add Project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="bg-white p-6 rounded-xl shadow">
          <p>No projects yet.</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-500 text-white">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Title</th>
                <th className="p-3">Tech</th>
                <th className="p-3">Description</th>
                <th className="p-3">Active/InActive</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  className="border-t text-center h-24 align-middle"
                >
                 <td className="p-3">
  <div className="relative inline-block">
    <img
      src={project.image_urls?.[0]}
      alt="project"
      className="h-16 w-20 object-cover mx-auto rounded"
    />

    {project.image_urls?.length > 1 && (
      <span className="absolute -top-2 -right-2 bg-black text-white text-xs px-2 py-1 rounded-full">
        +{project.image_urls.length - 1}
      </span>
    )}
  </div>
</td>

                  <td className="p-3 font-medium">{project.title}</td>

                  <td className="p-3 max-w-xs">
                    <div className="flex flex-wrap justify-center gap-1">
                      {project.techstack?.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-200 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td className="p-3 w-64">
                    {truncateText(project.description, 150)}
                  </td>

                  <td className="p-3">
                    <button
                      onClick={() =>
                        handleToggleVisibility(project.id, project.is_visible)
                      }
                      className={`px-3 py-1 h-6 w-6 rounded-full text-white ${
                        project.is_visible ? "bg-green-500" : "bg-red-600"
                      }`}
                    ></button>
                  </td>

                  <td className="p-3 space-x-2">
                    <button
                      onClick={() => handleEdit(project.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(project.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
};

export default Projects;
