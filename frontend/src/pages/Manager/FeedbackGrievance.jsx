import React, { useState, useEffect } from "react";
import { getAllGrievances, createGrievance } from "../../api/MANAGER/feedbackGrievanceApi";

const FeedbackGrievance = () => {
  const [activeTab, setActiveTab] = useState("submit"); // "submit" or "all"
  const [grievances, setGrievances] = useState([]);
  const [form, setForm] = useState({
    user_id: "",
    title: "",
    description: "",
    manager_id: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (activeTab === "all") fetchGrievances();
  }, [activeTab]);

  const fetchGrievances = async () => {
    try {
      const data = await getAllGrievances();
      setGrievances(data);
    } catch (err) {
      console.error("Error fetching grievances:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createGrievance(form);
      setForm({ user_id: "", title: "", description: "", manager_id: "" });
      setActiveTab("all"); // Switch to "All Feedbacks" after submission
    } catch (err) {
      console.error("Error creating grievance:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "submit" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("submit")}
        >
          Submit Feedback
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeTab === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Feedbacks
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "submit" ? (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-100 p-4 rounded-md shadow-md"
        >
          <input
            type="number"
            name="user_id"
            placeholder="Employee User ID"
            value={form.user_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <input
            type="number"
            name="manager_id"
            placeholder="Manager ID"
            value={form.manager_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      ) : (
        <div className="space-y-4">
          {grievances.length === 0 ? (
            <p>No feedbacks submitted yet.</p>
          ) : (
            grievances.map((g) => (
              <div key={g.id} className="p-4 border rounded shadow-sm bg-white">
                <h4 className="font-bold">{g.title}</h4>
                <p>{g.description}</p>
                <p>
                  <strong>Employee ID:</strong> {g.user_id}
                </p>
                <p>
                  <strong>Manager ID:</strong> {g.manager_id}
                </p>
                <p>
                  <strong>Created At:</strong>{" "}
                  {new Date(g.created_at).toLocaleString()}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default FeedbackGrievance;
