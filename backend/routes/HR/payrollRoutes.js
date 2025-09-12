import express from "express";
import {getPayrolls, generatePayroll, getPayrollByUser, addBonus, addDeduction, updatePayroll } from "../../controllers/HR/payrollController.js";

const router = express.Router();

router.post("/bonus", addBonus);
router.post("/deduction", addDeduction);
router.put("/:id", updatePayroll);
router.get("/", getPayrolls);
router.post("/generate", generatePayroll);
router.get("/user/:user_id", getPayrollByUser);

export default router;
