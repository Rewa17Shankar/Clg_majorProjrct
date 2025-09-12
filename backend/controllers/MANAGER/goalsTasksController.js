// /backend/controllers/goalsTasksController.js
import { GoalsTasksModel } from "../../models/MANAGER/goalsTasksModel.js";

export const getGoalsTasks = async (req, res) => {
  try {
    const managerId = req.user?.id;
    if (!managerId) return res.status(401).json({ error: "Unauthorized" });

    const goals = await GoalsTasksModel.getGoalsByManager(managerId);
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addGoal = async (req, res) => {
  try {
    const { user_id, title, description, due_date } = req.body;

    if (!user_id || !title) {
      return res.status(400).json({ error: "User ID and Title are required" });
    }

    const newGoal = await GoalsTasksModel.createGoal({
      user_id,
      title,
      description,
      due_date,
      status: "Pending",
    });

    res.status(201).json(newGoal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
