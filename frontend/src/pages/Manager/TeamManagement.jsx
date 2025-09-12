import React, { useEffect, useState } from "react";
import {getTeams, createTeam, addTeamMember, removeTeamMember, getUsers, assignTask, getTasksByTeam,
} from "../../api/MANAGER/teamApi";

const TeamManagement = () => {
  const [activeTab, setActiveTab] = useState("create"); // 👈 new state

  const [teams, setTeams] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);

  // For new team
  const [newTeamName, setNewTeamName] = useState("");
  const [newTeamDesc, setNewTeamDesc] = useState("");
  const [managerId, setManagerId] = useState("");

  // For members
  const [selectedUser, setSelectedUser] = useState("");

  // For tasks
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDue, setTaskDue] = useState("");
  const [teamTasks, setTeamTasks] = useState([]);

  useEffect(() => {
    fetchTeams();
    fetchUsers();
  }, []);

  const fetchTeams = async () => {
    try {
      const data = await getTeams();
      setTeams(data);
    } catch (err) {
      console.error("Error fetching teams:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const fetchTeamTasks = async (teamId) => {
    try {
      const data = await getTasksByTeam(teamId);
      setTeamTasks(data);
    } catch (err) {
      console.error("Error fetching team tasks:", err);
    }
  };

  const handleCreateTeam = async () => {
    if (!newTeamName || !managerId)
      return alert("Enter team name and manager ID");
    try {
      await createTeam({
        name: newTeamName,
        description: newTeamDesc,
        manager_id: managerId,
      });
      setNewTeamName("");
      setNewTeamDesc("");
      setManagerId("");
      fetchTeams();
    } catch (err) {
      console.error("Error creating team:", err);
    }
  };

  const handleAddMember = async () => {
    if (!selectedTeam || !selectedUser) return;
    try {
      await addTeamMember(selectedTeam.id, selectedUser);
      setSelectedUser("");
      fetchTeams();
    } catch (err) {
      console.error("Error adding member:", err);
    }
  };

  const handleRemoveMember = async (userId) => {
    try {
      await removeTeamMember(selectedTeam.id, userId);
      fetchTeams();
    } catch (err) {
      console.error("Error removing member:", err);
    }
  };

  const handleAssignTask = async () => {
    if (!selectedTeam || !taskTitle) return;
    try {
      await assignTask({
        title: taskTitle,
        description: taskDesc,
        due_date: taskDue,
        team_id: selectedTeam.id,
      });
      setTaskTitle("");
      setTaskDesc("");
      setTaskDue("");
      fetchTeamTasks(selectedTeam.id);
    } catch (err) {
      console.error("Error assigning task:", err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded ${
            activeTab === "create"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Create Team
        </button>
        <button
          onClick={() => setActiveTab("view")}
          className={`px-4 py-2 rounded ${
            activeTab === "view"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          View Teams
        </button>
        <button
          onClick={() => setActiveTab("assign")}
          className={`px-4 py-2 rounded ${
            activeTab === "assign"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          Assign Task
        </button>
      </div>

      {/* Create New Team */}
      {activeTab === "create" && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-3">Create New Team</h2>
          <input
            type="text"
            placeholder="Team Name"
            value={newTeamName}
            onChange={(e) => setNewTeamName(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            placeholder="Description"
            value={newTeamDesc}
            onChange={(e) => setNewTeamDesc(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Manager ID"
            value={managerId}
            onChange={(e) => setManagerId(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleCreateTeam}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Create Team
          </button>
        </div>
      )}

      {/* View Teams */}
      {activeTab === "view" && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-3">Teams</h2>
          <ul className="space-y-2">
            {teams.map((team) => (
              <li
                key={team.id}
                className={`p-2 border rounded cursor-pointer ${
                  selectedTeam?.id === team.id ? "bg-blue-100" : ""
                }`}
                onClick={() => {
                  setSelectedTeam(team);
                  fetchTeamTasks(team.id);
                }}
              >
                <div className="font-semibold">{team.name}</div>
                <div className="text-sm text-gray-500">{team.description}</div>
                <div className="text-xs text-gray-400">
                  Manager ID: {team.manager_id}
                </div>
              </li>
            ))}
          </ul>

          {selectedTeam && (
            <div className="mt-4 space-y-4">
              {/* Members */}
              <div>
                <h3 className="font-semibold">Members</h3>
                <ul className="space-y-1">
                  {selectedTeam.members?.map((m) => (
                    <li key={m.user_id} className="flex justify-between">
                      <span>
                        {m.username} ({m.role})
                      </span>
                      <button
                        onClick={() => handleRemoveMember(m.user_id)}
                        className="text-red-600"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-2 flex space-x-2">
                  <select
                    value={selectedUser}
                    onChange={(e) => setSelectedUser(e.target.value)}
                    className="border p-2 rounded"
                  >
                    <option value="">Select User</option>
                    {users.map((u) => (
                      <option key={u.id} value={u.id}>
                        {u.username}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleAddMember}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Assign Task */}
      {activeTab === "assign" && selectedTeam && (
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-3">
            Assign Task to {selectedTeam.name}
          </h2>
          <input
            type="text"
            placeholder="Task Title"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            placeholder="Task Description"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="date"
            value={taskDue}
            onChange={(e) => setTaskDue(e.target.value)}
            className="border p-2 rounded w-full mb-2"
          />
          <button
            onClick={handleAssignTask}
            className="bg-purple-600 text-white px-3 py-2 rounded"
          >
            Assign Task
          </button>

          {/* Show tasks */}
          <h4 className="mt-4 font-semibold">Team Tasks</h4>
          <ul className="space-y-1">
            {teamTasks.map((t) => (
              <li key={t.id} className="border rounded p-2">
                <div className="font-medium">{t.title}</div>
                <div className="text-sm text-gray-600">{t.description}</div>
                <div className="text-xs text-gray-400">Due: {t.due_date}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TeamManagement;
