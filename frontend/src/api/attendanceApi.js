// // src/api/attendanceApi.js
// import request from "./Api"; // ✅ now it works

// export const clockIn = () =>
//   request("/attendance/clock-in", { method: "POST" });

// export const clockOut = () =>
//   request("/attendance/clock-out", { method: "POST" });

// export const getEmployeeAttendance = (employeeId) =>
//   request(`/attendance/employee/${employeeId}`, { method: "GET" });

// export const getAllAttendance = () =>
//   request("/attendance", { method: "GET" });
import request from "./Api"; // your existing request helper

// Get token from localStorage
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.token; // make sure token is stored after login
};

export const clockIn = async () =>
  request("/attendance/clock-in", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const clockOut = async () =>
  request("/attendance/clock-out", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const getEmployeeAttendance = (employeeId) =>
  request(`/attendance/employee/${employeeId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

export const getAllAttendance = () =>
  request("/attendance", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
