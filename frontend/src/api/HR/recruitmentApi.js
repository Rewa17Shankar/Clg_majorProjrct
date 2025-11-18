import axios from "axios";

<<<<<<< HEAD
const API = "http://localhost:5000/api/recruitment";
// const API = "https://clg-majorprojrct.onrender.com/api/recruitment";
=======
// const API = "http://localhost:5000/api/recruitment";
const API = "https://clg-majorprojrct.onrender.com/api/recruitment";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
export const getJobs = () => axios.get(`${API}/jobs`);
export const createJob = (data) => axios.post(`${API}/jobs`, data);

export const getApplicants = (jobId) => axios.get(`${API}/jobs/${jobId}/applicants`);
export const applyJob = (data) => axios.post(`${API}/applicants`, data);
export const updateApplicantStatus = (id, status) =>
  axios.put(`${API}/applicants/${id}/status`, { status });
