import express from "express";
<<<<<<< HEAD
import { 
  addUser, 
  getUserCounts,  
  resetPassword, 
  loginUser, 
  updatePassword, 
  getUserProfile, 
  changeUserDepartment, 
  updateUserSalary,
  getAllUsers,
  getAllEmployees  // ✅ ADD THIS IMPORT
} from "../controllers/userController.js";

import { 
  getAllUsersWithDepartment, 
  updateUserDepartment, 
  updateUserDesignation
} from "../models/userModel.js";

=======
import { addUser, getUserCounts,  resetPassword, loginUser, updatePassword, getUserProfile, changeUserDepartment, updateUserSalary,getAllUsers} from "../controllers/userController.js";
// import { getAllUsers, updateUserDepartment } from "../models/userModel.js";
import { getAllUsersWithDepartment, updateUserDepartment, updateUserDesignation} from "../models/userModel.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
const router = express.Router();

// ⚠️ IMPORTANT: Specific routes MUST come BEFORE generic routes like "/"
router.get("/counts", getUserCounts);

<<<<<<< HEAD
// ✅ ADD THIS ROUTE - For HR employees dropdown
router.get("/employees", getAllEmployees);

=======
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// Get all users with department (alternative endpoint)
router.get("/with-department", async (req, res) => {
  try {
    console.log("📥 GET /api/users/with-department");
    const users = await getAllUsersWithDepartment();
    console.log("✅ Successfully fetched users with department");
    res.json(users);
  } catch (err) {
    console.error("❌ Error in GET /api/users/with-department:");
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/:userId/profile", getUserProfile);

router.post("/add", addUser);
router.post("/:userId/reset", resetPassword);
router.post("/login", loginUser);
router.post("/update-password", updatePassword);

<<<<<<< HEAD
router.put("/update-department", changeUserDepartment);
router.put("/update-salary", updateUserSalary);
=======
router.put("/update-department", changeUserDepartment); // Update user department
router.put("/update-salary", updateUserSalary); // Update user salary

>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

// Update user department
router.patch("/:userId/department", async (req, res) => {
  try {
    const { userId } = req.params;
    const { department_id } = req.body;
    console.log(`📥 PATCH /api/users/${userId}/department - dept: ${department_id}`);
    
    const updatedUser = await updateUserDepartment(parseInt(userId), department_id);
    console.log("✅ Successfully updated user department");
    res.json(updatedUser);
  } catch (err) {
    console.error(`❌ Error updating user ${req.params.userId}:`);
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

<<<<<<< HEAD
=======

>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// Update user designation
router.patch("/:userId/designation", async (req, res) => {
  try {
    const { userId } = req.params;
    const { designation_id } = req.body;
    console.log(`📥 PATCH /api/users/${userId}/designation - designation: ${designation_id}`);
    
    const updatedUser = await updateUserDesignation(parseInt(userId), designation_id);
    console.log("✅ Successfully updated user designation");
    res.json(updatedUser);
  } catch (err) {
    console.error(`❌ Error updating user ${req.params.userId} designation:`);
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Get all users with department and role info
router.get("/", async (req, res) => {
  try {
    console.log("📥 GET /api/users - Fetching all users...");
<<<<<<< HEAD
    await getAllUsers(req, res);
=======
    // const users = await getAllUsers(req, res);
    // console.log("✅ Successfully fetched users:", users.length);
    // res.json(users);
     await getAllUsers(req, res);
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
  } catch (err) {
    console.error("❌ Error in GET /api/users:");
    console.error("Error message:", err.message);
    console.error("Error stack:", err.stack);
    console.error("Error details:", err);
    res.status(500).json({ 
      error: err.message,
      details: err.toString()
    });
  }
});

export default router;
