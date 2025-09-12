// /frontend/src/api/goalsTasksApi.js
import axios from "axios";

// const API_URL =  "http://localhost:5000/api/goals-tasks";
const API_URL =  "https://clg-majorprojrct.onrender.com/api/goals-tasks";

export const getGoalsTasks = async () => {
  const res = await axios.get(`${API_URL}`, { withCredentials: true });
  return res.data;
};

export const addGoal = async (goal) => {
  const res = await axios.post(`${API_URL}`, goal, { withCredentials: true });
  return res.data;
};
