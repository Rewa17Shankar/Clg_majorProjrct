// import supabase from "../config/supabaseClient.js";
// import bcrypt from "bcrypt";
// import {getAllUsersWithDepartment, updateUserDepartment, } from "../models/userModel.js";

// export const fetchUsers = async (req, res) => {
//   try {
//     const users = await getAllUsersWithDepartment();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const changeUserDepartment = async (req, res) => {
//   try {
//     const { userId, departmentId } = req.body;
//     const updated = await updateUserDepartment(userId, departmentId);
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get user profile by ID
// export const getUserProfile = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const { data, error } = await supabase
//       .from("users")
//       .select("id, username, email, role_id")
//       .eq("id", userId)
//       .single();

//     if (error || !data) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Fetch role name
//     const { data: roleData, error: roleError } = await supabase
//       .from("roles")
//       .select("role_name")
//       .eq("id", data.role_id)
//       .single();

//     if (roleError) throw roleError;

//     return res.json({
//       id: data.id,
//       username: data.username,
//       email: data.email,
//       role: roleData?.role_name || "Unknown",
//     });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };


// export const updatePassword = async (req, res) => {
//   try {
//     const { userId, newPassword } = req.body;

//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     const { data, error } = await supabase
//       .from("users")
//       .update({
//         password: hashedPassword,
//         must_reset: false,
//       })
//       .eq("id", userId)
//       .select();

//     if (error) return res.status(400).json({ error: error.message });

//     res.json({ message: "Password updated successfully", user: data[0] });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// export const loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // find user
//     const { data: users, error } = await supabase
//       .from("users")
//       .select("id, username, password, must_reset, role_id")
//       .eq("username", username)
//       .single();

//     if (error || !users) return res.status(400).json({ error: "Invalid username" });

//     const match = await bcrypt.compare(password, users.password);
//     if (!match) return res.status(400).json({ error: "Invalid password" });

//     if (users.must_reset) {
//       return res.json({
//         mustReset: true,
//         userId: users.id,
//         message: "Password reset required",
//       });
//     }

//     res.json({
//       mustReset: false,
//       userId: users.id,
//       roleId: users.role_id,
//       username: users.username,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// export const resetPassword = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // update must_reset flag
//     const { data, error } = await supabase
//       .from("users")
//       .update({ must_reset: true })
//       .eq("id", userId)
//       .select("id, username, email, role_id, must_reset") // ✅ return updated user
//       .single();

//     if (error) throw error;

//     // also fetch role name
//     const { data: roleData, error: roleError } = await supabase
//       .from("roles")
//       .select("role_name")
//       .eq("id", data.role_id)
//       .single();

//     if (roleError) throw roleError;

//     // formatted user object
//     const updatedUser = {
//       id: data.id,
//       name: data.username,
//       email: data.email,
//       role: roleData?.role_name || "Unknown",
//       must_reset: data.must_reset,
//     };

//     return res.json({
//       message: "Password reset enforced successfully",
//       user: updatedUser, // ✅ send updated user
//     });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };



// export const getAllUsers = async (req, res) => {
//   try {
//     // get users with must_reset
//     const { data: users, error: userError } = await supabase
//       .from("users")
//       .select("id, username, email, role_id, must_reset"); // ✅ added must_reset

//     if (userError) throw userError;

//     // get roles
//     const { data: roles, error: roleError } = await supabase
//       .from("roles")
//       .select("id, role_name");

//     if (roleError) throw roleError;

//     // map role_id → role_name
//     const roleMap = {};
//     roles.forEach((r) => (roleMap[r.id] = r.role_name));

//     const formatted = users.map((u) => ({
//       id: u.id,
//       name: u.username,
//       email: u.email,
//       role: roleMap[u.role_id] || "Unknown",
//       must_reset: u.must_reset, // ✅ include must_reset in response
//     }));

//     return res.json(formatted);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };




// export const getUserCounts = async (req, res) => {
//   try {
//     const { data, error } = await supabase
//       .from("users")
//       .select("role_id, roles!inner(role_name)");

//     if (error) {
//       return res.status(400).json({ error: error.message });
//     }

