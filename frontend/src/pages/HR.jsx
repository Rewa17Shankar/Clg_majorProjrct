// // frontend/src/pages/HR.jsx
// import { useState, useEffect } from "react";
// import {  Users, Building2, Briefcase, CalendarCheck, Clock, Plane, UserPlus, Wallet, LogOut, UserCircle,} from "lucide-react";
// import { useNavigate, useLocation } from "react-router-dom";
// import Employees from "./Employees"; 
// import Departments from "./Departments";
// import Designations from "./Designations";
// import Attendance from "./Attendance";
// // import Shifts from "./Shifts";
// import Resignations from "./Resignations";
// import Leaves from "./Leaves";
// import Recruitment from "./Recruitment";
// import Payroll from "./Payroll";



// const HR = () => {
//   const [user, setUser] = useState(null);
//   const [activeTab, setActiveTab] = useState("employees"); // ✅ default tab
//   const navigate = useNavigate();
//   const location = useLocation();

//   // // ✅ Redirect /hr → /hr/employees on page load or refresh
//   // useEffect(() => {
//   //   if (location.pathname === "/hr") {
//   //     navigate("/hr/employees", { replace: true });
//   //   }
//   // }, [location.pathname, navigate]);

//   // Fetch user details
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (userId) {
//       fetch(`http://localhost:5000/api/users/${userId}/profile`)
//         .then((res) => res.json())
//         .then((data) => setUser(data))
//         .catch((err) => console.error("Error fetching user:", err));
//     }
//   }, []);

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     sessionStorage.clear();
//     navigate("/login");
//   };

//   const menuItems = [
//     { key: "employees", label: "Employees Management", icon: Users },
//     { key: "departments", label: "Departments", icon: Building2 },
//     { key: "designations", label: "Designations", icon: Briefcase },
//     { key: "attendance", label: "Attendance", icon: CalendarCheck },
//     // { key: "shifts", label: "Shifts", icon: Clock },
//     { key: "leaves", label: "Leave Management", icon: Plane },
//     { key: "recruitment", label: "Recruitment & Hiring", icon: UserPlus },
//     { key: "payroll", label: "Payroll & Salary", icon: Wallet },
//     {key : "resignations", label: "Resignations", icon: XX},
//   ];

//   return (
//     <div className="flex h-screen w-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
//         <h2 className="text-2xl font-bold text-blue-600 mb-8">HR Dashboard</h2>
//         <nav className="flex-1 space-y-3">
//           {menuItems.map(({ key, label, icon: Icon }) => (
//             <button
//               key={key}
//               onClick={() => setActiveTab(key)}
//               className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
//                 activeTab === key
//                   ? "bg-blue-600 text-white"
//                   : "text-gray-700 hover:bg-gray-100"
//               }`}
//             >
//               <Icon className="mr-2 h-5 w-5" />
//               {label}
//             </button>
//           ))}
//         </nav>

//         {/* ✅ Logout */}
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
//           <h1 className="text-lg font-semibold text-gray-800">HR Panel</h1>
//           <div className="flex items-center gap-3">
//             <UserCircle className="h-8 w-8 text-gray-500" />
//             <span className="font-medium text-gray-800">
//               {user?.username || "HR"}
//             </span>
//           </div>
//         </header>

//         {/* Content Area */}
//         <div className="p-8 flex-1 overflow-y-auto">
//           {activeTab === "employees" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">
//                 Employees Management
//               </h2>
//               <Employees />
//             </div>
//           )}

//           {activeTab === "departments" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Departments</h2>
//               <Departments/>
//             </div>
//           )}

//           {activeTab === "designations" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Designations</h2>
//              <Designations/>
//             </div>
//           )}

//           {activeTab === "attendance" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
//               <Attendance/>
//             </div>
//           )}

//           {/* {activeTab === "shifts" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Shifts</h2>
//               <Shifts/>
//             </div>
//           )} */}

//           {activeTab === "leaves" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Leave Management</h2>
//               <Leaves/>
//             </div>
//           )}

//           {activeTab === "recruitment" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">
//                 Recruitment & Hiring
//               </h2>
//               <p className="text-gray-600">Manage hiring process here.</p>
//               <Recruitment/>
//             </div>
//           )}

//           {activeTab === "payroll" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Payroll & Salary</h2>
//               <p className="text-gray-600">
//                 Manage salary and payroll information here.
//               </p>
//               <Payroll/>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HR;



// frontend/src/pages/HR.jsx
import { useState, useEffect } from "react";
import { Users, Building2, Briefcase, CalendarCheck, Clock, Plane, UserPlus, Wallet, LogOut, UserCircle, FileText } from "lucide-react"; 
import { useNavigate, useLocation } from "react-router-dom";
import Employees from "./Employees"; 
import Departments from "./Departments";
import Designations from "./Designations";
import Attendance from "./Attendance";
import Resignations from "./Resignations"; 
import Leaves from "./Leaves";
import Recruitment from "./Recruitment";
import Payroll from "./Payroll";

const HR = () => {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("employees");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`http://localhost:5000/api/users/${userId}/profile`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("Error fetching user:", err));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    sessionStorage.clear();
    navigate("/login");
  };

  const menuItems = [
    { key: "employees", label: "Employees Management", icon: Users },
    { key: "departments", label: "Departments", icon: Building2 },
    { key: "designations", label: "Designations", icon: Briefcase },
    { key: "attendance", label: "Attendance", icon: CalendarCheck },
    // { key: "shifts", label: "Shifts", icon: Clock },
    { key: "leaves", label: "Leave Management", icon: Plane },
    { key: "recruitment", label: "Recruitment & Hiring", icon: UserPlus },
    { key: "payroll", label: "Payroll & Salary", icon: Wallet },
    { key: "resignations", label: "Resignations", icon: FileText }, // ✅ added Resignations
  ];

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">HR Dashboard</h2>
        <nav className="flex-1 space-y-3">
          {menuItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center w-full px-4 py-2 rounded-lg transition ${
                activeTab === key
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="mr-2 h-5 w-5" />
              {label}
            </button>
          ))}
        </nav>

        {/* Logout */}
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
          <h1 className="text-lg font-semibold text-gray-800">HR Panel</h1>
          <div className="flex items-center gap-3">
            <UserCircle className="h-8 w-8 text-gray-500" />
            <span className="font-medium text-gray-800">
              {user?.username || "HR"}
            </span>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1 overflow-y-auto">
          {activeTab === "employees" && <Employees />}
          {activeTab === "departments" && <Departments />}
          {activeTab === "designations" && <Designations />}
          {activeTab === "attendance" && <Attendance />}
          {activeTab === "leaves" && <Leaves />}
          {activeTab === "recruitment" && <Recruitment />}
          {activeTab === "payroll" && <Payroll />}
          {activeTab === "resignations" && <Resignations />} {/* ✅ render Resignations */}
        </div>
      </main>
    </div>
  );
};

export default HR;
