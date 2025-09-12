import React, { useEffect, useState } from "react";
import { fetchSkills, createSkill, deleteSkill, fetchUsers } from "../../api/MANAGER/skillsApi";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ user_id: "", skill_name: "", proficiency: "Beginner" });

  const loadSkills = async () => {
    try {
      const data = await fetchSkills();
      setSkills(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const loadUsers = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadSkills();
    loadUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSkill(form);
      setForm({ user_id: "", skill_name: "", proficiency: "Beginner" });
      loadSkills();
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      loadSkills();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Skills Management</h1>

      <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded-md">
        <select
          name="user_id"
          value={form.user_id}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        >
          <option value="">Select Employee</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.username}</option>
          ))}
        </select>

        <input
          type="text"
          name="skill_name"
          placeholder="Skill Name"
          value={form.skill_name}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
          required
        />

        <select
          name="proficiency"
          value={form.proficiency}
          onChange={handleChange}
          className="border p-2 w-full mb-2"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Skill
        </button>
      </form>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Employee</th>
            <th className="border p-2">Skill</th>
            <th className="border p-2">Proficiency</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((s) => (
            <tr key={s.id}>
              <td className="border p-2">{s.user_id.username || s.user_id}</td>
              <td className="border p-2">{s.skill_name}</td>
              <td className="border p-2">{s.proficiency}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleDelete(s.id)}
                  className="bg-red-500 text-white p-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {skills.length === 0 && (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No skills found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Skills;
