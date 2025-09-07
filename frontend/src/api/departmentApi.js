import axios from "axios";

// const API = "http://localhost:5000/api/departments";
const API = "https://clg-majorprojrct.onrender.com/api/departments";
export const getDepartments = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const addDepartment = async (department_name) => {
  const res = await axios.post(API, { department_name });
  return res.data;
};
