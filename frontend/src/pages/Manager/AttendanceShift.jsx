// Fixed AttendanceShift.jsx
import React, { useEffect, useState } from "react";
import { getAttendanceShift } from "../../api/MANAGER/attendanceShiftApi";

const AttendanceShift = () => {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAttendanceShift();
        setRecords(data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p className="p-4">Loading attendance...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Attendance & Shifts</h1>

      {records.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {records.map((rec) => (
            <div
              key={rec.id}
              className="bg-white shadow-md rounded-2xl hover:shadow-lg transition p-4"
            >
              <p className="text-lg font-semibold">User ID: {rec.user_id}</p>
              <p className="text-sm text-gray-600">Date: {rec.date}</p>
              <p className="text-sm text-gray-600">Status: {rec.status}</p>
              <p className="text-sm text-gray-500">
                Shift: {rec.shifts?.name || "N/A"}
              </p>
              <p className="text-sm text-gray-500">
                {rec.shifts
                  ? `${rec.shifts.start_time} - ${rec.shifts.end_time}`
                  : ""}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AttendanceShift;