//     const counts = { HR: 0, Manager: 0, Employee: 0 };

//     data.forEach((u) => {
//       if (u.roles.role_name === "HR") counts.HR++;
//       if (u.roles.role_name === "Manager") counts.Manager++;
//       if (u.roles.role_name === "Employee") counts.Employee++;
//     });

//     return res.json(counts);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };



// export const addUser = async (req, res) => {
//   try {
//     const { username, email, password, role_name, department_id, designation_id, date_of_joining } = req.body;

//     if (!username || !password || !role_name) {
//       return res.status(400).json({ error: "Username, password, and role are required" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Get role_id
//     const { data: roleData, error: roleError } = await supabase
//       .from("roles")
//       .select("id")
//       .eq("role_name", role_name)
//       .single();

//     if (roleError || !roleData) {
//       return res.status(400).json({ error: "Invalid role" });
//     }

//     // ✅ Insert into users table
//     const { data, error } = await supabase
//       .from("users")
//       .insert([{
//         username,
//         email,
//         password: hashedPassword,
//         role_id: roleData.id,
//         department_id,
//         designation_id,
//         date_of_joining
//       }])
//       .select();

//     if (error) return res.status(400).json({ error: error.message });

//     res.status(201).json({ message: "User created successfully", user: data[0] });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


<<<<<<< HEAD
// // Enhanced userController.js with salary functionality
// import supabase from "../config/supabaseClient.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import {getAllUsersWithDepartment, updateUserDepartment, } from "../models/userModel.js";

// export const fetchUsers = async (req, res) => {
//   try {
//     const users = await getAllUsersWithDepartment();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const changeUserDepartment = async (req, res) => {
//   try {
//     const { userId, departmentId } = req.body;
//     const updated = await updateUserDepartment(userId, departmentId);
//     res.json(updated);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // Get user profile by ID with salary
// export const getUserProfile = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const { data, error } = await supabase
//       .from("users")
//       .select("id, username, email, role_id, base_salary")
//       .eq("id", userId)
//       .single();

//     if (error || !data) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // Fetch role name
//     const { data: roleData, error: roleError } = await supabase
//       .from("roles")
//       .select("role_name")
//       .eq("id", data.role_id)
//       .single();

//     if (roleError) throw roleError;

//     return res.json({
//       id: data.id,
//       username: data.username,
//       email: data.email,
//       role: roleData?.role_name || "Unknown",
//       base_salary: data.base_salary || 0,
//     });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// export const updatePassword = async (req, res) => {
//   try {
//     const { userId, newPassword } = req.body;

//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     const { data, error } = await supabase
//       .from("users")
//       .update({
//         password: hashedPassword,
//         must_reset: false,
//       })
//       .eq("id", userId)
//       .select();

//     if (error) return res.status(400).json({ error: error.message });

//     res.json({ message: "Password updated successfully", user: data[0] });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const loginUser = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     // find user
//     const { data: users, error } = await supabase
//       .from("users")
//       .select("id, username, password, must_reset, role_id")
//       .eq("username", username)
//       .single();

//     if (error || !users) return res.status(400).json({ error: "Invalid username" });

//     const match = await bcrypt.compare(password, users.password);
//     if (!match) return res.status(400).json({ error: "Invalid password" });

//     const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

//     if (users.must_reset) {
//       return res.json({
//         mustReset: true,
//         userId: users.id,
//         message: "Password reset required",
//       });
//     }

//     res.json({
//       mustReset: false,
//       userId: users.id,
//       roleId: users.role_id,
//       username: users.username,
//       token,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const resetPassword = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     // update must_reset flag
//     const { data, error } = await supabase
//       .from("users")
//       .update({ must_reset: true })
//       .eq("id", userId)
//       .select("id, username, email, role_id, must_reset, base_salary")
//       .single();

//     if (error) throw error;

//     // also fetch role name
//     const { data: roleData, error: roleError } = await supabase
//       .from("roles")
//       .select("role_name")
//       .eq("id", data.role_id)
//       .single();

//     if (roleError) throw roleError;

