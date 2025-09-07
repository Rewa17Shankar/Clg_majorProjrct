// // import { useState } from "react";
// // import Attendance from "./Attendance";
// // import Departments from "./Department";
// // import Designations from "./Designations";
// // import Employees from "./Employees";
// // import Leaves from "./Leaves";
// // import Shifts from "./Shifts";

// // function HrDashboard() {
// //   const [activeTab, setActiveTab] = useState("departments");

// //   const renderContent = () => {
// //     switch (activeTab) {
// //       case "departments":
// //         return <Departments />;
// //       case "designations":
// //         return <Designations />;
// //       case "employees":
// //         return <Employees />;
// //       case "attendance":
// //         return <Attendance />;
// //       case "shifts":
// //         return <Shifts />;
// //       case "leaves":
// //         return <Leaves />;
// //       default:
// //         return <Departments />;
// //     }
// //   };

// //   return (
// //     <div className="flex h-screen">
// //       {/* Sidebar */}
// //       <div className="w-64 bg-gray-800 text-white p-4 space-y-2">
// //         <h2 className="text-xl font-bold mb-4">HR Dashboard</h2>
// //         <button
// //           onClick={() => setActiveTab("departments")}
// //           className={`block w-full text-left px-3 py-2 rounded ${
// //             activeTab === "departments" ? "bg-gray-600" : "hover:bg-gray-700"
// //           }`}
// //         >
// //           Departments
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("designations")}
// //           className={`block w-full text-left px-3 py-2 rounded ${
// //             activeTab === "designations" ? "bg-gray-600" : "hover:bg-gray-700"
// //           }`}
// //         >
// //           Designations
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("employees")}
// //           className={`block w-full text-left px-3 py-2 rounded ${
// //             activeTab === "employees" ? "bg-gray-600" : "hover:bg-gray-700"
// //           }`}
// //         >
// //           Employees
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("attendance")}
// //           className={`block w-full text-left px-3 py-2 rounded ${
// //             activeTab === "attendance" ? "bg-gray-600" : "hover:bg-gray-700"
// //           }`}
// //         >
// //           Attendance
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("shifts")}
// //           className={`block w-full text-left px-3 py-2 rounded ${
// //             activeTab === "shifts" ? "bg-gray-600" : "hover:bg-gray-700"
// //           }`}
// //         >
// //           Shifts
// //         </button>
// //         <button
// //           onClick={() => setActiveTab("leaves")}
// //           className={`block w-full text-left px-3 py-2 rounded ${
// //             activeTab === "leaves" ? "bg-gray-600" : "hover:bg-gray-700"
// //           }`}
// //         >
// //           Leaves
// //         </button>
// //       </div>

// //       {/* Main content */}
// //       <div className="flex-1 p-6 bg-gray-100 overflow-y-auto">
// //         {renderContent()}
// //       </div>
// //     </div>
// //   );
// // }

// // export default HrDashboard;




// import { useState } from "react";
// import {
//   Building2,
//   Briefcase,
//   Users,
//   CalendarCheck,
//   Clock,
//   Plane,
// } from "lucide-react"; // icons

// import Attendance from "./Attendance";
// import Departments from "./Department";
// import Designations from "./Designations";
// import Employees from "./Employees";
// import Leaves from "./Leaves";
// import Shifts from "./Shifts";

// function HrDashboard() {
//   const [activeTab, setActiveTab] = useState("departments");

//   const menuItems = [
//     { id: "departments", label: "Departments", icon: Building2, component: <Departments /> },
//     { id: "designations", label: "Designations", icon: Briefcase, component: <Designations /> },
//     { id: "employees", label: "Employees", icon: Users, component: <Employees /> },
//     { id: "attendance", label: "Attendance", icon: CalendarCheck, component: <Attendance /> },
//     { id: "shifts", label: "Shifts", icon: Clock, component: <Shifts /> },
//     { id: "leaves", label: "Leaves", icon: Plane, component: <Leaves /> },
//   ];

//   const renderContent = () => {
//     const current = menuItems.find((item) => item.id === activeTab);
//     return current ? current.component : <Departments />;
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-72 bg-white border-r shadow-sm flex flex-col">
//         <div className="px-6 py-4 border-b">
//           <h2 className="text-2xl font-bold text-gray-800">HR Dashboard</h2>
//           <p className="text-sm text-gray-500">Manage employees & operations</p>
//         </div>

//         <nav className="flex-1 p-4 space-y-1">
//           {menuItems.map(({ id, label, icon: Icon }) => (
//             <button
//               key={id}
//               onClick={() => setActiveTab(id)}
//               className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors
//                 ${
//                   activeTab === id
//                     ? "bg-blue-600 text-white shadow"
//                     : "text-gray-700 hover:bg-gray-100"
//                 }`}
//             >
//               <Icon className="w-5 h-5 mr-3" />
//               {label}
//             </button>
//           ))}
//         </nav>

//         {/* Footer / Logout */}
//         <div className="p-4 border-t">
//           <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition">
//             Logout
//           </button>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 p-8 overflow-y-auto">
//         {renderContent()}
//       </main>
//     </div>
//   );
// }

// export default HrDashboard;
