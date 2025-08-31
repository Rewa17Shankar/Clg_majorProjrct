// backend/controllers/userController.js
import bcrypt from "bcrypt";
import { createUser, getUserCounts } from "../models/userModel.js";

export const addUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    if (!name || !email || !role || !password) {
      return res.status(400).json({ error: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const { data, error } = await createUser({ name, email, role, password: hashedPassword });

    if (error) return res.status(400).json({ error: error.message });

    res.status(201).json({ message: "User created successfully", data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const fetchCounts = async (req, res) => {
  try {
    const counts = await getUserCounts();
    res.json(counts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
