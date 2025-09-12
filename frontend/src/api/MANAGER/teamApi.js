// frontend/src/api/teamApi.js
import axios from "axios";

// const API_URL = "http://localhost:5000/api/teams"; 
const API_URL = "https://clg-majorprojrct.onrender.com/api/teams"; 

// Get all teams
export const getTeams = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Create a new team
export const createTeam = async (teamData) => {
  const res = await axios.post(API_URL, teamData);
  return res.data;
};

// Add a team member
export const addTeamMember = async (teamId, userId, role = "Member") => {
  const res = await axios.post(`${API_URL}/${teamId}/members`, {
    userId,
    role,
  });
  return res.data;
};

// Remove a team member
export const removeTeamMember = async (teamId, userId) => {
  const res = await axios.delete(`${API_URL}/${teamId}/members/${userId}`);
  return res.data;
};

// Assign a task to a team
export const assignTask = async (taskData) => {
  const res = await axios.post(`${API_URL}/tasks`, taskData);
  return res.data;
};

// Get all tasks of a team
export const getTasksByTeam = async (teamId) => {
  const res = await axios.get(`${API_URL}/${teamId}/tasks`);
  return res.data;
};

// Get all users (for member selection)
export const getUsers = async () => {
  const res = await axios.get(`${API_URL}/users/all`);
  return res.data;
};
