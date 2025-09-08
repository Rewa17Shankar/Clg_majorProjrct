// frontend/src/api/userApi.js
import axios from "axios";

// const API = "http://localhost:5000/api/users";
const API = "https://clg-majorprojrct.onrender.com/api/users";
export const updateUserDepartment = async (userId, departmentId) => {
  const res = await axios.put(`${API}/update-department`, {
    userId,
    departmentId,
  });
  return res.data;
};

export const updateUserDesignation = async (id, designationId) => {
  const res = await axios.put(`${API}/${id}/designation`, { designationId });
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`${API}/${id}`);
  return res.data;
};

// export const updateUserDepartment = async (id, departmentId) => {
//   const res = await axios.put(`${API}/${id}/department`, { departmentId });
//   return res.data;
// };

// Fetch profile details
export const getUserProfile = async (userId) => {
  try {
    const res = await axios.get(`${API}/${userId}/profile`);
    return res.data; // { id, username, email, role }
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
};


export const loginUser = async (username, password) => {
  const res = await axios.post(`${API}/login`, { username, password });
  return res.data;
};

export const updatePassword = async (userId, newPassword) => {
  const res = await axios.post(`${API}/update-password`, { userId, newPassword });
  return res.data;
};


export const getAllUsers = async () => {
  const res = await axios.get(API);
  return res.data;
};

// ✅ Reset password API
export const resetUserPassword = async (userId) => {
  try {
    const res = await axios.post(`${API}/${userId}/reset`);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
};




export const addUser = async (userData) => {
  try {
    const res = await axios.post(`${API}/add`, userData);
    return res.data;
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
};
// export const getUserCounts = () => axios.get(`${API}/counts`);
export const getUserCounts = async () => {
  try {
    const res = await axios.get(`${API}/counts`);
    return res.data; // { HR: x, Manager: y, Employee: z }
  } catch (err) {
    throw err.response?.data || { error: "Something went wrong" };
  }
};



