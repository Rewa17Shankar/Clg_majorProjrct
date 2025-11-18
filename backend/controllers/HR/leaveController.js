<<<<<<< HEAD
import supabase from "../../config/supabaseClient.js";
=======
// backend/controllers/leaveController.js
import {getLeaveTypes, createLeaveType, updateLeaveType, deleteLeaveType, createLeaveRequest,   getLeaveRequests, getLeaveRequestById, updateLeaveStatus, deleteLeaveRequest, } from "../../models/HR/leaveModel.js";
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5

/** ---------- LEAVE TYPES ---------- **/

export async function listLeaveTypes(req, res) {
<<<<<<< HEAD
  try {
    const { data, error } = await supabase
      .from("leave_types")
      .select("*");
    
    if (error) return res.status(400).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addLeaveType(req, res) {
  try {
    const { type } = req.body;
    if (!type) return res.status(400).json({ error: "type is required" });

    const { data, error } = await supabase
      .from("leave_types")
      .insert([{ type }])
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.status(201).json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function editLeaveType(req, res) {
  try {
    const { id } = req.params;
    const { type } = req.body;

    const { data, error } = await supabase
      .from("leave_types")
      .update({ type })
      .eq("id", id)
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function removeLeaveType(req, res) {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("leave_types")
      .delete()
      .eq("id", id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
=======
  const { data, error } = await getLeaveTypes();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function addLeaveType(req, res) {
  const { type } = req.body;
  if (!type) return res.status(400).json({ error: "type is required" });
  const { data, error } = await createLeaveType({ type });
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

export async function editLeaveType(req, res) {
  const { id } = req.params;
  const { type } = req.body;
  const { data, error } = await updateLeaveType(id, { type });
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function removeLeaveType(req, res) {
  const { id } = req.params;
  const { error } = await deleteLeaveType(id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ success: true });
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
}

/** ---------- LEAVE REQUESTS ---------- **/

<<<<<<< HEAD
export async function createRequest(req, res) {
  try {
    const { user_id, leave_type_id, start_date, end_date } = req.body;

    if (!user_id || !leave_type_id || !start_date || !end_date) {
      return res.status(400).json({
        error: "All fields required: user_id, leave_type_id, start_date, end_date",
      });
    }

    const payload = {
      user_id: parseInt(user_id),           // ✅ int
      leave_type_id: leave_type_id,         // ✅ uuid string
      start_date: start_date.toString(),
      end_date: end_date.toString(),
      status: "Pending",
      applied_at: new Date().toISOString(),
    };

    console.log("📥 Creating leave request:", payload);

    const { data, error } = await supabase
      .from("leave_requests")
      .insert([payload])
      .select();

    if (error) throw error;

    res.status(201).json({ data });
  } catch (error) {
    console.error("❌ Create request error:", error);
    res.status(400).json({ error: error.message || "Failed to create leave request" });
  }
}

export async function listRequests(req, res) {
  try {
    const { status, user_id } = req.query;

    let query = supabase
      .from("leave_requests")
      .select("*, leave_types(id, type)");

    if (status) query = query.eq("status", status);
    if (user_id) query = query.eq("user_id", user_id);

    const { data, error } = await query;

    if (error) return res.status(400).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getRequest(req, res) {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from("leave_requests")
      .select("*, leave_types(id, type)")
      .eq("id", id)
      .single();

    if (error) return res.status(400).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function setRequestStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const ALLOWED = ["Pending", "Approved", "Rejected"];
    if (!ALLOWED.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const { data, error } = await supabase
      .from("leave_requests")
      .update({ status })
      .eq("id", id)
      .select();

    if (error) return res.status(400).json({ error: error.message });
    res.json({ data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function removeRequest(req, res) {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("leave_requests")
      .delete()
      .eq("id", id);

    if (error) return res.status(400).json({ error: error.message });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
=======
const ALLOWED = ["Pending", "Approved", "Rejected"];

export async function createRequest(req, res) {
  const { user_id, leave_type_id, start_date, end_date } = req.body;
  if (!user_id || !leave_type_id || !start_date || !end_date) {
    return res.status(400).json({ error: "user_id, leave_type_id, start_date, end_date are required" });
  }
  const { data, error } = await createLeaveRequest({ user_id, leave_type_id, start_date, end_date });
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
}

export async function listRequests(req, res) {
  const { status, user_id } = req.query;
  const filters = {};
  if (status) filters.status = status;
  if (user_id) filters.user_id = user_id;

  const { data, error } = await getLeaveRequests(filters);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function getRequest(req, res) {
  const { id } = req.params;
  const { data, error } = await getLeaveRequestById(id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function setRequestStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  if (!ALLOWED.includes(status)) return res.status(400).json({ error: "Invalid status" });

  const { data, error } = await updateLeaveStatus(id, status);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
}

export async function removeRequest(req, res) {
  const { id } = req.params;
  const { error } = await deleteLeaveRequest(id);
  if (error) return res.status(400).json({ error: error.message });
  res.json({ success: true });
>>>>>>> 148882b1f7e7cee9fa004438dfe529cb8cdc98b5
}
