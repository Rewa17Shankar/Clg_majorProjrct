import supabase from "../../config/supabaseClient.js";

// Get all trainings
export const getTrainings = async (req, res) => {
  try {
    const { data, error } = await supabase.from("trainings").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create training
export const createTraining = async (req, res) => {
  try {
    const { title, description, user_id, manager_id, start_date, end_date } = req.body;

    const { data, error } = await supabase.from("trainings").insert([
      { title, description, user_id, manager_id, start_date, end_date }
    ]).select();

    if (error) throw error;
    res.status(201).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
