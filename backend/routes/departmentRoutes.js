import express from "express";
import { getAllDepartments, addDepartment } from "../models/departmentModel.js";

const router = express.Router();

// Get all departments
router.get("/", async (req, res) => {
  try {
    const departments = await getAllDepartments();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add new department
router.post("/", async (req, res) => {
  try {
    const { department_name } = req.body;
    const newDept = await addDepartment(department_name);
    res.json(newDept);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
