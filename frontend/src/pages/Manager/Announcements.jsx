
// export default Announcements;
import React, { useEffect, useState } from "react";
import { fetchAnnouncements, createAnnouncement, deleteAnnouncement } from "../../api/MANAGER/announcementsApi";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [form, setForm] = useState({ title: "", message: "", created_by: "" });
  const [activeTab, setActiveTab] = useState("add"); // "add" or "all"

  // Load all announcements
  const loadAnnouncements = async () => {
    try {
      const data = await fetchAnnouncements();
      // Sort latest first based on created_at
      data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
      setAnnouncements(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadAnnouncements();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createAnnouncement(form);
      setForm({ title: "", message: "", created_by: "" });
      loadAnnouncements();
      setActiveTab("all"); // Switch to view after adding
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAnnouncement(id);
      loadAnnouncements();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Announcements</h1>

      {/* Tabs */}
      <div className="flex mb-4">
        <button
          className={`px-4 py-2 rounded-t ${activeTab === "add" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("add")}
        >
          Add Announcement
        </button>
        <button
          className={`px-4 py-2 rounded-t ${activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("all")}
        >
          All Announcements
        </button>
      </div>

      {/* Add Announcement Form */}
      {activeTab === "add" && (
        <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded-md">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />
          <textarea
            name="message"
            placeholder="Description"
            value={form.message}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />
          <input
            type="number"
            name="created_by"
            placeholder="Manager ID"
            value={form.created_by}
            onChange={handleChange}
            className="border p-2 w-full mb-2"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
            Add Announcement
          </button>
        </form>
      )}

      {/* All Announcements Table */}
      {activeTab === "all" && (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Title</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">Manager ID</th>
              <th className="border p-2">Created At</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {announcements.map((a) => (
              <tr key={a.id}>
                <td className="border p-2">{a.title}</td>
                <td className="border p-2">{a.message}</td>
                <td className="border p-2">{a.created_by}</td>
                <td className="border p-2">{new Date(a.created_at).toLocaleString()}</td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(a.id)}
                    className="bg-red-500 text-white p-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {announcements.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No announcements found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Announcements;
