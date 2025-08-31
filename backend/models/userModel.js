// // import supabase from "../config/supabaseClient.js";

// // export const getUserByUsername = async (username) => {
// //   return await supabase
// //     .from("users")
// //     .select("id, username, password, must_reset, role_id")
// //     .eq("username", username)
// //     .single();
// // };

// // export const updateUserPassword = async (userId, hashedPassword) => {
// //   return await supabase
// //     .from("users")
// //     .update({ password: hashedPassword, must_reset: false })
// //     .eq("id", userId);
// // };

// // export const getSuperAdminByEmail = async (email) => {
// //   return await supabase
// //     .from("users")
// //     .select("id, email, password, must_reset, role_id")
// //     .eq("email", email)
// //     .single();
// // };



// // models/userModel.js
// import supabase from "../config/supabaseClient.js";

// export const findUserByEmail = async (email) => {
//   const { data, error } = await supabase
//     .from("users")
//     .select("*")
//     .eq("email", email)
//     .single();

//   if (error) throw error;
//   return data;
// };

// export const createUser = async (email, passwordHash, role) => {
//   const { data, error } = await supabase
//     .from("users")
//     .insert([{ email, password: passwordHash, role }])
//     .select()
//     .single();

//   if (error) throw error;
//   return data;
// };




// backend/models/userModel.js
import supabase from "../config/supabaseClient.js";

export const createUser = async ({ name, email, role, password }) => {
  return await supabase
    .from("users")
    .insert([{ name, email, role, password }]);
};

export const getUserCounts = async () => {
  const roles = ["HR", "Manager", "Employee"];
  let counts = {};

  for (let role of roles) {
    const { count, error } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("role", role);

    if (error) throw new Error(error.message);
    counts[role] = count;
  }

  return counts;
};
