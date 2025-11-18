import axios from "axios";

<<<<<<< HEAD
const API = "http://localhost:5000/api/goals";
// const API = "https://clg-majorprojrct.onrender.com/api/goals";
=======
// const API = "http://localhost:5000/api/goals";
const API = "https://clg-majorprojrct.onrender.com/api/goals";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

// ➤ Get all goals
export const getGoals = async () => {
  return await axios.get(API);
};

// ➤ Get goals of a user
export const getGoalsByUser = async (user_id) => {
  return await axios.get(`${API}/${user_id}`);
};

// ➤ Create goal
export const createGoal = async (goal) => {
  return await axios.post(API, goal);
};

// ➤ Update goal
export const updateGoal = async (id, goal) => {
  return await axios.put(`${API}/${id}`, goal);
};

// ➤ Delete goal
export const deleteGoal = async (id) => {
  return await axios.delete(`${API}/${id}`);
};
