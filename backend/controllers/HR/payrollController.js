import supabase from "../../config/supabaseClient.js";

// Fetch payroll for all users (HR dashboard)
// export const getPayrollForHR = async (req, res) => {
//   try {
//     const { data, error } = await supabase
//       .from("payroll")
//       .select(`
//         id,
//         user_id,
//         base_salary,
//         month,
//         year,
//         days_present,
//         overtime_hours,
//         total_salary,
//         generated_at,
//         users (
//           username,
//           role_id
//         )
//       `)
//       .order("year", { ascending: false })
//       .order("month", { ascending: false });

//     if (error) throw error;

//     // Flatten data
//     const payroll = data.map((p) => ({
//       id: p.id,
//       user_id: p.user_id,
//       username: p.users.username,
//       role_id: p.users.role_id,
//       base_salary: p.base_salary,
//       month: p.month,
//       year: p.year,
//       days_present: p.days_present,
//       overtime_hours: p.overtime_hours,
//       total_salary: p.total_salary,
//       generated_at: p.generated_at,
//     }));

//     res.json(payroll);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to fetch payroll data" });
//   }
// };
export const getPayrollForHR = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("payroll")
      .select(`
        id,
        user_id,
        base_salary,
        month,
        year,
        days_present,
        overtime_hours,
        total_salary,
        generated_at,
        users:users (
          username,
          role_id
        )
      `)
      .order("month", { ascending: false })
      .order("year", { ascending: false });

    if (error) throw error;

    const payroll = data.map((p) => ({
      id: p.id,
      user_id: p.user_id,
      username: p.users?.username || "N/A",
      role_id: p.users?.role_id || 0,
      base_salary: p.base_salary,
      month: p.month,
      year: p.year,
      days_present: p.days_present,
      overtime_hours: p.overtime_hours,
      total_salary: p.total_salary,
      generated_at: p.generated_at,
    }));

    res.json(payroll);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch payroll data" });
  }
};
