import React, { useEffect, useState } from "react";
import { clockInAPI, clockOutAPI, getAttendanceAPI } from "../../api/attendanceApi";
import { useAuth } from "../../hooks/useAuth";

const Employee = () => {
  const { user } = useAuth();
  const [attendance, setAttendance] = useState([]);
  const [message, setMessage] = useState("");

  const fetchAttendance = async () => {
    const res = await getAttendanceAPI(user.id);
    setAttendance(res.data);
  };

  const handleClockIn = async () => {
    const res = await clockInAPI(user.id);
    setMessage(res.data.message);
    fetchAttendance();
  };

  const handleClockOut = async () => {
    const res = await clockOutAPI(user.id);
    setMessage(res.data.message);
    fetchAttendance();
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  return (
    <div>
      <h1>Employee Dashboard</h1>
      <button onClick={handleClockIn}>Clock In</button>
      <button onClick={handleClockOut}>Clock Out</button>
      <p>{message}</p>

      <h2>Attendance History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
            <th>Hours Worked</th>
            <th>Overtime</th>
          </tr>
        </thead>
        <tbody>
          {attendance.map((a) => (
            <tr key={a.id}>
              <td>{a.date}</td>
              <td>{a.status}</td>
              <td>{a.hours_worked}</td>
              <td>{a.overtime_hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
