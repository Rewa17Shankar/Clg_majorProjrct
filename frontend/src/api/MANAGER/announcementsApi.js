import axios from "axios";

<<<<<<< HEAD
const API_URL = "http://localhost:5000/api/announcements";
// const API_URL ="https://clg-majorprojrct.onrender.com/api/announcements";
=======
// const API_URL = "http://localhost:5000/api/announcements";
const API_URL ="https://clg-majorprojrct.onrender.com/api/announcements";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// Fetch all announcements
export const fetchAnnouncements = async () => {
  const { data } = await axios.get(API_URL);
  return data;
};

// Create announcement
export const createAnnouncement = async (announcement) => {
  const { data } = await axios.post(API_URL, announcement);
  return data;
};

// Delete announcement
export const deleteAnnouncement = async (id) => {
  const { data } = await axios.delete(`${API_URL}/${id}`);
  return data;
};
