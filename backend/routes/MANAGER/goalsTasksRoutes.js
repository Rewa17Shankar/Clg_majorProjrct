// /backend/routes/goalsTasksRoutes.js
import express from "express";
import { getGoalsTasks, addGoal } from "../../controllers/MANAGER/goalsTasksController.js";

const router = express.Router();

router.get("/", getGoalsTasks);
router.post("/", addGoal);

export default router;
