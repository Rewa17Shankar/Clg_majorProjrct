import React, { useEffect, useState } from "react";
import { fetchMeetings, createMeeting, deleteMeeting } from "../../api/MANAGER/meetingsApi";

const Meetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    meeting_date: "",
    start_time: "",
    end_time: "",
    manager_id: "",
  });
  const [activeTab, setActiveTab] = useState("new"); // 'new' or 'all'

  const loadMeetings = async () => {
    try {
      const data = await fetchMeetings();
      setMeetings(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadMeetings();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMeeting(form);
      setForm({ title: "", description: "", meeting_date: "", start_time: "", end_time: "", manager_id: "" });
      loadMeetings();
      setActiveTab("all"); // Switch to all meetings after adding
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id, meeting_date) => {
    const now = new Date();
    if (new Date(meeting_date) <= now) {
      try {
        await deleteMeeting(id);
        loadMeetings();
      } catch (err) {
        console.error(err.message);
      }
    } else {
      alert("You can only delete completed/past meetings.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Meetings</h1>

      {/* Tabs */}
      <div className="flex mb-4 border-b">
        <button
          className={`p-2 px-4 ${activeTab === "new" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("new")}
        >
          Start New Meeting
        </button>
        <button
          className={`p-2 px-4 ${activeTab === "all" ? "border-b-2 border-blue-500 font-semibold" : "text-gray-500"}`}
          onClick={() => setActiveTab("all")}
        >
          All Meetings
        </button>
      </div>

      {/* Conditional rendering based on active tab */}
      {activeTab === "new" && (
        <section className="bg-gray-50 p-4 rounded-md shadow">
          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="title"
              placeholder="Meeting Title"
              value={form.title}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              type="date"
              name="meeting_date"
              value={form.meeting_date}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              type="time"
              name="start_time"
              value={form.start_time}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              type="time"
              name="end_time"
              value={form.end_time}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              type="number"
              name="manager_id"
              placeholder="Manager ID"
              value={form.manager_id}
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600">
              Add Meeting
            </button>
          </form>
        </section>
      )}

      {activeTab === "all" && (
        <section className="bg-gray-50 p-4 rounded-md shadow">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Title</th>
                <th className="border p-2">Description</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Start</th>
                <th className="border p-2">End</th>
                <th className="border p-2">Manager ID</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {meetings.map((m) => (
                <tr key={m.id}>
                  <td className="border p-2">{m.title}</td>
                  <td className="border p-2">{m.description}</td>
                  <td className="border p-2">{new Date(m.meeting_date).toLocaleDateString()}</td>
                  <td className="border p-2">{m.start_time}</td>
                  <td className="border p-2">{m.end_time}</td>
                  <td className="border p-2">{m.manager_id}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleDelete(m.id, m.meeting_date)}
                      className="bg-red-500 text-white p-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {meetings.length === 0 && (
                <tr>
                  <td colSpan="7" className="text-center p-4">
                    No meetings scheduled.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
};

export default Meetings;
