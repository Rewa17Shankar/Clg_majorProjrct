import express from "express";
<<<<<<< HEAD
import { getTrainings, createTraining, updateTrainingProgress  } from "../../controllers/MANAGER/trainingController.js";
=======
import { getTrainings, createTraining } from "../../controllers/MANAGER/trainingController.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

const router = express.Router();

router.get("/", getTrainings);
router.post("/", createTraining);
<<<<<<< HEAD
router.patch("/:id/progress", updateTrainingProgress); 
=======
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

export default router;
