import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import toast from "react-hot-toast";
import api from "../../api";
// import API_BASE_URL from "../../api";


const categoryOptions = [
  "Web Development",
  "Microsoft 365",
  "E-commerce ",
  "AI & Automation",
  "Marketing Design",
  "UI/UX Design",
  "Mobile Apps",
  "Other"
];
const EditProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [project, setProject] = useState({
    title: "",
    description: "",
    tech_stack: "",
    live_link: "",
    is_visible: false,
    category: "",   // ✅ NEW
  });

 const [existingImages, setExistingImages] = useState([]);
const [newImages, setNewImages] = useState([]);

  // const token = localStorage.getItem("token");

  // -----------------------
  // Fetch Project
  // -----------------------
 useEffect(() => {
  const fetchProject = async () => {
    try {
      const response = await api.get(`/api/projects/${id}`);
      console.log(response.data);

      const data = response.data;

      setProject({
        title: data.title || "",
        description: data.description || "",
        tech_stack: data.techstack ? data.techstack.join(", ") : "",
        live_link: data.live_link || "",
        is_visible: data.is_visible || false,
        category: data.category || "",
      });
      setExistingImages(data.image_urls || []);

    } catch (error) {
      toast.error("Error loading project ❌");
      navigate("/admin/projects");
    }
  };

  fetchProject();
}, [id, navigate]);
// -----------------------
// Handle Image Change
// -----------------------
const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    setNewImages((prev) => [...prev, ...files]);

    e.target.value = "";
};
const removeNewImage = (index) => {
    setNewImages((prev) =>
        prev.filter((_, i) => i !== index)
    );
};
const removeExistingImage = (index) => {
    setExistingImages((prev) =>
        prev.filter((_, i) => i !== index)
    );
};
  // -----------------------
  // Update Project
  // -----------------------
  const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    const formData = new FormData();

    formData.append("title", project.title);
    formData.append("description", project.description);
    project.tech_stack
  .split(",")
  .map((item) => item.trim())
  .filter((item) => item.length > 0)
  .forEach((item) => {
    formData.append("techstack", item);
  });
    formData.append("live_link", project.live_link || "");
    formData.append("is_visible", project.is_visible);
    formData.append("category", project.category);
    formData.append(
  "existing_images",
  JSON.stringify(existingImages)
);

    newImages.forEach((img)=>{
      formData.append("images",img);
  });

    await api.put(`/api/projects/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    toast.success("Project Updated 🚀");
    navigate("/admin/projects");

  } catch (error) {
    toast.error(
      error.response?.data?.detail || "Error updating project ❌"
    );
  }
};

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Edit Project</h1>

      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-xl shadow space-y-6"
      >

        {/* TITLE */}
        <div>
          <label className="block mb-2 font-semibold">
            Project Title
          </label>

          <input
            type="text"
            maxLength={30}
            value={project.title}
            onChange={(e) =>
              setProject({ ...project, title: e.target.value })
            }
            className="w-full border p-3 rounded-lg"
            required
          />
        <p className="text-sm text-gray-500">
            {project.title.length}/30 characters
          </p>
        </div>

        {/* TECH STACK */}
        <div>
          <label className="block mb-2 font-semibold">
            Tech Stack (comma separated)
          </label>

          <input
            type="text"
            value={project.tech_stack}
            onChange={(e) =>
              setProject({ ...project, tech_stack: e.target.value })
            }
            className="w-full border p-3 rounded-lg"
            required
          />
        </div>

        {/* CATEGORY */}
<div>
  <label className="block mb-2 font-semibold">
    Category
  </label>

  <select
    value={project.category}
    onChange={(e) =>
      setProject({ ...project, category: e.target.value })
    }
    className="w-full border p-3 rounded-lg"
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

        {/* DESCRIPTION */}
        <div>
          <label className="block mb-2 font-semibold">
            Description
          </label>

          <textarea
            maxLength={600}
            value={project.description}
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
            rows={4}
            className="w-full border p-3 rounded-lg"
            required
          />
           <p className="text-sm text-gray-500">
            {project.description.length}/600 characters
          </p>
        </div>

        {/* LIVE LINK */}
        <div>
          <label className="block mb-2 font-semibold">
            Live Link
          </label>

          <input
            type="text"
            value={project.live_link}
            onChange={(e) =>
              setProject({ ...project, live_link: e.target.value })
            }
            className="w-full border p-3 rounded-lg"
          />
        </div>

        {/* IMAGE */}
        <div>
          <label className="block mb-2 font-semibold">
            Upload New Image
          </label>

        <input
    type="file"
    id="project-images"
    multiple
    accept="image/*"
    className="hidden"
    onChange={handleImageChange}
/>

<label
    htmlFor="project-images"
    className="inline-block bg-black text-white px-4 py-2 rounded-lg cursor-pointer"
>
    + Add More Images
</label>
{existingImages.length > 0 && (

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

{existingImages.map((img,index)=>(

<div
key={index}
className="relative"
>

<img
  src={img}
  alt={`Project ${index}`}
  className="w-full h-28 object-cover rounded-lg border"
/>

<button
type="button"
onClick={()=>removeExistingImage(index)}
className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full"
>

×

</button>

</div>

))}

</div>

)}
{newImages.length > 0 && (

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">

{newImages.map((img,index)=>(

<div
key={index}
className="relative"
>

<img
src={URL.createObjectURL(img)}
alt=""
className="w-full h-28 object-cover rounded-lg border"
/>

<button
type="button"
onClick={()=>removeNewImage(index)}
className="absolute top-1 right-1 bg-red-500 text-white w-6 h-6 rounded-full"
>

×

</button>

</div>

))}

</div>

)}
        </div>

        {/* VISIBILITY */}
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={project.is_visible}
            onChange={(e) =>
              setProject({
                ...project,
                is_visible: e.target.checked,
              })
            }
          />

          <label className="font-semibold">
            Show Project To Users
          </label>
        </div>

        {/* BUTTON */}
        <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800">
          Update Project
        </button>

      </form>
    </AdminLayout>
  );
};

export default EditProject;