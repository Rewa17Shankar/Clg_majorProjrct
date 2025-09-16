// frontend/src/api/leaveApi.js
import axios from "axios";

// const BASE = "http://localhost:5000/api/leaves";
const BASE = "https://clg-majorprojrct.onrender.com/api/leaves";
/** Leave Types */
export const getLeaveTypes = () => axios.get(`${BASE}/types`);
export const createLeaveType = (type) => axios.post(`${BASE}/types`, { type });
export const updateLeaveType = (id, type) => axios.put(`${BASE}/types/${id}`, { type });
export const deleteLeaveType = (id) => axios.delete(`${BASE}/types/${id}`);

/** Leave Requests */
export const getLeaveRequests = (params = {}) => axios.get(BASE, { params }); // { status?, user_id? }
export const createLeaveRequest = (payload) => axios.post(BASE, payload);      // { user_id, leave_type_id, start_date, end_date }
export const getLeaveRequest = (id) => axios.get(`${BASE}/${id}`);
export const setLeaveStatus = (id, status) => axios.patch(`${BASE}/${id}/status`, { status });
export const deleteLeaveRequestApi = (id) => axios.delete(`${BASE}/${id}`);
