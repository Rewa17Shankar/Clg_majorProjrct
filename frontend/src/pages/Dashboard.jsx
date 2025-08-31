import { useAuthContext } from "../context/AuthContext";
import SuperAdmin from "./SuperAdmin";
import HR from "./HR";
import Manager from "./Manager";
import Employee from "./Employee";

const Dashboard = () => {
  const { role, user } = useAuthContext();

  if (!role) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-center text-lg font-medium text-gray-700 bg-white px-6 py-4 rounded-xl shadow-md">
          ⚠️ No role selected!
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome, <span className="text-indigo-600">{user?.username}</span> 👋
          </h2>
          <span className="px-4 py-2 text-sm font-medium bg-indigo-100 text-indigo-700 rounded-full capitalize">
            {role}
          </span>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          {role === "superadmin" && <SuperAdmin />}
          {role === "hr" && <HR />}
          {role === "manager" && <Manager />}
          {role === "employee" && <Employee />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
