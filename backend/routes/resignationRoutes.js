// const express = require("express");
// const router = express.Router();
// const resignationController = require("../controllers/resignationController");

// router.get("/", resignationController.getResignations);
// router.post("/", resignationController.createResignation);
// router.put("/:id/status", resignationController.updateStatus);
// router.get("/user/:user_id", resignationController.getResignationsByUser);

// module.exports = router;


// routes/resignationRoutes.js
import express from "express";
import { 
  getResignations, 
  createResignation, 
  updateStatus, 
  getResignationsByUser 
} from "../controllers/resignationController.js";

const router = express.Router();

router.get("/", getResignations);
router.post("/", createResignation);
router.put("/:id/status", updateStatus);
router.get("/user/:user_id", getResignationsByUser);

export default router;