//     // formatted user object
//     const updatedUser = {
//       id: data.id,
//       name: data.username,
//       email: data.email,
//       role: roleData?.role_name || "Unknown",
//       must_reset: data.must_reset,
//       base_salary: data.base_salary || 0,
//     };

//     return res.json({
//       message: "Password reset enforced successfully",
//       user: updatedUser,
//     });
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// export const getAllUsers = async (req, res) => {
//   try {
//     // get users with must_reset and salary
//     console.log("🔍 getAllUsers called");
//     const { data: users, error: userError } = await supabase
//       .from("users")
//       .select("id, username, email, role_id, must_reset, base_salary,department_id,designation_id");

//     if (userError){
//       console.error("❌ Error fetching users:", userError);
//        throw userError;
//     }

//      console.log("✅ Fetched users from DB:", users.length);
//     // get roles
//     const { data: roles, error: roleError } = await supabase
//       .from("roles")
//       .select("id, role_name");

//     if (roleError) throw roleError;

//         // ✅ Get departments
//     const { data: departments, error: deptError } = await supabase
//       .from("departments")
//       .select("id, name");

//     if (deptError) {
//       console.error("❌ Error fetching departments:", deptError);
//       throw deptError;
//     }

//     console.log("✅ Departments from DB:", departments.length);

//     // ✅ Get designations
//     const { data: designations, error: desigError } = await supabase
//       .from("designations")
//       .select("id, title");

//     if (desigError) {
//       console.error("❌ Error fetching designations:", desigError);
//       throw desigError;
//     }

//     // map role_id → role_name
//     const roleMap = {};
//     roles.forEach((r) => (roleMap[r.id] = r.role_name));

//     // ✅ Create department map
//     const deptMap = {};
//     departments.forEach((d) => (deptMap[d.id] = d.name));
//     console.log("📊 Department map:", deptMap);

//     // ✅ Create designation map
//     const desigMap = {};
//     designations.forEach((d) => (desigMap[d.id] = d.title));

//     // const formatted = users.map((u) => ({
      
//     //   id: u.id,
//     //   name: u.username,
//     //   email: u.email,
//     //   role: roleMap[u.role_id] || "Unknown",
//     //   must_reset: u.must_reset,
//     //   base_salary: u.base_salary || 0,
//     // }));

//        // ✅ Format with department and designation info
//     const formatted = users.map((u) => {
//       const departmentName = u.department_id ? (deptMap[u.department_id] || "Unknown") : "None";
//       const designationName = u.designation_id ? (desigMap[u.designation_id] || "Unknown") : "Not Assigned";
      
//       return {
//         id: u.id,
//         username: u.username,
//         name: u.username,
//         email: u.email,
//         role: roleMap[u.role_id] || "Unknown",
//         department_id: u.department_id,           // ✅ Include this
//         department: departmentName,                // ✅ Include this
//         designation_id: u.designation_id,         // ✅ Include this
//         designation: designationName,              // ✅ Include this
//         must_reset: u.must_reset,
//         base_salary: u.base_salary || 0,
//       };
//     });
    
//     console.log("✅ Formatted users:", formatted.length);
//     console.log("📊 Sample user:", formatted[0]);
//     return res.json(formatted);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// export const getUserCounts = async (req, res) => {
//   try {
//     const { data, error } = await supabase
//       .from("users")
//       .select("role_id, roles!inner(role_name)");

//     if (error) {
//       return res.status(400).json({ error: error.message });
//     }

//     const counts = { HR: 0, Manager: 0, Employee: 0 };

//     data.forEach((u) => {
//       if (u.roles.role_name === "HR") counts.HR++;
//       if (u.roles.role_name === "Manager") counts.Manager++;
//       if (u.roles.role_name === "Employee") counts.Employee++;
//     });

//     return res.json(counts);
//   } catch (err) {
//     return res.status(500).json({ error: err.message });
//   }
// };

// // Enhanced addUser function with salary
// export const addUser = async (req, res) => {
//   try {
//     const { 
//       username, 
//       email, 
//       password, 
//       role_name, 
//       department_id, 
//       designation_id, 
//       date_of_joining,
//       base_salary 
//     } = req.body;

