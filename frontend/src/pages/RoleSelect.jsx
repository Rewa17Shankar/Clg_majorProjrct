import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useUser } from "@clerk/clerk-react"; 
import { useNavigate } from "react-router-dom";

const RoleSelect = () => {
  const { setRole, setUser } = useAuthContext();
  const { user: clerkUser } = useUser(); 
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (selectedRole) {
      setRole(selectedRole);
      setUser({
        username: clerkUser?.fullName || clerkUser?.primaryEmailAddress?.emailAddress,
      });

      if (selectedRole === "superadmin") {
        navigate("/admin"); // Clerk login for superadmin
      } else {
        navigate("/login"); // Custom login for other roles
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-[400px]">
        <h2 className="text-xl font-bold mb-2 text-gray-800">
          Hello, {clerkUser?.fullName || clerkUser?.primaryEmailAddress?.emailAddress || "Guest"} 👋
        </h2>
        <p className="text-gray-600 mb-6">Select your role to continue</p>

        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">-- Choose Role --</option>
          <option value="superadmin">Super Admin</option>
          <option value="hr">HR</option>
          <option value="manager">Manager</option>
          <option value="employee">Employee</option>
        </select>

        <button
          onClick={handleConfirm}
          disabled={!selectedRole}
          className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg transition disabled:bg-gray-300"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default RoleSelect;


