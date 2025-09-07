import { useEffect, useState } from "react";
import { markAttendance, getAttendance } from "../api/attendanceApi";
import { getShifts } from "../api/shiftApi";

function Attendance() {
  const [shifts, setShifts] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [form, setForm] = useState({
    employee_id: "",
    shift_id: "",
    date: "",
    status: "Present"
  });

  useEffect(() => {
    getShifts().then(res => setShifts(res.data));
    getAttendance().then(res => setAttendance(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await markAttendance(form);
    setForm({ employee_id: "", shift_id: "", date: "", status: "Present" });
    getAttendance().then(res => setAttendance(res.data));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Attendance Management</h1>

      <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
        <input type="number" placeholder="Employee ID"
          value={form.employee_id}
          onChange={e => setForm({ ...form, employee_id: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <select
          value={form.shift_id}
          onChange={e => setForm({ ...form, shift_id: e.target.value })}
          className="border p-2 rounded"
          required
        >
          <option value="">Select Shift</option>
          {shifts.map(shift => (
            <option key={shift.id} value={shift.id}>
              {shift.shift_name} ({shift.start_time} - {shift.end_time})
            </option>
          ))}
        </select>

        <input type="date"
          value={form.date}
          onChange={e => setForm({ ...form, date: e.target.value })}
          className="border p-2 rounded"
          required
        />

        <select
          value={form.status}
          onChange={e => setForm({ ...form, status: e.target.value })}
          className="border p-2 rounded"
        >
          <option>Present</option>
          <option>Absent</option>
          <option>Leave</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white py-2 rounded">
          Mark Attendance
        </button>
      </form>

      <h2 className="text-lg font-bold mt-6">Attendance Records</h2>
      <table className="w-full mt-2 border">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th><th>Employee</th><th>Date</th><th>Status</th><th>Shift</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((att, i) => (
            <tr key={i} className="border-b">
              <td>{att.id}</td>
              <td>{att.users?.name}</td>
              <td>{att.date}</td>
              <td>{att.status}</td>
              <td>{att.shifts?.shift_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default Attendance;
