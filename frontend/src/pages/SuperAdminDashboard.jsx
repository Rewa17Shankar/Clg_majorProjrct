// // frontend/src/pages/SuperAdmin.jsx
// import { useState, useEffect } from "react";
// import { addUser, getUserCounts } from "../api/userApi";

// function SuperAdmin() {
//   const [form, setForm] = useState({ name: "", email: "", role: "Employee", password: "" });
//   const [counts, setCounts] = useState({ HR: 0, Manager: 0, Employee: 0 });

//   useEffect(() => {
//     fetchCounts();
//   }, []);

//   const fetchCounts = async () => {
//     const res = await getUserCounts();
//     setCounts(res.data);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await addUser(form);
//     alert("User Added!");
//     fetchCounts();
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-800 p-6">
//         <h2 className="text-xl font-bold mb-6">SuperAdmin</h2>
//         <ul className="space-y-4">
//           <li>Dashboard</li>
//           <li>Add User</li>
//           <li>Manage Users</li>
//         </ul>
//       </aside>

//       {/* Main */}
//       <main className="flex-1 p-8">
//         <h1 className="text-3xl font-bold mb-6">SuperAdmin Dashboard</h1>

//         {/* Counts */}
//         <div className="grid grid-cols-3 gap-6 mb-10">
//           <div className="bg-gray-800 p-6 rounded-lg text-center">
//             <h2 className="text-2xl font-bold">{counts.HR}</h2>
//             <p>HR Users</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg text-center">
//             <h2 className="text-2xl font-bold">{counts.Manager}</h2>
//             <p>Managers</p>
//           </div>
//           <div className="bg-gray-800 p-6 rounded-lg text-center">
//             <h2 className="text-2xl font-bold">{counts.Employee}</h2>
//             <p>Employees</p>
//           </div>
//         </div>

//         {/* Add User Form */}
//         <div className="bg-gray-800 p-8 rounded-lg max-w-lg">
//           <h2 className="text-xl font-semibold mb-6">Add New User</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               placeholder="Full Name"
//               className="w-full px-4 py-2 rounded bg-gray-700 text-white"
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-4 py-2 rounded bg-gray-700 text-white"
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//             />
//             <select
//               className="w-full px-4 py-2 rounded bg-gray-700 text-white"
//               onChange={(e) => setForm({ ...form, role: e.target.value })}
//             >
//               <option>HR</option>
//               <option>Manager</option>
//               <option>Employee</option>
//             </select>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full px-4 py-2 rounded bg-gray-700 text-white"
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//             />
//             <button className="w-full bg-indigo-600 py-2 rounded">Add User</button>
//           </form>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default SuperAdmin;





// frontend/src/pages/SuperAdmin.jsx
import { useState, useEffect } from "react";
import {
  UserPlus,
  Users,
  LayoutDashboard,
  LogOut,
  UserCircle,
  Briefcase,
  Shield,
} from "lucide-react";
import { addUser, getUserCounts } from "../api/userApi";

const SuperAdmin = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [form, setForm] = useState({ name: "", email: "", role: "Employee", password: "" });
  const [counts, setCounts] = useState({ HR: 0, Manager: 0, Employee: 0 });

  useEffect(() => {
    fetchCounts();
  }, []);

  const fetchCounts = async () => {
    try {
      const res = await getUserCounts();
      setCounts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addUser(form);
    alert("User Added!");
    fetchCounts();
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">SuperAdmin</h2>
        <nav className="flex-1 space-y-3">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
              activeTab === "dashboard"
                ? "bg-gray-200 text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab("addUser")}
            className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
              activeTab === "addUser"
                ? "bg-gray-200 text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <UserPlus className="mr-2 h-5 w-5" />
            Add User
          </button>
          <button
            onClick={() => setActiveTab("manageUsers")}
            className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
              activeTab === "manageUsers"
                ? "bg-gray-200 text-black font-medium"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Users className="mr-2 h-5 w-5" />
            Manage Users
          </button>
        </nav>
        <button className="flex items-center px-4 py-2 mt-auto text-red-600 hover:bg-gray-100 rounded-lg">
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </button>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
          <div className="flex items-center gap-3">
            <UserCircle className="h-8 w-8 text-gray-500" />
            <span className="font-medium text-gray-800">SuperAdmin</span>
          </div>
        </header>

        {/* Content */}
        <div className="p-8 flex-1 overflow-y-auto">
          {activeTab === "dashboard" && (
            <div>
              <h1 className="text-3xl font-semibold mb-2">
                Welcome back, SuperAdmin 👋
              </h1>
              <p className="text-gray-600 mb-6">
                Manage HR, Managers, and Employees here.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-xl text-center">
                  <Shield className="h-8 w-8 text-gray-700 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold text-gray-900">{counts.HR}</h2>
                  <p className="text-gray-500">HR Users</p>
                </div>
                <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-xl text-center">
                  <Briefcase className="h-8 w-8 text-gray-700 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold text-gray-900">{counts.Manager}</h2>
                  <p className="text-gray-500">Managers</p>
                </div>
                <div className="bg-white shadow hover:shadow-lg transition p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 text-gray-700 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold text-gray-900">{counts.Employee}</h2>
                  <p className="text-gray-500">Employees</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === "addUser" && (
            <div className="bg-white shadow-md p-8 rounded-xl max-w-lg">
              <h2 className="text-2xl font-semibold mb-6">Add New User</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-gray-300"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-gray-300"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <select
                  className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-gray-300"
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                >
                  <option>HR</option>
                  <option>Manager</option>
                  <option>Employee</option>
                </select>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-gray-300"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Create User
                </button>
              </form>
            </div>
          )}

          {activeTab === "manageUsers" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>
              <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="py-3 px-4 text-left">Name</th>
                    <th className="py-3 px-4 text-left">Email</th>
                    <th className="py-3 px-4 text-left">Role</th>
                    <th className="py-3 px-4 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">John Doe</td>
                    <td className="py-3 px-4">john@example.com</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                        Manager
                      </span>
                    </td>
                    <td className="py-3 px-4 space-x-3">
                      <button className="text-black hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                  <tr className="border-t hover:bg-gray-50">
                    <td className="py-3 px-4">Jane Smith</td>
                    <td className="py-3 px-4">jane@example.com</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                        HR
                      </span>
                    </td>
                    <td className="py-3 px-4 space-x-3">
                      <button className="text-black hover:underline">
                        Edit
                      </button>
                      <button className="text-red-600 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default SuperAdmin;
