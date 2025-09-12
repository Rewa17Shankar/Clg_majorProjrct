// backend/routes/teamRoutes.js
import express from "express";
import { getTeams, createTeam, addTeamMember, removeTeamMember, assignTask, getTeamTasks, getUsers,
} from "../../controllers/MANAGER/teamController.js";

const router = express.Router();

// Teams
router.get("/", getTeams);
router.post("/", createTeam);

// Members
router.post("/:teamId/members", addTeamMember);
router.delete("/:teamId/members/:userId", removeTeamMember);

// Tasks
router.post("/tasks", assignTask);
router.get("/:teamId/tasks", getTeamTasks);

// Users (for selection)
router.get("/users/all", getUsers);

export default router;
