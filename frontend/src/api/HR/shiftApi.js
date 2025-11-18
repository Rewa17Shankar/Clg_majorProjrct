import axios from "axios";

<<<<<<< HEAD
const API = "http://localhost:5000/api/shifts";
// const API = "https://clg-majorprojrct.onrender.com/api/shifts";
=======
// const API = "http://localhost:5000/api/shifts";
const API = "https://clg-majorprojrct.onrender.com/api/shifts";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
export const createShift = (shift) => axios.post(API, shift);
export const getShifts = () => axios.get(API);
