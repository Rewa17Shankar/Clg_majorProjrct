// backend/controllers/teamController.js
import * as TeamModel from "../../models/MANAGER/teamModel.js";

export const getTeams = async (req, res) => {
  try {
    const teams = await TeamModel.getAllTeams();
    res.json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createTeam = async (req, res) => {
  try {
    const { name, description, manager_id } = req.body;
    const team = await TeamModel.createTeam({ name, description, manager_id });
    res.json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const addTeamMember = async (req, res) => {
  try {
    const { teamId } = req.params;
    const { userId, role } = req.body;
    const member = await TeamModel.addMember(teamId, userId, role);
    res.json(member);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeTeamMember = async (req, res) => {
  try {
    const { teamId, userId } = req.params;
    await TeamModel.removeMember(teamId, userId);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const assignTask = async (req, res) => {
  try {
    const { title, description, due_date, team_id, created_by } = req.body;
    const task = await TeamModel.createTask({ title, description, due_date, team_id, created_by });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTeamTasks = async (req, res) => {
  try {
    const { teamId } = req.params;
    const tasks = await TeamModel.getTasksByTeam(teamId);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await TeamModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
