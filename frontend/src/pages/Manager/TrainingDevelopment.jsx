import React, { useState, useEffect } from "react";
import { getAllTrainings, createTraining } from "../../api/MANAGER/trainingApi";

const TrainingDevelopment = () => {
  const [trainings, setTrainings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    user_id: "",
    manager_id: "",
    start_date: "",
    end_date: "",
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("assign"); // "assign" or "assigned"

  // Fetch trainings when component mounts
  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = async () => {
    try {
      const data = await getAllTrainings();
      setTrainings(data);
    } catch (err) {
      console.error("Error fetching trainings:", err);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createTraining(form);
      setForm({
        title: "",
        description: "",
        user_id: "",
        manager_id: "",
        start_date: "",
        end_date: "",
      });
      fetchTrainings(); // refresh list
      setActiveTab("assigned"); // switch to assigned tab after adding
    } catch (err) {
      console.error("Error creating training:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Training & Development</h2>

      {/* Tabs */}
      <div className="flex mb-4 border-b">
        <button
          onClick={() => setActiveTab("assign")}
          className={`px-4 py-2 ${
            activeTab === "assign"
              ? "border-b-2 border-blue-600 font-semibold"
              : ""
          }`}
        >
          Assign Training
        </button>
        <button
          onClick={() => setActiveTab("assigned")}
          className={`px-4 py-2 ${
            activeTab === "assigned"
              ? "border-b-2 border-blue-600 font-semibold"
              : ""
          }`}
        >
          Assigned Trainings
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "assign" ? (
        // Assign Training Form
        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-gray-100 p-4 rounded-md shadow-md"
        >
          <input
            type="text"
            name="title"
            placeholder="Training Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <textarea
            name="description"
            placeholder="Training Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
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
            type="number"
            name="manager_id"
            placeholder="Manager ID"
            value={form.manager_id}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
          <div className="flex gap-4">
            <input
              type="date"
              name="start_date"
              value={form.start_date}
              onChange={handleChange}
              className="p-2 border rounded w-1/2"
              required
            />
            <input
              type="date"
              name="end_date"
              value={form.end_date}
              onChange={handleChange}
              className="p-2 border rounded w-1/2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Assigning..." : "Assign Training"}
          </button>
        </form>
      ) : (
        // Assigned Trainings List
        <div className="space-y-4">
          {trainings.length === 0 ? (
            <p>No trainings assigned yet.</p>
          ) : (
            trainings.map((t) => (
              <div
                key={t.id}
                className="p-4 border rounded shadow-sm bg-white"
              >
                <h4 className="font-bold">{t.title}</h4>
                <p>{t.description}</p>
                <p>
                  <strong>Employee ID:</strong> {t.user_id}
                </p>
                <p>
                  <strong>Manager ID:</strong> {t.manager_id}
                </p>
                <p>
                  <strong>Duration:</strong> {t.start_date} → {t.end_date}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default TrainingDevelopment;
