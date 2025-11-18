<<<<<<< HEAD
import express from "express";
import { getGoalsTasks, addGoal } from "../../controllers/MANAGER/goalsTasksController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const router = express.Router();

// Token required
router.get("/", authMiddleware, getGoalsTasks);
router.post("/", authMiddleware, addGoal);
=======
// /backend/routes/goalsTasksRoutes.js
import express from "express";
import { getGoalsTasks, addGoal } from "../../controllers/MANAGER/goalsTasksController.js";

const router = express.Router();

router.get("/", getGoalsTasks);
router.post("/", addGoal);
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

export default router;