//     if (!username || !password || !role_name) {
//       return res.status(400).json({ error: "Username, password, and role are required" });
//     }

//     // Validate salary
//     const salary = parseFloat(base_salary) || 0;
//     if (salary < 0) {
//       return res.status(400).json({ error: "Salary cannot be negative" });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Get role_id
//     const { data: roleData, error: roleError } = await supabase
//       .from("roles")
//       .select("id")
//       .eq("role_name", role_name)
//       .single();

//     if (roleError || !roleData) {
//       return res.status(400).json({ error: "Invalid role" });
//     }

//     // Insert into users table with salary
//     const { data, error } = await supabase
//       .from("users")
//       .insert([{
//         username,
//         email,
//         password: hashedPassword,
//         role_id: roleData.id,
//         department_id,
//         designation_id,
//         date_of_joining,
//         base_salary: salary
//       }])
//       .select();

//     if (error) return res.status(400).json({ error: error.message });

//     // Create initial payroll record if salary is provided
//     if (salary > 0) {
//       const currentDate = new Date();
//       const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//       const currentYear = currentDate.getFullYear();

//       await supabase
//         .from("payroll")
//         .insert([{
//           user_id: data[0].id,
//           salary: salary,
//           month: currentMonth,
//           year: currentYear
//         }]);
//     }

//     res.status(201).json({ 
//       message: "User created successfully with salary information", 
//       user: data[0] 
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// // New function to update user salary
// export const updateUserSalary = async (req, res) => {
//   try {
//     const { userId, newSalary } = req.body;

//     if (!userId || newSalary === undefined) {
//       return res.status(400).json({ error: "User ID and new salary are required" });
//     }

//     const salary = parseFloat(newSalary);
//     if (salary < 0) {
//       return res.status(400).json({ error: "Salary cannot be negative" });
//     }

//     // Update user's base salary
//     const { data, error } = await supabase
//       .from("users")
//       .update({ base_salary: salary })
//       .eq("id", userId)
//       .select()
//       .single();

//     if (error) return res.status(400).json({ error: error.message });

//     // Create new payroll record for current month
//     const currentDate = new Date();
//     const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
//     const currentYear = currentDate.getFullYear();

//     await supabase
//       .from("payroll")
//       .insert([{
//         user_id: userId,
//         salary: salary,
//         month: currentMonth,
//         year: currentYear
//       }]);

//     res.json({ 
//       message: "Salary updated successfully", 
//       user: data 
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


////shrey
import supabase from "../config/supabaseClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  getAllUsersWithDepartment,
  updateUserDepartment,
} from "../models/userModel.js";
=======
// Enhanced userController.js with salary functionality
import supabase from "../config/supabaseClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {getAllUsersWithDepartment, updateUserDepartment, } from "../models/userModel.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

