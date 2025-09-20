// // frontend/src/pages/SuperAdminDashboard.jsx
// import { useState, useEffect } from "react";
// import {LayoutDashboard, UserPlus, Users, LogOut, UserCircle, Briefcase, Shield, } from "lucide-react";
// import {addUser, getUserCounts, getAllUsers, resetUserPassword, } from "../../api/userApi";
// import {getDepartments, getDesignationsByDept, } from "../../api/HR/departmentApi"; // ✅ new imports
// import { useNavigate } from "react-router-dom";

// function SuperAdminDashboard() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     role: "Employee",
//     password: "",
//     department_id: "",
//     designation_id: "",
//     date_of_joining: "",
//   });

//   const [counts, setCounts] = useState({ HR: 0, Manager: 0, Employee: 0 });
//   const [activeTab, setActiveTab] = useState("dashboard");
//   const [users, setUsers] = useState([]);
//   const [selectedRole, setSelectedRole] = useState("HR");

//   // ✅ new state
//   const [departments, setDepartments] = useState([]);
//   const [designations, setDesignations] = useState([]);

//   const navigate = useNavigate();

//   // ✅ Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     sessionStorage.clear();
//     navigate("/");
//   };

//   // ✅ Fetch user counts
//   const fetchCounts = async () => {
//     try {
//       const data = await getUserCounts();
//       setCounts(data);
//     } catch (error) {
//       console.error("Error fetching counts:", error);
//     }
//   };

//   // ✅ Fetch all users
//   const fetchUsers = async () => {
//     try {
//       const data = await getAllUsers();
//       setUsers(data);
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   };

//   // ✅ Fetch departments initially
//   useEffect(() => {
//     fetchCounts();
//     fetchUsers();
//     getDepartments().then(setDepartments);
//   }, []);

//   // ✅ handle department change → fetch designations
//   const handleDepartmentChange = async (deptId) => {
//     setForm({ ...form, department_id: deptId, designation_id: "" });
//     const data = await getDesignationsByDept(deptId);
//     setDesignations(data);
//   };

