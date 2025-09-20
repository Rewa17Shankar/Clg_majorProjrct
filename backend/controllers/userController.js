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


// Enhanced userController.js with salary functionality
import supabase from "../config/supabaseClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {getAllUsersWithDepartment, updateUserDepartment, } from "../models/userModel.js";

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

// Get user profile by ID with salary
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

    // Fetch role name
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

    // find user
    const { data: users, error } = await supabase
      .from("users")
      .select("id, username, password, must_reset, role_id")
      .eq("username", username)
      .single();

    if (error || !users) return res.status(400).json({ error: "Invalid username" });

    const match = await bcrypt.compare(password, users.password);
    if (!match) return res.status(400).json({ error: "Invalid password" });

    const token = jwt.sign({ id: users.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

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
    // update must_reset flag
    const { data, error } = await supabase
      .from("users")
      .update({ must_reset: true })
      .eq("id", userId)
      .select("id, username, email, role_id, must_reset, base_salary")
      .single();

    if (error) throw error;

    // also fetch role name
    const { data: roleData, error: roleError } = await supabase
      .from("roles")
      .select("role_name")
      .eq("id", data.role_id)
      .single();

    if (roleError) throw roleError;

    // formatted user object
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
    // get users with must_reset and salary
    const { data: users, error: userError } = await supabase
      .from("users")
      .select("id, username, email, role_id, must_reset, base_salary");

    if (userError) throw userError;

    // get roles
    const { data: roles, error: roleError } = await supabase
      .from("roles")
      .select("id, role_name");

    if (roleError) throw roleError;

    // map role_id → role_name
    const roleMap = {};
    roles.forEach((r) => (roleMap[r.id] = r.role_name));

    const formatted = users.map((u) => ({
      id: u.id,
      name: u.username,
      email: u.email,
      role: roleMap[u.role_id] || "Unknown",
      must_reset: u.must_reset,
      base_salary: u.base_salary || 0,
    }));

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
    res.status(500).json({ error: err.message });
  }
};

// New function to update user salary
export const updateUserSalary = async (req, res) => {
  try {
    const { userId, newSalary } = req.body;

    if (!userId || newSalary === undefined) {
      return res.status(400).json({ error: "User ID and new salary are required" });
    }

    const salary = parseFloat(newSalary);
    if (salary < 0) {
      return res.status(400).json({ error: "Salary cannot be negative" });
    }

    // Update user's base salary
    const { data, error } = await supabase
      .from("users")
      .update({ base_salary: salary })
      .eq("id", userId)
      .select()
      .single();

    if (error) return res.status(400).json({ error: error.message });

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
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};