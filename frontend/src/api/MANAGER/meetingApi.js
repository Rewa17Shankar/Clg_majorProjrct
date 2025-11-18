
import axios from "axios";

<<<<<<< HEAD
const API_URL = "http://localhost:5000/api/meetings";
// const API_URL = "https://clg-majorprojrct.onrender.com/api/meetings";
=======
// const API_URL = "http://localhost:5000/api/meetings";
const API_URL = "https://clg-majorprojrct.onrender.com/api/meetings";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

export const getMeetings = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const createMeeting = async (meeting) => {
  const res = await axios.post(API_URL, meeting);
  return res.data;
};

export const deleteMeeting = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`);
  return res.data;
};
