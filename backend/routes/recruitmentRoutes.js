// const express = require("express");
// const router = express.Router();
// const recruitmentController = require("../controllers/recruitmentController");

// // Jobs
// router.get("/jobs", recruitmentController.getJobs);
// router.post("/jobs", recruitmentController.createJob);

// // Applicants
// router.get("/jobs/:job_id/applicants", recruitmentController.getApplicants);
// router.post("/applicants", recruitmentController.applyJob);
// router.put("/applicants/:id/status", recruitmentController.updateApplicantStatus);

// module.exports = router;


// routes/recruitmentRoutes.js
import express from "express";
import { 
  getJobs, 
  createJob, 
  getApplicants, 
  applyJob, 
  updateApplicantStatus 
} from "../controllers/recruitmentController.js";

const router = express.Router();

// Jobs
router.get("/jobs", getJobs);
router.post("/jobs", createJob);

// Applicants
router.get("/jobs/:job_id/applicants", getApplicants);
router.post("/applicants", applyJob);
router.put("/applicants/:id/status", updateApplicantStatus);

export default router;
