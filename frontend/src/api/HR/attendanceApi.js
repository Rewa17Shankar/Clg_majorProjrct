import axios from "axios";

// const API = "http://localhost:5000/api/attendance";
const API = "https://clg-majorprojrct.onrender.com/api/attendance";
export const markAttendance = (attendance) => axios.post(API, attendance);
export const getAttendance = () => axios.get(API);
