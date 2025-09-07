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
    
    //  <div className="bg-white rounded-2xl shadow-lg p-6">
    <>
     {role === "superadmin" && <SuperAdmin />}
          {role === "hr" && <HR />}
          {role === "manager" && <Manager />}
          {role === "employee" && <Employee />}</>
         
        // </div>
  );
};

export default Dashboard;
