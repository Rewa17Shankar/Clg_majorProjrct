// import express from "express";
// import dotenv from "dotenv";
// import authRoutes from "./routes/authRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
// import departmentRoutes from "./routes/HR/departmentRoutes.js";
// import designationRoutes from "./routes/HR/designationRoutes.js";
// import attendanceRoutes from "./routes/attendanceRoutes.js";
// import shiftRoutes from "./routes/HR/shiftRoutes.js";
// import leaveRoutes from "./routes/HR/leaveRoutes.js";
// import recruitmentRoutes from "./routes/HR/recruitmentRoutes.js";
// import payrollRoutes from "./routes/HR/payrollRoutes.js";
// import resignationRoutes from "./routes/HR/resignationRoutes.js";
// import employeeRoutes from "./routes/HR/employeeRoutes.js";
// import teamRoutes from "./routes/MANAGER/teamRoutes.js";
// import performanceRoutes from "./routes/MANAGER/performanceRoutes.js";
// // import goalRoutes from "./routes/goalRoutes.js";
// import goalsTasksRoutes from "./routes/MANAGER/goalsTasksRoutes.js";
// import assetsRoutes from "./routes/MANAGER/assets.js";
// // import assetsRoutes from "./routes/assetsRoutes.js";
// import announcementsRoutes from "./routes/MANAGER/announcementsRoutes.js";
// import feedbackGrievanceRoutes from "./routes/MANAGER/feedbackGrievanceRoutes.js";
// import meetingsRoutes from "./routes/MANAGER/meetingsRoutes.js";
// import trainingRoutes from "./routes/MANAGER/trainingRoutes.js";
// import skillsRoutes from "./routes/MANAGER/skillsRoutes.js";
// import cors from "cors";
// dotenv.config();

// const app = express();

// app.use(cors({
//   origin: 'https://clg-major-projrct.vercel.app', 
//   credentials: true // if you need cookies
// }));
// // app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/departments", departmentRoutes);
// app.use("/api/designations", designationRoutes);
// app.use("/api/attendance", attendanceRoutes);
// app.use("/api/shifts", shiftRoutes);
// app.use("/api/leaves", leaveRoutes);
// app.use("/api/recruitment", recruitmentRoutes);
// app.use("/api/payroll", payrollRoutes);
// app.use("/api/resignations", resignationRoutes);
// app.use("/api/employees", employeeRoutes);
// app.use("/api/performance", performanceRoutes);
// // app.use("/api/goals", goalRoutes);
// app.use("/api/assets", assetsRoutes);
// app.use("/api/teams", teamRoutes);
// // app.use("/api/assets", assetsRoutes);
// app.use("/api/announcements", announcementsRoutes);
// app.use("/api/feedback-grievance", feedbackGrievanceRoutes);
// app.use("/api/meetings", meetingsRoutes);
// app.use("/api/goals-tasks", goalsTasksRoutes);
// app.use("/api/trainings", trainingRoutes);
// app.use("/api/skills", skillsRoutes);
// // Default route
// app.get("/", (req, res) => {
//   res.send("HRMS Backend Running...");
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import departmentRoutes from "./routes/HR/departmentRoutes.js";
import designationRoutes from "./routes/HR/designationRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import shiftRoutes from "./routes/HR/shiftRoutes.js";
import leaveRoutes from "./routes/HR/leaveRoutes.js";
import recruitmentRoutes from "./routes/HR/recruitmentRoutes.js";
import payrollRoutes from "./routes/HR/payrollRoutes.js";
import resignationRoutes from "./routes/HR/resignationRoutes.js";
import employeeRoutes from "./routes/HR/employeeRoutes.js";
import teamRoutes from "./routes/MANAGER/teamRoutes.js";
import performanceRoutes from "./routes/MANAGER/performanceRoutes.js";
import goalsTasksRoutes from "./routes/MANAGER/goalsTasksRoutes.js";
import assetsRoutes from "./routes/MANAGER/assets.js";
import announcementsRoutes from "./routes/MANAGER/announcementsRoutes.js";
import feedbackGrievanceRoutes from "./routes/MANAGER/feedbackGrievanceRoutes.js";
import meetingsRoutes from "./routes/MANAGER/meetingsRoutes.js";
import trainingRoutes from "./routes/MANAGER/trainingRoutes.js";
import skillsRoutes from "./routes/MANAGER/skillsRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ FIXED: Allow both localhost and production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://localhost:3000',
  'https://clg-major-projrct.vercel.app'
];

app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

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
app.use("/api/performance", performanceRoutes);
app.use("/api/assets", assetsRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/announcements", announcementsRoutes);
app.use("/api/feedback-grievance", feedbackGrievanceRoutes);
app.use("/api/meetings", meetingsRoutes);
app.use("/api/goals-tasks", goalsTasksRoutes);
app.use("/api/trainings", trainingRoutes);
app.use("/api/skills", skillsRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("HRMS Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
