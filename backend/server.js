import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import designationRoutes from "./routes/designationRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import shiftRoutes from "./routes/shiftRoutes.js";
import leaveRoutes from "./routes/leaveRoutes.js";
import recruitmentRoutes from "./routes/recruitmentRoutes.js";
import payrollRoutes from "./routes/payrollRoutes.js";
import resignationRoutes from "./routes/resignationRoutes.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/designations", designationRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/shifts", shiftRoutes);
app.use("/api/leaves", leaveRoutes);
app.use("/api/recruitment", recruitmentRoutes);
app.use("/api/payroll", payrollRoutes);
app.use("/api/resignations", resignationRoutes);
app.use("/api/employees", employeeRoutes);
// Default route
app.get("/", (req, res) => {
  res.send("HRMS Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
