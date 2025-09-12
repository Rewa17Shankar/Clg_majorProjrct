import express from "express";
import { getTrainings, createTraining } from "../../controllers/MANAGER/trainingController.js";

const router = express.Router();

router.get("/", getTrainings);
router.post("/", createTraining);

export default router;
