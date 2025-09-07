import supabase from "../config/supabaseClient.js";
export const getAllUsersWithDepartment = async () => {
  const { data, error } = await supabase
    .from("users")
    .select("id, username, email, department_id, departments(name), roles(role_name)")
    .order("id", { ascending: true });

  if (error) throw error;

  return data.map((u) => ({
    id: u.id,
    username: u.username,
    email: u.email,
    department_id: u.department_id,
    department_name: u.departments?.name || null, // ✅ use name from DB
    role: u.roles?.role_name || "User",
  }));
};

export const updateUserDesignation = async (userId, designationId) => {
  const { error } = await supabase
    .from("users")
    .update({ designation_id: designationId })
    .eq("id", userId);
  if (error) throw error;
};

// Update user department
export const updateUserDepartment = async (userId, departmentId) => {
  const { data, error } = await supabase
    .from("users")
    .update({ department_id: departmentId })
    .eq("id", userId)
    .select()
    .single();

  if (error) throw error;
  return data;
};

// ➡️ Insert new user
export const createUser = async ({ name, email, role, password }) => {
  const { data, error } = await supabase
    .from("users")
    .insert([{ name, email, role, password }])
    .select();

  if (error) throw new Error(error.message);
  return data[0];
};

// ➡️ Get user counts by role
export const getUserCountsModel = async () => {
  const roles = ["HR", "Manager", "Employee"];
  const counts = {};

  for (const role of roles) {
    const { count, error } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("role", role);

    if (error) throw new Error(error.message);
    counts[role] = count;
  }

  return counts;
};
