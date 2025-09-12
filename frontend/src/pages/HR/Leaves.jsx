// frontend/src/pages/Leaves.jsx
import { useEffect, useMemo, useState } from "react";
import {getLeaveTypes, createLeaveType, updateLeaveType, deleteLeaveType, getLeaveRequests, createLeaveRequest, setLeaveStatus, deleteLeaveRequestApi, } from "../../api/HR/leaveApi";
import { fetchEmployees } from "../../api/HR/employeeApi";

const StatusPill = ({ value }) => {
  const cls = useMemo(() => {
    if (value === "Approved") return "bg-green-100 text-green-700";
    if (value === "Rejected") return "bg-red-100 text-red-700";
    return "bg-yellow-100 text-yellow-700";
  }, [value]);
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${cls}`}>
      {value}
    </span>
  );
};

export default function Leaves() {
  // Tabs
  const [activeTab, setActiveTab] = useState("requests");

  // Leave Types
  const [types, setTypes] = useState([]);
  const [newType, setNewType] = useState("");
  const [editingType, setEditingType] = useState(null);

  // Leave Requests
  const [requests, setRequests] = useState([]);
  const [filterStatus, setFilterStatus] = useState("");
  const [employees, setEmployees] = useState([]);

  // Request Form (HR filing request for employee)
  const [form, setForm] = useState({
    user_id: "",
    leave_type_id: "",
    start_date: "",
    end_date: "",
  });

  const reloadTypes = async () => {
    const res = await getLeaveTypes();
    setTypes(res.data || []);
  };

  const reloadRequests = async () => {
    const res = await getLeaveRequests(
      filterStatus ? { status: filterStatus } : {}
    );
    setRequests(res.data || []);
  };

  const reloadEmployees = async () => {
    const res = await fetchEmployees();
    setEmployees(res.data || []);
  };

  useEffect(() => {
    reloadTypes();
    reloadEmployees();
  }, []);

  useEffect(() => {
    reloadRequests();
  }, [filterStatus]);

  /* ---------- Leave Types handlers ---------- */
  const handleAddType = async (e) => {
    e.preventDefault();
    if (!newType.trim()) return;
    await createLeaveType(newType.trim());
    setNewType("");
    reloadTypes();
  };

  const handleUpdateType = async (e) => {
    e.preventDefault();
    if (!editingType?.type?.trim()) return;
    await updateLeaveType(editingType.id, editingType.type.trim());
    setEditingType(null);
    reloadTypes();
  };

  const handleDeleteType = async (id) => {
    if (!window.confirm("Delete this leave type?")) return;
    await deleteLeaveType(id);
    reloadTypes();
  };

  /* ---------- Leave Requests handlers ---------- */
  const handleCreateRequest = async (e) => {
    e.preventDefault();
    const { user_id, leave_type_id, start_date, end_date } = form;
    if (!user_id || !leave_type_id || !start_date || !end_date) return;
    await createLeaveRequest(form);
    setForm({ user_id: "", leave_type_id: "", start_date: "", end_date: "" });
    reloadRequests();
    setActiveTab("requests"); // switch back to requests after creating
  };

  const handleStatus = async (id, status) => {
    await setLeaveStatus(id, status);
    reloadRequests();
  };

  const handleDeleteRequest = async (id) => {
    if (!window.confirm("Delete this leave request?")) return;
    await deleteLeaveRequestApi(id);
    reloadRequests();
  };

  return (
    <div className="p-6 space-y-6">
      {/* TABS */}
      <div className="flex gap-4 border-b">
        <button
          onClick={() => setActiveTab("requests")}
          className={`px-4 py-2 font-medium ${
            activeTab === "requests"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Leave Requests
        </button>
        <button
          onClick={() => setActiveTab("types")}
          className={`px-4 py-2 font-medium ${
            activeTab === "types"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          Leave Types
        </button>
        <button
          onClick={() => setActiveTab("new")}
          className={`px-4 py-2 font-medium ${
            activeTab === "new"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-600"
          }`}
        >
          New Request
        </button>
      </div>

      {/* TAB CONTENTS */}
      {activeTab === "requests" && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Leave Requests</h2>
            <div className="flex gap-2 items-center">
              <label className="text-sm">Filter</label>
              <select
                className="border rounded p-2"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value="Pending">Pending</option>
                <option value="Approved">Approved</option>
                <option value="Rejected">Rejected</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto border rounded">
            <table className="min-w-[800px] w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left p-2">#</th>
                  <th className="text-left p-2">Employee</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Start</th>
                  <th className="text-left p-2">End</th>
                  <th className="text-left p-2">Applied</th>
                  <th className="text-left p-2">Status</th>
                  <th className="text-left p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((r) => (
                  <tr key={r.id} className="border-t">
                    <td className="p-2">{r.id}</td>
                    <td className="p-2">
                      {r.users?.username || r.users?.email} (#{r.user_id})
                    </td>
                    <td className="p-2">{r.leave_types?.type}</td>
                    <td className="p-2">{r.start_date}</td>
                    <td className="p-2">{r.end_date}</td>
                    <td className="p-2">
                      {new Date(r.applied_at).toLocaleString()}
                    </td>
                    <td className="p-2">
                      <StatusPill value={r.status} />
                    </td>
                    <td className="p-2 flex gap-2">
                      <button
                        disabled={r.status !== "Pending"}
                        onClick={() => handleStatus(r.id, "Approved")}
                        className="px-2 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
                      >
                        Approve
                      </button>
                      <button
                        disabled={r.status !== "Pending"}
                        onClick={() => handleStatus(r.id, "Rejected")}
                        className="px-2 py-1 bg-amber-600 text-white rounded disabled:opacity-50"
                      >
                        Reject
                      </button>
                      <button
                        onClick={() => handleDeleteRequest(r.id)}
                        className="px-2 py-1 bg-red-600 text-white rounded"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {!requests.length && (
                  <tr>
                    <td className="p-3 text-gray-500" colSpan="8">
                      No leave requests yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {activeTab === "types" && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Leave Types</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <form
              onSubmit={editingType ? handleUpdateType : handleAddType}
              className="border rounded p-4 space-y-3"
            >
              <label className="block text-sm font-medium">
                {editingType ? "Update Type" : "New Type"}
              </label>
              <input
                className="border rounded w-full p-2"
                placeholder="e.g. Sick Leave"
                value={editingType ? editingType.type : newType}
                onChange={(e) =>
                  editingType
                    ? setEditingType((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    : setNewType(e.target.value)
                }
                required
              />
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-2 rounded"
                >
                  {editingType ? "Update" : "Add"}
                </button>
                {editingType && (
                  <button
                    type="button"
                    onClick={() => setEditingType(null)}
                    className="px-3 py-2 rounded border"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>

            <div className="border rounded p-4">
              <h4 className="font-medium mb-2">All Types</h4>
              <ul className="divide-y">
                {types.map((t) => (
                  <li
                    key={t.id}
                    className="py-2 flex items-center justify-between"
                  >
                    <span>{t.type}</span>
                    <div className="flex gap-2">
                      <button
                        className="px-2 py-1 border rounded"
                        onClick={() => setEditingType(t)}
                      >
                        Edit
                      </button>
                      <button
                        className="px-2 py-1 bg-red-600 text-white rounded"
                        onClick={() => handleDeleteType(t.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}
                {!types.length && (
                  <li className="py-2 text-sm text-gray-500">
                    No leave types yet.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </section>
      )}

      {activeTab === "new" && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Create Leave Request</h2>
          <form
            onSubmit={handleCreateRequest}
            className="grid md:grid-cols-5 gap-3 border rounded p-4 mb-6"
          >
            <select
              className="border rounded p-2"
              value={form.user_id}
              onChange={(e) =>
                setForm({ ...form, user_id: Number(e.target.value) })
              }
              required
            >
              <option value="">Select Employee</option>
              {employees.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.username || u.email} (#{u.id})
                </option>
              ))}
            </select>

            <select
              className="border rounded p-2"
              value={form.leave_type_id}
              onChange={(e) =>
                setForm({ ...form, leave_type_id: e.target.value })
              }
              required
            >
              <option value="">Leave Type</option>
              {types.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.type}
                </option>
              ))}
            </select>

            <input
              type="date"
              className="border rounded p-2"
              value={form.start_date}
              onChange={(e) => setForm({ ...form, start_date: e.target.value })}
              required
            />
            <input
              type="date"
              className="border rounded p-2"
              value={form.end_date}
              onChange={(e) => setForm({ ...form, end_date: e.target.value })}
              required
            />

            <button className="bg-green-600 text-white rounded px-3 py-2">
              Create Request
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