export const fetchUsers = async (req, res) => {
  try {
    const users = await getAllUsersWithDepartment();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const changeUserDepartment = async (req, res) => {
  try {
    const { userId, departmentId } = req.body;
    const updated = await updateUserDepartment(userId, departmentId);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

<<<<<<< HEAD
=======
// Get user profile by ID with salary
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
export const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const { data, error } = await supabase
      .from("users")
      .select("id, username, email, role_id, base_salary")
      .eq("id", userId)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: "User not found" });
    }

<<<<<<< HEAD
=======
    // Fetch role name
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data: roleData, error: roleError } = await supabase
      .from("roles")
      .select("role_name")
      .eq("id", data.role_id)
      .single();

    if (roleError) throw roleError;

    return res.json({
      id: data.id,
      username: data.username,
      email: data.email,
      role: roleData?.role_name || "Unknown",
      base_salary: data.base_salary || 0,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { userId, newPassword } = req.body;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const { data, error } = await supabase
      .from("users")
      .update({
        password: hashedPassword,
        must_reset: false,
      })
      .eq("id", userId)
      .select();

    if (error) return res.status(400).json({ error: error.message });

    res.json({ message: "Password updated successfully", user: data[0] });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

<<<<<<< HEAD
=======
    // find user
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data: users, error } = await supabase
      .from("users")
      .select("id, username, password, must_reset, role_id")
      .eq("username", username)
      .single();

    if (error || !users) return res.status(400).json({ error: "Invalid username" });

    const match = await bcrypt.compare(password, users.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

<<<<<<< HEAD
    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
=======
    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

    if (users.must_reset) {
      return res.json({
        mustReset: true,
        userId: users.id,
        message: "Password reset required",
      });
    }

    res.json({
      mustReset: false,
      userId: users.id,
      roleId: users.role_id,
      username: users.username,
      token,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const resetPassword = async (req, res) => {
  const { userId } = req.params;

  try {
<<<<<<< HEAD
=======
    // update must_reset flag
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data, error } = await supabase
      .from("users")
      .update({ must_reset: true })
      .eq("id", userId)
      .select("id, username, email, role_id, must_reset, base_salary")
      .single();

    if (error) throw error;

<<<<<<< HEAD
=======
    // also fetch role name
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data: roleData, error: roleError } = await supabase
      .from("roles")
      .select("role_name")
      .eq("id", data.role_id)
      .single();

    if (roleError) throw roleError;

<<<<<<< HEAD
=======
    // formatted user object
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const updatedUser = {
      id: data.id,
      name: data.username,
      email: data.email,
      role: roleData?.role_name || "Unknown",
      must_reset: data.must_reset,
      base_salary: data.base_salary || 0,
    };

    return res.json({
      message: "Password reset enforced successfully",
      user: updatedUser,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
<<<<<<< HEAD
    console.log("🔍 getAllUsers called");
    const { data: users, error: userError } = await supabase
      .from("users")
      .select(
        "id, username, email, role_id, must_reset, base_salary, department_id, designation_id"
      );

    if (userError) {
      console.error("❌ Error fetching users:", userError);
      throw userError;
    }

    console.log("✅ Fetched users from DB:", users.length);

=======
    // get users with must_reset and salary
    console.log("🔍 getAllUsers called");
    const { data: users, error: userError } = await supabase
      .from("users")
      .select("id, username, email, role_id, must_reset, base_salary,department_id,designation_id");

    if (userError){
      console.error("❌ Error fetching users:", userError);
       throw userError;
    }

     console.log("✅ Fetched users from DB:", users.length);
    // get roles
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data: roles, error: roleError } = await supabase
      .from("roles")
      .select("id, role_name");

    if (roleError) throw roleError;

<<<<<<< HEAD
=======
        // ✅ Get departments
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data: departments, error: deptError } = await supabase
      .from("departments")
      .select("id, name");

    if (deptError) {
      console.error("❌ Error fetching departments:", deptError);
      throw deptError;
    }

    console.log("✅ Departments from DB:", departments.length);

<<<<<<< HEAD
=======
    // ✅ Get designations
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data: designations, error: desigError } = await supabase
      .from("designations")
      .select("id, title");

    if (desigError) {
      console.error("❌ Error fetching designations:", desigError);
      throw desigError;
    }

<<<<<<< HEAD
    const roleMap = {};
    roles.forEach((r) => (roleMap[r.id] = r.role_name));

=======
    // map role_id → role_name
    const roleMap = {};
    roles.forEach((r) => (roleMap[r.id] = r.role_name));

    // ✅ Create department map
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const deptMap = {};
    departments.forEach((d) => (deptMap[d.id] = d.name));
    console.log("📊 Department map:", deptMap);

<<<<<<< HEAD
    const desigMap = {};
    designations.forEach((d) => (desigMap[d.id] = d.title));

    const formatted = users.map((u) => {
      const departmentName = u.department_id
        ? deptMap[u.department_id] || "Unknown"
        : "None";
      const designationName = u.designation_id
        ? desigMap[u.designation_id] || "Unknown"
        : "Not Assigned";

=======
    // ✅ Create designation map
    const desigMap = {};
    designations.forEach((d) => (desigMap[d.id] = d.title));

    // const formatted = users.map((u) => ({
      
    //   id: u.id,
    //   name: u.username,
    //   email: u.email,
    //   role: roleMap[u.role_id] || "Unknown",
    //   must_reset: u.must_reset,
    //   base_salary: u.base_salary || 0,
    // }));

       // ✅ Format with department and designation info
    const formatted = users.map((u) => {
      const departmentName = u.department_id ? (deptMap[u.department_id] || "Unknown") : "None";
      const designationName = u.designation_id ? (desigMap[u.designation_id] || "Unknown") : "Not Assigned";
      
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
      return {
        id: u.id,
        username: u.username,
        name: u.username,
        email: u.email,
        role: roleMap[u.role_id] || "Unknown",
<<<<<<< HEAD
        department_id: u.department_id,
        department: departmentName,
        designation_id: u.designation_id,
        designation: designationName,
=======
        department_id: u.department_id,           // ✅ Include this
        department: departmentName,                // ✅ Include this
        designation_id: u.designation_id,         // ✅ Include this
        designation: designationName,              // ✅ Include this
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
        must_reset: u.must_reset,
        base_salary: u.base_salary || 0,
      };
    });
<<<<<<< HEAD

=======
    
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    console.log("✅ Formatted users:", formatted.length);
    console.log("📊 Sample user:", formatted[0]);
    return res.json(formatted);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export const getUserCounts = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("role_id, roles!inner(role_name)");

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    const counts = { HR: 0, Manager: 0, Employee: 0 };

    data.forEach((u) => {
      if (u.roles.role_name === "HR") counts.HR++;
      if (u.roles.role_name === "Manager") counts.Manager++;
      if (u.roles.role_name === "Employee") counts.Employee++;
    });

    return res.json(counts);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

<<<<<<< HEAD
// ✅ MAIN FIX - addUser function
export const addUser = async (req, res) => {
  try {
    const {
      username,
      email,
      password,
      role_name,
      department_id,
      designation_id,
      date_of_joining,
      base_salary,
    } = req.body;

    console.log("👤 Creating user:", {
      username,
      email,
      role_name,
      department_id,
      designation_id,
    });

    if (!username || !password || !role_name) {
      return res.status(400).json({
        error: "Username, password, and role are required",
      });
    }

=======
// Enhanced addUser function with salary
export const addUser = async (req, res) => {
  try {
    const { 
      username, 
      email, 
      password, 
      role_name, 
      department_id, 
      designation_id, 
      date_of_joining,
      base_salary 
    } = req.body;

    if (!username || !password || !role_name) {
      return res.status(400).json({ error: "Username, password, and role are required" });
    }

    // Validate salary
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const salary = parseFloat(base_salary) || 0;
    if (salary < 0) {
      return res.status(400).json({ error: "Salary cannot be negative" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Get role_id
    const { data: roleData, error: roleError } = await supabase
      .from("roles")
      .select("id")
      .eq("role_name", role_name)
      .single();

    if (roleError || !roleData) {
      return res.status(400).json({ error: "Invalid role" });
    }

<<<<<<< HEAD
    console.log("✅ Role ID found:", roleData.id);

    // 1️⃣ Insert into users table
    const { data, error } = await supabase
      .from("users")
      .insert([
        {
          username,
          email,
          password: hashedPassword,
          role_id: roleData.id,
          department_id,
          designation_id,
          date_of_joining,
          base_salary: salary,
        },
      ])
      .select();

    if (error) {
      console.error("❌ User insert error:", error);
      return res.status(400).json({ error: error.message });
    }

    console.log("✅ User created:", data[0].id);

    const userId = data[0].id;

    // 2️⃣ ✅ INSERT in employees table (if Employee role)
    if (role_name === "Employee" || roleData.id === 4) {
      console.log("👔 Creating employee record...");

      const { data: empData, error: empError } = await supabase
        .from("employees")
        .insert([
          {
            user_id: userId,
            department_id: parseInt(department_id) || null,
            designation_id: parseInt(designation_id) || null,
            date_of_joining: date_of_joining || new Date().toISOString(),
            base_salary: salary,
          },
        ])
        .select();

      if (empError) {
        console.error("❌ Employee insert error:", empError);
        // Don't throw - user already created
      } else {
        console.log("✅ Employee record created:", empData[0].id);
      }
    }

    // 3️⃣ Create initial payroll record if salary is provided
    if (salary > 0) {
      const currentDate = new Date();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      const { error: payrollError } = await supabase
        .from("payroll")
        .insert([
          {
            user_id: userId,
            base_salary: salary,
            month: month,
            year: year,
            days_present: 0,
            overtime_hours: 0,
            total_salary: salary,
          },
        ]);

      if (payrollError) {
        console.error("❌ Payroll insert error:", payrollError);
      } else {
        console.log("✅ Payroll record created");
      }
    }

    res.status(201).json({
      message: "User created successfully with salary information",
      user: data[0],
    });
  } catch (err) {
    console.error("❌ Error:", err);
=======
    // Insert into users table with salary
    const { data, error } = await supabase
      .from("users")
      .insert([{
        username,
        email,
        password: hashedPassword,
        role_id: roleData.id,
        department_id,
        designation_id,
        date_of_joining,
        base_salary: salary
      }])
      .select();

    if (error) return res.status(400).json({ error: error.message });

    // Create initial payroll record if salary is provided
    if (salary > 0) {
      const currentDate = new Date();
      const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
      const currentYear = currentDate.getFullYear();

      await supabase
        .from("payroll")
        .insert([{
          user_id: data[0].id,
          salary: salary,
          month: currentMonth,
          year: currentYear
        }]);
    }

    res.status(201).json({ 
      message: "User created successfully with salary information", 
      user: data[0] 
    });
  } catch (err) {
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    res.status(500).json({ error: err.message });
  }
};

<<<<<<< HEAD
// ✅ NEW - Get all employees for HR dropdown
export const getAllEmployees = async (req, res) => {
  try {
    console.log("📋 Fetching all employees...");

    const { data, error } = await supabase
      .from("users")
      .select(
        "id, username, email, role_id, base_salary, department_id, designation_id"
      )
      .eq("role_id", 4) // Only employees
      .order("username", { ascending: true });

    if (error) {
      console.error("❌ Error:", error);
      throw error;
    }

    console.log("✅ Employees found:", data?.length || 0);

    res.json(data || []);
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: error.message });
  }
};

=======
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
// New function to update user salary
export const updateUserSalary = async (req, res) => {
  try {
    const { userId, newSalary } = req.body;

    if (!userId || newSalary === undefined) {
<<<<<<< HEAD
      return res
        .status(400)
        .json({ error: "User ID and new salary are required" });
=======
      return res.status(400).json({ error: "User ID and new salary are required" });
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    }

    const salary = parseFloat(newSalary);
    if (salary < 0) {
      return res.status(400).json({ error: "Salary cannot be negative" });
    }

<<<<<<< HEAD
=======
    // Update user's base salary
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    const { data, error } = await supabase
      .from("users")
      .update({ base_salary: salary })
      .eq("id", userId)
      .select()
      .single();

    if (error) return res.status(400).json({ error: error.message });

<<<<<<< HEAD
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    await supabase.from("payroll").insert([
      {
        user_id: userId,
        base_salary: salary,
        month: month,
        year: year,
        days_present: 0,
        overtime_hours: 0,
        total_salary: salary,
      },
    ]);

    res.json({
      message: "Salary updated successfully",
      user: data,
=======
    // Create new payroll record for current month
    const currentDate = new Date();
    const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
    const currentYear = currentDate.getFullYear();

    await supabase
      .from("payroll")
      .insert([{
        user_id: userId,
        salary: salary,
        month: currentMonth,
        year: currentYear
      }]);

    res.json({ 
      message: "Salary updated successfully", 
      user: data 
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
<<<<<<< HEAD
};

export default {
  fetchUsers,
  changeUserDepartment,
  getUserProfile,
  updatePassword,
  loginUser,
  resetPassword,
  getAllUsers,
  getUserCounts,
  addUser,
  getAllEmployees,
  updateUserSalary,
};
=======
};
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
