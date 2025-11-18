import axios from "axios";

<<<<<<< HEAD
const API = "http://localhost:5000/api/hr/employees";
// const API = "https://clg-majorprojrct.onrender.com/api/employees";
=======
// const API = "http://localhost:5000/api/employees";
const API = "https://clg-majorprojrct.onrender.com/api/employees";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
export const fetchEmployees = () => axios.get(API);
export const fetchEmployee = (id) => axios.get(`${API}/${id}`);
export const addEmployee = (data) => axios.post(API, data);
export const updateEmployee = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API}/${id}`);
