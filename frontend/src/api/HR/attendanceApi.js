import axios from "axios";

<<<<<<< HEAD
const BASE_URL = "http://localhost:5000/api/attendance";
// const BASE_URL = "https://clg-majorprojrct.onrender.com/api/attendance"
=======
// const BASE_URL = "http://localhost:5000/api/attendance";
const BASE_URL = "https://clg-majorprojrct.onrender.com/api/attendance"
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

export const clockInAPI = (user_id) => axios.post(`${BASE_URL}/clock-in`, { user_id });
export const clockOutAPI = (user_id) => axios.post(`${BASE_URL}/clock-out`, { user_id });
export const getAttendanceAPI = (user_id) => axios.get(`${BASE_URL}/employee/${user_id}`);
export const getPayrollSummaryAPI = () => axios.get(`${BASE_URL}/hr/payroll-summary`);
