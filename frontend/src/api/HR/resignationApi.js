import axios from "axios";

<<<<<<< HEAD
const API = "http://localhost:5000/api/resignations";
// const API = "https://clg-majorprojrct.onrender.com/api/resignations";
=======
// const API = "http://localhost:5000/api/resignations";
const API = "https://clg-majorprojrct.onrender.com/api/resignations";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
export const getResignations = () => axios.get(API);
export const createResignation = (data) => axios.post(API, data);
export const updateResignationStatus = (id, status) => axios.put(`${API}/${id}/status`, { status });
export const getResignationsByUser = (userId) => axios.get(`${API}/user/${userId}`);
