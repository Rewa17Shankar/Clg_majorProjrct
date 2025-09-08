import { useState, useEffect } from "react";
import { getAllUsers, updateUserDesignation } from "../../api/userApi";
import { getAllDesignations } from "../../api/designationApi";

function Designation() {
  const [users, setUsers] = useState([]);
  const [designations, setDesignations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeRole, setActiveRole] = useState("All Users"); // Default: show all users

  useEffect(() => {
    fetchUsers();
    fetchDesignations();
  }, []);

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      // Ensure role_name is accessible, e.g., from nested roles
      const formattedUsers = data.map((u) => ({
        ...u,
        role_name: u.roles?.role_name || u.role_name || "Employee",
      }));
      setUsers(formattedUsers);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchDesignations = async () => {
    try {
      const data = await getAllDesignations();
      setDesignations(data);
    } catch (err) {
      console.error("Error fetching designations:", err);
    }
  };

  const handleDesignationChange = async (userId, designationId) => {
    try {
      await updateUserDesignation(userId, designationId);
      setUsers((prev) =>
        prev.map((u) =>
          u.id === userId ? { ...u, designationId } : u
        )
      );
      alert("Designation updated successfully ✅");
    } catch (err) {
      alert("Failed to update designation ❌");
      console.error(err);
    }
  };

  if (loading) return <p>Loading users...</p>;

  // Filter users by active role
  const filteredUsers =
    activeRole === "All Users"
      ? users
      : users.filter((u) => u.role_name.toLowerCase() === activeRole.toLowerCase());

  return (
    <div style={{ padding: "20px" }}>
      <h2>Manage User Designations</h2>

      {/* Role Tabs */}
      <div style={{ marginBottom: "20px" }}>
        {["All Users", "HR", "Manager", "Employee"].map((role) => (
          <button
            key={role}
            onClick={() => setActiveRole(role)}
            style={{
              marginRight: "10px",
              padding: "8px 16px",
              backgroundColor: activeRole === role ? "#007bff" : "#e0e0e0",
              color: activeRole === role ? "#fff" : "#000",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {role}
          </button>
        ))}
      </div>

      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th>User Name</th>
            <th>Email</th>
            <th>Current Designation</th>
            <th>Update Designation</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((u) => (
              <tr key={u.id}>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.designations?.title || "Not Assigned"}</td>
                <td>
                  <select
                    value={u.designationId || ""}
                    onChange={(e) =>
                      handleDesignationChange(u.id, e.target.value)
                    }
                  >
                    <option value="">Select Designation</option>
                    {designations.map((desg) => (
                      <option key={desg.id} value={desg.id}>
                        {desg.title} {desg.department_name ? `(${desg.department_name})` : ""}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No users found for this role.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Designation;
