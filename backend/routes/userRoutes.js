// backend/routes/userRoutes.js
import express from "express";
import { addUser, fetchCounts } from "../controllers/userController.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/counts", fetchCounts);

export default router;
