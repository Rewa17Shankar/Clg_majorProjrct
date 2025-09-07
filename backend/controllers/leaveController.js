// backend/controllers/leaveController.js
import {getLeaveTypes, createLeaveType, updateLeaveType, deleteLeaveType, createLeaveRequest,   getLeaveRequests, getLeaveRequestById, updateLeaveStatus, deleteLeaveRequest, } from "../models/leaveModel.js";

/** ---------- LEAVE TYPES ---------- **/

export async function listLeaveTypes(req, res) {
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
}

/** ---------- LEAVE REQUESTS ---------- **/

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
}
