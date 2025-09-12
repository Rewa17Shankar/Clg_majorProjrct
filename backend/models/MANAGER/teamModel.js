// backend/models/teamModel.js
import  supabase  from "../../config/supabaseClient.js";

/**
 * Get all teams with members
 */
export const getAllTeams = async () => {
  const { data: teams, error } = await supabase
    .from("teams")
    .select(`
      id, name, description, created_at,
      manager_id,
      team_members ( user_id, role, users (id, username, email) )
    `);

  if (error) throw error;

  // Restructure members
  return teams.map((team) => ({
    ...team,
    members: team.team_members.map((m) => ({
      user_id: m.user_id,
      role: m.role,
      username: m.users?.username,
      email: m.users?.email,
    })),
  }));
};

/**
 * Create a new team
 */
export const createTeam = async ({ name, description, manager_id }) => {
  const { data, error } = await supabase
    .from("teams")
    .insert([{ name, description, manager_id }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * Add team member
 */
export const addMember = async (teamId, userId, role = "Member") => {
  const { data, error } = await supabase
    .from("team_members")
    .insert([{ team_id: teamId, user_id: userId, role }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * Remove team member
 */
export const removeMember = async (teamId, userId) => {
  const { error } = await supabase
    .from("team_members")
    .delete()
    .eq("team_id", teamId)
    .eq("user_id", userId);

  if (error) throw error;
  return true;
};

/**
 * Assign task to team
 */
export const createTask = async ({ title, description, due_date, team_id, created_by }) => {
  const { data, error } = await supabase
    .from("tasks")
    .insert([{ title, description, due_date, team_id, created_by }])
    .select()
    .single();

  if (error) throw error;
  return data;
};

/**
 * Get tasks by team
 */
export const getTasksByTeam = async (teamId) => {
  const { data, error } = await supabase
    .from("tasks")
    .select("*")
    .eq("team_id", teamId)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
};

/**
 * Get all users (for member selection)
 */
export const getAllUsers = async () => {
  const { data, error } = await supabase.from("users").select("id, username, email");
  if (error) throw error;
  return data;
};