//   // ✅ Add User
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await addUser({
//         username: form.name,
//         email: form.email,
//         password: "welcome@123",
//         role_name: form.role,
//         department_id: form.department_id,
//         designation_id: form.designation_id,
//         date_of_joining: form.date_of_joining,
//       });
//       alert("✅ User added successfully");
//       setForm({
//         name: "",
//         email: "",
//         role: "Employee",
//         password: "",
//         department_id: "",
//         designation_id: "",
//         date_of_joining: "",
//       });
//       fetchCounts();
//       fetchUsers();
//     } catch (err) {
//       console.error("Error adding user:", err);
//       alert("❌ Failed to add user");
//     }
//   };

//   return (
//     <div className="flex h-screen w-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
//         <h2 className="text-2xl font-bold text-gray-800 mb-8">SuperAdmin</h2>
//         <nav className="flex-1 space-y-3">
//           <button
//             onClick={() => setActiveTab("dashboard")}
//             className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//               activeTab === "dashboard"
//                 ? "bg-blue-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             <LayoutDashboard className="mr-2 h-5 w-5" />
//             Dashboard
//           </button>
//           <button
//             onClick={() => setActiveTab("addUser")}
//             className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//               activeTab === "addUser"
//                 ? "bg-blue-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             <UserPlus className="mr-2 h-5 w-5" />
//             Add User
//           </button>
//           <button
//             onClick={() => setActiveTab("manageUsers")}
//             className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//               activeTab === "manageUsers"
//                 ? "bg-blue-500 text-white"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             <Users className="mr-2 h-5 w-5" />
//             Manage Users
//           </button>
//         </nav>

//         <button
//           onClick={handleLogout}
//           className="flex items-center px-4 py-2 mt-auto text-red-600 hover:bg-gray-100 rounded-lg"
//         >
//           <LogOut className="mr-2 h-5 w-5" />
//           Logout
//         </button>
//       </aside>

//       {/* Main Section */}
//       <main className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
//           <h1 className="text-lg font-semibold text-gray-800">Admin Panel</h1>
//           <div className="flex items-center gap-3">
//             <UserCircle className="h-8 w-8 text-gray-500" />
//             <span className="font-medium text-gray-800">SuperAdmin</span>
//           </div>
//         </header>

//         {/* Content */}
//         <div className="p-8 flex-1 overflow-y-auto">
//           {/* Dashboard */}
//           {activeTab === "dashboard" && (
//             <div>
//               <h1 className="text-3xl font-semibold mb-2">
//                 Welcome back, SuperAdmin 👋
//               </h1>
//               <p className="text-gray-600 mb-6">
//                 Manage HR, Managers, and Employees here.
//               </p>

//               <div className="grid grid-cols-3 gap-6">
//                 <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow p-6 rounded-xl text-center">
//                   <Shield className="h-8 w-8 mx-auto mb-2" />
//                   <h2 className="text-2xl font-bold">{counts.HR}</h2>
//                   <p>HR Users</p>
//                 </div>
//                 <div className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow p-6 rounded-xl text-center">
//                   <Briefcase className="h-8 w-8 mx-auto mb-2" />
//                   <h2 className="text-2xl font-bold">{counts.Manager}</h2>
//                   <p>Managers</p>
//                 </div>
//                 <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow p-6 rounded-xl text-center">
//                   <Users className="h-8 w-8 mx-auto mb-2" />
//                   <h2 className="text-2xl font-bold">{counts.Employee}</h2>
//                   <p>Employees</p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Add User */}
//           {activeTab === "addUser" && (
//             <div className="bg-white shadow-md p-8 rounded-xl max-w-lg">
//               <h2 className="text-2xl font-semibold mb-6">Add New User</h2>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   required
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   required
//                 />
//                 <select
//                   className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
//                   value={form.role}
//                   onChange={(e) => setForm({ ...form, role: e.target.value })}
//                   required
//                 >
//                   <option value="HR">HR</option>
//                   <option value="Manager">Manager</option>
//                   <option value="Employee">Employee</option>
//                 </select>

//                 {/* ✅ Department dropdown */}
//                 <select
//                   value={form.department_id}
//                   onChange={(e) => handleDepartmentChange(e.target.value)}
//                   className="w-full border rounded-lg px-4 py-2"
//                 >
//                   <option value="">Select Department</option>
//                   {departments.map((d) => (
//                     <option key={d.id} value={d.id}>
//                       {d.name}
//                     </option>
//                   ))}
//                 </select>

//                 {/* ✅ Designation dropdown */}
//                 <select
//                   value={form.designation_id}
//                   onChange={(e) =>
//                     setForm({ ...form, designation_id: e.target.value })
//                   }
//                   className="w-full border rounded-lg px-4 py-2"
//                   disabled={!form.department_id}
//                 >
//                   <option value="">Select Designation</option>
//                   {designations.map((d) => (
//                     <option key={d.id} value={d.id}>
//                       {d.title}
//                     </option>
//                   ))}
//                 </select>

//                 {/* ✅ Date of Joining */}
//                 <input
//                   type="date"
//                   value={form.date_of_joining}
//                   onChange={(e) =>
//                     setForm({ ...form, date_of_joining: e.target.value })
//                   }
//                   className="w-full border rounded-lg px-4 py-2"
//                 />

//                 <input
//                   type="password"
//                   placeholder="Password"
//                   className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
//                   value={`welcome@123`}
//                   disabled
//                 />
//                 <button
//                   type="submit"
//                   className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Create User
//                 </button>
//               </form>
//             </div>
//           )}

//           {/* Manage Users stays the same */}
//           {activeTab === "manageUsers" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

//               {/* Role Tabs */}
//               <div className="flex space-x-4 mb-6">
//                 {["HR", "Manager", "Employee"].map((role) => (
//                   <button
//                     key={role}
//                     onClick={() => setSelectedRole(role)}
//                     className={`px-4 py-2 rounded-lg font-medium transition ${
//                       selectedRole === role
//                         ? "bg-blue-600 text-white shadow-md"
//                         : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//                     }`}
//                   >
//                     {role}
//                   </button>
//                 ))}
//               </div>

//               {/* User Table */}
//               <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">
//                 <thead className="bg-gray-100 text-gray-600">
//                   <tr>
//                   <th className="py-3 px-4 text-left">ID</th>
//                   <th className="py-3 px-4 text-left">Name</th>
//                   <th className="py-3 px-4 text-left">Email</th>
//                   <th className="py-3 px-4 text-left">Role</th>
//                   <th className="py-3 px-4 text-left">Must Reset</th> {/* ✅ New column */}
//                   <th className="py-3 px-4 text-left">Action</th>
//                   </tr>
//                 </thead>
//                  <tbody>
//                   {users
//                     .filter((user) => user.role === selectedRole)
//                     .map((user) => (
//                       <tr key={user.id} className="border-t hover:bg-gray-50">
//                         <td className="py-3 px-4">{user.id}</td>
//                         <td className="py-3 px-4">{user.name}</td>
//                         <td className="py-3 px-4">{user.email}</td>
//                         <td className="py-3 px-4">
//                           <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
//                             {user.role}
//                           </span>
//                         </td>
//                         <td className="py-3 px-4">
//                           {user.must_reset ? (
//                             <span className="text-red-600 font-medium">True</span>
//                           ) : (
//                             <span className="text-green-600 font-medium">False</span>
//                           )}
//                         </td>
//                         <td className="py-3 px-4 space-x-3">
//                           <button className="text-blue-600 hover:underline">Edit</button>
//                           <button className="text-red-600 hover:underline">Delete</button>
//                           {/* ✅ Reset password button */}
//                           <button
//                             className="text-orange-600 hover:underline"
//                             onClick={async () => {
//                                 try {
//                                   const res = await resetUserPassword(user.id);
//                                   alert(res.message); // "Password reset enforced successfully"
//                                   // ✅ update local state instantly
//                                   setUsers((prev) =>
//                                     prev.map((u) => (u.id === user.id ? res.user : u))
//                                   );
//                                 } catch (err) {
//                                   alert(err.error || "Failed to reset password");
//                                 }
//                               }}
//                           >
//                             Reset Password
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }

// export default SuperAdminDashboard;



// Enhanced SuperAdminDashboard.jsx with Salary Management
import { useState, useEffect } from "react";
import { LayoutDashboard, UserPlus, Users, LogOut, UserCircle, Briefcase, Shield, DollarSign, Edit } from "lucide-react";
import { addUser, getUserCounts, getAllUsers, resetUserPassword, updateUserSalary } from "../../api/userApi";
import { getDepartments, getDesignationsByDept } from "../../api/HR/departmentApi";
import { useNavigate } from "react-router-dom";

function SuperAdminDashboard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "Employee",
    password: "",
    department_id: "",
    designation_id: "",
    date_of_joining: "",
    base_salary: "", // Added salary field
  });

  const [counts, setCounts] = useState({ HR: 0, Manager: 0, Employee: 0 });
  const [activeTab, setActiveTab] = useState("dashboard");
  const [users, setUsers] = useState([]);
  const [selectedRole, setSelectedRole] = useState("HR");

  // Salary management states
  const [editingSalary, setEditingSalary] = useState(null);
  const [newSalary, setNewSalary] = useState("");

  const [departments, setDepartments] = useState([]);
  const [designations, setDesignations] = useState([]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    sessionStorage.clear();
    navigate("/");
  };

  const fetchCounts = async () => {
    try {
      const data = await getUserCounts();
      setCounts(data);
    } catch (error) {
      console.error("Error fetching counts:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchCounts();
    fetchUsers();
    getDepartments().then(setDepartments);
  }, []);

  const handleDepartmentChange = async (deptId) => {
    setForm({ ...form, department_id: deptId, designation_id: "" });
    const data = await getDesignationsByDept(deptId);
    setDesignations(data);
  };

  // Enhanced form submission with salary
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        username: form.name,
        email: form.email,
        password: "welcome@123",
        role_name: form.role,
        department_id: form.department_id,
        designation_id: form.designation_id,
        date_of_joining: form.date_of_joining,
        base_salary: parseFloat(form.base_salary) || 0, // Include salary
      };

      await addUser(userData);
      alert("User added successfully with salary information");
      
      setForm({
        name: "",
        email: "",
        role: "Employee",
        password: "",
        department_id: "",
        designation_id: "",
        date_of_joining: "",
        base_salary: "",
      });
      
      fetchCounts();
      fetchUsers();
    } catch (err) {
      console.error("Error adding user:", err);
      alert("Failed to add user: " + (err.error || "Unknown error"));
    }
  };

  // Handle salary update
  const handleSalaryUpdate = async (userId) => {
    try {
      const salary = parseFloat(newSalary);
      if (isNaN(salary) || salary < 0) {
        alert("Please enter a valid positive salary amount");
        return;
      }

      await updateUserSalary(userId, salary);
      alert("Salary updated successfully");
      
      // Update local state
      setUsers(prev => prev.map(user => 
        user.id === userId ? { ...user, base_salary: salary } : user
      ));
      
      setEditingSalary(null);
      setNewSalary("");
    } catch (err) {
      console.error("Error updating salary:", err);
      alert("Failed to update salary: " + (err.error || "Unknown error"));
    }
  };

  // Format currency for display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount || 0);
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
                ? "bg-blue-500 text-white"
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
                ? "bg-blue-500 text-white"
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
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            <Users className="mr-2 h-5 w-5" />
            Manage Users
          </button>
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 mt-auto text-red-600 hover:bg-gray-100 rounded-lg"
        >
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
          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div>
              <h1 className="text-3xl font-semibold mb-2">
                Welcome back, SuperAdmin
              </h1>
              <p className="text-gray-600 mb-6">
                Manage HR, Managers, and Employees here.
              </p>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow p-6 rounded-xl text-center">
                  <Shield className="h-8 w-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">{counts.HR}</h2>
                  <p>HR Users</p>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-700 text-white shadow p-6 rounded-xl text-center">
                  <Briefcase className="h-8 w-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">{counts.Manager}</h2>
                  <p>Managers</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow p-6 rounded-xl text-center">
                  <Users className="h-8 w-8 mx-auto mb-2" />
                  <h2 className="text-2xl font-bold">{counts.Employee}</h2>
                  <p>Employees</p>
                </div>
              </div>
            </div>
          )}

          {/* Add User with Salary */}
          {activeTab === "addUser" && (
            <div className="bg-white shadow-md p-8 rounded-xl max-w-2xl">
              <h2 className="text-2xl font-semibold mb-6 flex items-center">
                <UserPlus className="mr-2 h-6 w-6" />
                Add New User
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    className="w-full border rounded-lg px-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    required
                  >
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Employee">Employee</option>
                  </select>

                  {/* Salary Input */}
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      placeholder="Base Salary (INR)"
                      min="0"
                      step="1000"
                      className="w-full border rounded-lg pl-10 pr-4 py-2 shadow-sm focus:ring focus:ring-blue-300"
                      value={form.base_salary}
                      onChange={(e) => setForm({ ...form, base_salary: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <select
                    value={form.department_id}
                    onChange={(e) => handleDepartmentChange(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2"
                  >
                    <option value="">Select Department</option>
                    {departments.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.name}
                      </option>
                    ))}
                  </select>

                  <select
                    value={form.designation_id}
                    onChange={(e) =>
                      setForm({ ...form, designation_id: e.target.value })
                    }
                    className="w-full border rounded-lg px-4 py-2"
                    disabled={!form.department_id}
                  >
                    <option value="">Select Designation</option>
                    {designations.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.title}
                      </option>
                    ))}
                  </select>
                </div>

                <input
                  type="date"
                  value={form.date_of_joining}
                  onChange={(e) =>
                    setForm({ ...form, date_of_joining: e.target.value })
                  }
                  className="w-full border rounded-lg px-4 py-2"
                />

                <input
                  type="password"
                  placeholder="Default Password: welcome@123"
                  className="w-full border rounded-lg px-4 py-2 shadow-sm bg-gray-50"
                  value="welcome@123"
                  disabled
                />

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition font-medium"
                >
                  Create User with Salary
                </button>
              </form>
            </div>
          )}

          {/* Enhanced Manage Users with Salary */}
          {activeTab === "manageUsers" && (
            <div>
              <h2 className="text-2xl font-semibold mb-6">Manage Users</h2>

              {/* Role Tabs */}
              <div className="flex space-x-4 mb-6">
                {["HR", "Manager", "Employee"].map((role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRole(role)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedRole === role
                        ? "bg-blue-600 text-white shadow-md"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              {/* User Table with Salary */}
              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr>
                      <th className="py-3 px-4 text-left">ID</th>
                      <th className="py-3 px-4 text-left">Name</th>
                      <th className="py-3 px-4 text-left">Email</th>
                      <th className="py-3 px-4 text-left">Role</th>
                      <th className="py-3 px-4 text-left">Salary</th>
                      <th className="py-3 px-4 text-left">Must Reset</th>
                      <th className="py-3 px-4 text-left">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users
                      .filter((user) => user.role === selectedRole)
                      .map((user) => (
                        <tr key={user.id} className="border-t hover:bg-gray-50">
                          <td className="py-3 px-4">{user.id}</td>
                          <td className="py-3 px-4">{user.name}</td>
                          <td className="py-3 px-4">{user.email}</td>
                          <td className="py-3 px-4">
                            <span className="px-2 py-1 text-xs font-semibold bg-gray-200 text-gray-800 rounded-full">
                              {user.role}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {editingSalary === user.id ? (
                              <div className="flex items-center space-x-2">
                                <input
                                  type="number"
                                  value={newSalary}
                                  onChange={(e) => setNewSalary(e.target.value)}
                                  className="w-24 border rounded px-2 py-1 text-sm"
                                  placeholder="Salary"
                                />
                                <button
                                  onClick={() => handleSalaryUpdate(user.id)}
                                  className="text-green-600 hover:underline text-sm"
                                >
                                  Save
                                </button>
                                <button
                                  onClick={() => {
                                    setEditingSalary(null);
                                    setNewSalary("");
                                  }}
                                  className="text-red-600 hover:underline text-sm"
                                >
                                  Cancel
                                </button>
                              </div>
                            ) : (
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-green-600">
                                  {formatCurrency(user.base_salary)}
                                </span>
                                <button
                                  onClick={() => {
                                    setEditingSalary(user.id);
                                    setNewSalary(user.base_salary?.toString() || "");
                                  }}
                                  className="text-blue-600 hover:bg-blue-100 p-1 rounded"
                                >
                                  <Edit className="h-4 w-4" />
                                </button>
                              </div>
                            )}
                          </td>
                          <td className="py-3 px-4">
                            {user.must_reset ? (
                              <span className="text-red-600 font-medium">True</span>
                            ) : (
                              <span className="text-green-600 font-medium">False</span>
                            )}
                          </td>
                          <td className="py-3 px-4 space-x-3">
                            <button className="text-blue-600 hover:underline">Edit</button>
                            <button className="text-red-600 hover:underline">Delete</button>
                            <button
                              className="text-orange-600 hover:underline"
                              onClick={async () => {
                                try {
                                  const res = await resetUserPassword(user.id);
                                  alert(res.message);
                                  setUsers((prev) =>
                                    prev.map((u) => (u.id === user.id ? res.user : u))
                                  );
                                } catch (err) {
                                  alert(err.error || "Failed to reset password");
                                }
                              }}
                            >
                              Reset Password
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default SuperAdminDashboard;