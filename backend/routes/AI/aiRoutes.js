// import express from "express";
// import {
//   generateJobDescription,
//   recommendEmployeeForTask,
//   analyzeEmployeeFeedback,
//   testGemini  // ✅ Add this import
// } from "../../controllers/AI/aiController.js";
// import { authenticateToken } from "../../middlewares/authMiddleware.js";
// import { checkRole } from "../../middlewares/roleMiddleware.js";

// const router = express.Router();

// // Test endpoint (no auth required for testing)
// router.get('/test-gemini', testGemini);

// // HR Routes
// router.post(
//   "/hr/generate-job-description",
//   authenticateToken,
//   checkRole([1, 2, "superadmin", "hr"]),
//   generateJobDescription
// );

// // Manager Routes
// router.post(
//   "/manager/recommend-employee",
//   authenticateToken,
//   checkRole([1, 3, "superadmin", "manager"]),
//   recommendEmployeeForTask
// );

// router.post(
//   "/manager/analyze-feedback",
//   authenticateToken,
//   checkRole([1, 3, "superadmin", "manager"]),
//   analyzeEmployeeFeedback
// );

// export default router;
