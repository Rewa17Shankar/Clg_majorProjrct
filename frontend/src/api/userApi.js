// frontend/src/api/userApi.js
import axios from "axios";

const API = "http://localhost:5000/api/users";

export const addUser = (userData) => axios.post(`${API}/add`, userData);
export const getUserCounts = () => axios.get(`${API}/counts`);
