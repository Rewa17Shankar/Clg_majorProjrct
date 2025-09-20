// backend/routes/HR/payrollRoutes.js
import express from "express";
import { getPayrollForHR } from "../../controllers/HR/payrollController.js";

const router = express.Router();

// Remove authMiddleware
router.get("/hr", getPayrollForHR);

export default router;
