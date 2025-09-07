import axios from "axios";

const API = "http://localhost:5000/api/shifts";

export const createShift = (shift) => axios.post(API, shift);
export const getShifts = () => axios.get(API);
