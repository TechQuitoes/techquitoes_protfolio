import { useEffect, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ChecKUser from "../../CheckUser";
import SearchableMultiSelect from "../../components/ui/SearchableMultiSelect";
import api from "../../api";
// import API_BASE_URL from "../../api";


const techOptions = [
  "React",
  "Node",
  "MongoDB",
  "Express",
  "FastAPI",
  "Python",
  "Django",
  "Flask",
  "PostgreSQL",
  "Tailwind",
  "JavaScript",
  "HTML",
  "CSS"
  
];
const categoryOptions = [
  "Web Development",
  "Marketing Design",
  "E-commerce ",
  "AI & Automation",
  "Microsoft 365",
  "UI/UX Design",
  "Mobile Apps",
  "Other"
  





];
const AddProject = () => {

  const [title, setTitle] = useState("");
  const [tech, setTech] = useState([]);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [showProject, setShowProject] = useState(true);
  const [images, setImages] = useState([]);
  const [projectLink, setProjectLink] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleImageChange = (e) => {
  const selectedFiles = Array.from(e.target.files);

  setImages((prev) => [...prev, ...selectedFiles]);

  // reset input so same image can be selected again if needed
  e.target.value = "";
};
const removeImage = (index) => {
  setImages(images.filter((_, i) => i !== index));
};

  useEffect(() => {
    const checkuser = ChecKUser();
    if (!checkuser) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (title.length < 5 || title.length > 100) {
      toast.error("Title must be between 5 and 30 characters");
      return;
    }

    if (tech.length === 0) {
      toast.error("Please select at least one tech stack");
      return;
    }

    try {

      setLoading(true);

      // const token = localStorage.getItem("token");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("is_visible", showProject);
      formData.append("live_link", projectLink);

      tech.forEach((item) => {
        formData.append("techstack", item);
      });

      images.forEach((img) => {
  formData.append("images", img);
});

      // ✅ Using axios instance (interceptor works now)
    const response = await api.post("/api/projects/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    // toast.success("Project Added Successfully 🚀");
    toast.success(response.data.message || "Project Added Successfully 🚀");
    navigate("/admin/projects", { replace: true });


    } catch (error) {
      toast.error(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-6">
        Add Project
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-5"
      >

        {/* Title */}
        <div>
          <input
            type="text"
            placeholder="Project Title"
            maxLength={100}
            className="w-full border p-3 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <p className="text-sm text-gray-500">
            {title.length}/100 characters
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <label className="font-semibold mb-2 block">
            Tech Stack
          </label>

          <SearchableMultiSelect
            options={techOptions}
            value={tech}
            onChange={setTech}
            placeholder="Search or add tech..."
          />
        </div>

        {/* Category Dropdown */}
<div>
  <label className="font-semibold mb-2 block">
    Category
  </label>

  <select
    className="w-full border p-3 rounded-lg"
    value={category}
    onChange={(e) => setCategory(e.target.value)}
    required
  >
    <option value="">Select Category</option>

    {categoryOptions.map((cat, index) => (
      <option key={index} value={cat}>
        {cat}
      </option>
    ))}
  </select>
</div>

        {/* Description */}
        <div>
          <textarea
            placeholder="Project Description"
            className="w-full border p-3 rounded-lg"
            maxLength={600}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <p className="text-sm text-gray-500">
            {description.length}/600 characters
          </p>
        </div>
        {/* Project Link */}
<div>
  <input
    type="url"
    placeholder="Project Live Link (https://...)"
    className="w-full border p-3 rounded-lg"
    value={projectLink}
    onChange={(e) => setProjectLink(e.target.value)}
  />
</div>

        {/* Image */}
    <div>
  <label className="font-semibold mb-2 block">
    Project Images
  </label>

  <input
    type="file"
    accept="image/*"
    multiple
    onChange={handleImageChange}
    className="hidden"
    id="project-images"
  />

  <label
    htmlFor="project-images"
    className="inline-block px-4 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800"
  >
    + Add More Images
  </label>

  {images.length > 0 && (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {images.map((image, index) => (
        <div key={index} className="relative">
          <img
            src={URL.createObjectURL(image)}
            alt={`preview-${index}`}
            className="w-full h-28 object-cover rounded-lg border"
          />

          <button
            type="button"
            onClick={() => removeImage(index)}
            className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  )}
</div>

        {/* Visibility */}
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={showProject}
            onChange={() => setShowProject(!showProject)}
          />
          Active 
        </label>

        {/* Submit Button with Loader */}
        <button
          disabled={loading}
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Adding...
            </>
          ) : (
            "Add Project"
          )}
        </button>

      </form>

    </AdminLayout>
  );
};

export default AddProject;