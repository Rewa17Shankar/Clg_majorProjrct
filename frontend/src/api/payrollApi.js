// import axios from "axios";

// const API = "http://localhost:5000/api/payroll";

// export const getPayrolls = () => axios.get(API);
// export const generatePayroll = (data) => axios.post(API, data);
// export const getPayrollByUser = (userId) => axios.get(`${API}/user/${userId}`);
// export const addBonus = (data) => axios.post(`${API}/bonus`, data);
// export const addDeduction = (data) => axios.post(`${API}/deduction`, data);
// export const updatePayroll = (id, salary) => axios.put(`${API}/${id}`, { salary });


// frontend/src/api/payrollApi.js
import axios from "axios";

// const API = "http://localhost:5000/api/payroll";
const API = "https://clg-majorprojrct.onrender.com/api/payroll";
export const getPayrolls = () => axios.get(API);
export const generatePayroll = (data) => axios.post(`${API}/generate`, data); // <-- FIXED
export const getPayrollByUser = (userId) => axios.get(`${API}/user/${userId}`);
export const addBonus = (data) => axios.post(`${API}/bonus`, data);
export const addDeduction = (data) => axios.post(`${API}/deduction`, data);
export const updatePayroll = (id, salary) => axios.put(`${API}/${id}`, { salary });
