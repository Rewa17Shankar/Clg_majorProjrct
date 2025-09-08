
import { useState, useEffect } from "react";
import { getDepartments } from "../../api/departmentApi";
import { getAllUsers, updateUserDepartment } from "../../api/userApi";

function Departments() {
  const [departments, setDepartments] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeRole, setActiveRole] = useState("All"); // filter

  useEffect(() => {
    fetchDepartments();
    fetchUsers();
  }, []);

  const fetchDepartments = async () => {
    const data = await getDepartments();
    setDepartments(data);
  };

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  const handleDeptChange = async (userId, departmentId) => {
    await updateUserDepartment(userId, departmentId);
    fetchUsers(); // refresh after update
    alert("✅ Department updated!");
  };

  // Filter users by role
  const filteredUsers =
    activeRole === "All"
      ? users
      : users.filter((u) => u.role?.toLowerCase() === activeRole.toLowerCase());

  return (
    <div className="p-6 bg-white shadow rounded-xl">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">
        Department Management
      </h2>

      {/* Role Filter Tabs */}
      <div className="flex gap-4 mb-6">
        {["All", "Manager", "Employee"].map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            className={`px-4 py-2 rounded-lg ${
              activeRole === role
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {role}s
          </button>
        ))}
      </div>

      {/* Employees Table */}
      <h3 className="text-lg font-medium mb-2">
        {activeRole === "All" ? "All Users" : `${activeRole}s`} & Departments
      </h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">ID</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Current Department</th>
            <th className="border p-2">Update Department</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (
            <tr key={u.id}>
              <td className="border p-2">{u.id}</td>
              <td className="border p-2">{u.username}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2">{u.department_id || "None"}</td>
              <td className="border p-2">
                <select
                  value={u.department_id || ""}
                  onChange={(e) => handleDeptChange(u.id, e.target.value)}
                  className="border rounded p-1"
                >
                  <option value="">-- Select --</option>
                  {departments.map((d) => (
                    <option key={d.id} value={d.id}>
                      { d.name}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departments;
