import express from "express";
import { addUser, getUserCounts, getAllUsers, resetPassword, loginUser, updatePassword, getUserProfile, fetchUsers, changeUserDepartment} from "../controllers/userController.js";
// import { getAllUsers, updateUserDepartment } from "../models/userModel.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/counts", getUserCounts);
router.get("/", getAllUsers);
router.post("/:userId/reset", resetPassword);
router.post("/login", loginUser);
router.post("/update-password", updatePassword);
router.get("/:userId/profile", getUserProfile);
router.get("/", fetchUsers); // GET all users with department
router.put("/update-department", changeUserDepartment); // Update user department

export default router;
