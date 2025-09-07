import { useEffect, useState } from "react";
import { createShift, getShifts } from "../api/shiftApi";

function Shifts() {
  const [shifts, setShifts] = useState([]);
  const [form, setForm] = useState({ shift_name: "", start_time: "", end_time: "" });

  useEffect(() => {
    getShifts().then(res => setShifts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createShift(form);
    setForm({ shift_name: "", start_time: "", end_time: "" });
    getShifts().then(res => setShifts(res.data));
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Shift Management</h1>

      <form onSubmit={handleSubmit} className="grid gap-3 max-w-md">
        <input type="text" placeholder="Shift Name"
          value={form.shift_name}
          onChange={e => setForm({ ...form, shift_name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input type="time"
          value={form.start_time}
          onChange={e => setForm({ ...form, start_time: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input type="time"
          value={form.end_time}
          onChange={e => setForm({ ...form, end_time: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-green-600 text-white py-2 rounded">
          Add Shift
        </button>
      </form>

      <h2 className="text-lg font-bold mt-6">Shifts List</h2>
      <ul className="mt-2 space-y-2">
        {shifts.map(shift => (
          <li key={shift.id} className="border p-2 rounded">
            {shift.shift_name} ({shift.start_time} - {shift.end_time})
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Shifts;
