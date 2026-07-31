import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import AdminLayout from "../../components/admin/AdminLayout";
import api from "../../api";
// import API_BASE_URL from "../../api";

const AdminUsers = () => {

  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  // const token = localStorage.getItem("token");

  // -------------------------
  // Fetch Users
  // -------------------------
  const fetchUsers = useCallback(async () => {
  try {
    const res = await api.get("/api/admin/users");

    setUsers(res.data);

  } catch (err) {
    toast.dismiss();
    toast.error("Failed to fetch users");
  }
}, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // -------------------------
  // Open Edit Modal
  // -------------------------
  const openRoleModal = (user) => {

    setSelectedUser(user);
    setRole(user.is_admin ? "admin" : "user");
    setShowModal(true);

  };

  // -------------------------
  // Update Role
  // -------------------------
  const updateRole = async () => {
  try {
    setLoading(true);

    await api.put(
      `/api/admin/users/${selectedUser.id}/toggle-role`
    );

    toast.dismiss();
    toast.success("User role updated");

    setShowModal(false);
    fetchUsers();

    window.scrollTo({ top: 0, behavior: "smooth" });

  } catch (err) {
    const message =
      err.response?.data?.detail || "Role update failed";

    toast.dismiss();
    toast.error(message);

  } finally {
    setLoading(false);
  }
};

  // -------------------------
  // Delete User
  // -------------------------
 const deleteUser = async (id) => {
  if (!window.confirm("Are you sure you want to delete this user?")) return;

  try {
    await api.delete(`/api/admin/users/${id}`);

    toast.dismiss();
    toast.success("User deleted");

    fetchUsers();

  } catch (err) {
    const message =
      err.response?.data?.detail || "Delete failed";

    toast.dismiss();
    toast.error(message);
  }
};

  return (

    <AdminLayout>

      {/* Single toaster instance */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="p-10 bg-gray-100 min-h-screen text-black">

        <h1 className="text-3xl font-bold mb-6">
          Admin User Management
        </h1>

        <table className="w-full border border-gray-700">

          <thead className="bg-gray-400">

            <tr>
              <th className="p-3">Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="text-center border-t border-gray-700"
              >

                <td className="p-3">{user.name}</td>

                <td>{user.email}</td>

                {/* Role */}

                <td>

                  <div className="flex justify-center items-center gap-4">

                    <label className="flex items-center gap-1">

                      <input
                        type="checkbox"
                        checked={user.is_admin}
                        readOnly
                        className="w-4 h-4"
                      />

                      Admin

                    </label>

                    <label className="flex items-center gap-1">

                      <input
                        type="checkbox"
                        checked={!user.is_admin}
                        readOnly
                        className="w-4 h-4"
                      />

                      User

                    </label>

                  </div>

                </td>

                {/* Actions */}

                <td>

                  <div className="flex justify-center gap-4 text-lg">

                    <FaEdit
                      onClick={() => openRoleModal(user)}
                      className="cursor-pointer text-gray-600"
                      title="Edit Role"
                    />

                    <FaTrash
                      onClick={() => deleteUser(user.id)}
                      className="cursor-pointer text-gray-700 hover:text-red-600"
                      title="Delete User"
                    />

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* Role Update Modal */}

        {showModal && (

          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">

            <div className="bg-gray-500 p-6 rounded-lg w-96">

              <h2 className="text-2xl font-bold mb-4">
                Update User Role
              </h2>

              <p className="mb-4 font-bold">
                {selectedUser?.email}
              </p>

              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full p-2 mb-4 text-black"
              >

                <option value="user">User</option>
                <option value="admin">Admin</option>

              </select>

              <div className="flex justify-end gap-2">

                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-500 px-3 py-1 rounded"
                >
                  Cancel
                </button>

                <button
                  onClick={updateRole}
                  disabled={loading}
                  className="bg-gray-300 px-3 py-1 rounded"
                >
                  {loading ? "Updating..." : "Update"}
                </button>

              </div>

            </div>

          </div>

        )}

      </div>

    </AdminLayout>

  );
};

export default AdminUsers;