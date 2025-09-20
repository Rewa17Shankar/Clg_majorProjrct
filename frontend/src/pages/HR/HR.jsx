
// frontend/src/pages/HR.jsx
import { useState, useEffect } from "react";
import { Users, Building2, Briefcase, CalendarCheck, Clock, Plane, UserPlus, Wallet, LogOut, UserCircle, FileText } from "lucide-react"; 
import { useNavigate, useLocation } from "react-router-dom";
import Employees from "./Employees"; 
import Departments from "./Departments";
import Designations from "./Designations";
import Attendance from "../Common/Attendance";
import Resignations from "./Resignations"; 
import Leaves from "./Leaves";
import Recruitment from "./Recruitment";
import Payroll from "./Payroll";

const HR = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get current active tab from URL path
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === "/hr") return "employees"; // default
    return path.split("/hr/")[1] || "employees";
  };

  const activeTab = getCurrentTab();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      fetch(`http://localhost:5000/api/users/${userId}/profile`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.error("Error fetching user:", err));
    }

    // Redirect /hr to /hr/employees
    if (location.pathname === "/hr") {
      navigate("/hr/employees", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    sessionStorage.clear();
    navigate("/login");
  };

  const handleTabClick = (tabKey) => {
    navigate(`/hr/${tabKey}`);
  };

  const menuItems = [
    { key: "employees", label: "Employees Management", icon: Users },
    { key: "departments", label: "Departments", icon: Building2 },
    { key: "designations", label: "Designations", icon: Briefcase },
    { key: "attendance", label: "Attendance", icon: CalendarCheck },
    { key: "leaves", label: "Leave Management", icon: Plane },
    { key: "recruitment", label: "Recruitment & Hiring", icon: UserPlus },
    { key: "payroll", label: "Payroll & Salary", icon: Wallet },
    { key: "resignations", label: "Resignations", icon: FileText },
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
              onClick={() => handleTabClick(key)}
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
          {activeTab === "resignations" && <Resignations />}
        </div>
      </main>
    </div>
  );
};

export default HR;