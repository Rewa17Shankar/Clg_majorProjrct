import axios from "axios";

<<<<<<< HEAD
const API_URL = "http://localhost:5000/api/trainings";
// const API_URL = "https://clg-majorprojrct.onrender.com/api/trainings";
=======
// const API_URL = "http://localhost:5000/api/trainings";
const API_URL = "https://clg-majorprojrct.onrender.com/api/trainings";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

// Get all trainings
export const getAllTrainings = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

// Create new training
export const createTraining = async (trainingData) => {
  const res = await axios.post(API_URL, trainingData);
  return res.data;
};
<<<<<<< HEAD

//update
export const updateTrainingProgressApi = async (id, payload) => {
  const token = localStorage.getItem("token");
  const { data } = await axios.patch(`http://localhost:5000/api/trainings/${id}/progress`, payload, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return data;
};
=======
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
