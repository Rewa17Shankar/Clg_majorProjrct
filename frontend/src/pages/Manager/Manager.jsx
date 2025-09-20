

import { useState, useEffect } from "react";
import {
  Users, CalendarCheck, BarChart2, Target, BookOpen, Award, Package, 
  Megaphone, MessageSquare, Video, LogOut, UserCircle
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

import TeamManagement from "./TeamManagement";
import Attendance from "../Common/Attendance";
import Performance from "./Performance";
import GoalsTasks from "./GoalsTasks";
import TrainingDevelopment from "./TrainingDevelopment";
import Skills from "./Skills";
import Assets from "./Assets";
import Announcements from "./Announcements";
import FeedbackGrievance from "./FeedbackGrievance";
import Meetings from "./Meetings";

const Manager = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Get active tab from URL
  const getCurrentTab = () => {
    const path = location.pathname;
    if (path === "/manager") return "team"; // default
    return path.split("/manager/")[1] || "team";
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

    // Redirect /manager → /manager/team
    if (location.pathname === "/manager") {
      navigate("/manager/team", { replace: true });
    }
  }, [location.pathname, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    sessionStorage.clear();
    navigate("/login");
  };

  const handleTabClick = (tabKey) => {
    navigate(`/manager/${tabKey}`);
  };

  const menuItems = [
    { key: "team", label: "Team Management", icon: Users },
    { key: "attendance", label: "Attendance & Shifts", icon: CalendarCheck },
    { key: "performance", label: "Performance Reviews", icon: BarChart2 },
    { key: "goals", label: "Goals & Tasks", icon: Target },
    { key: "training", label: "Training & Development", icon: BookOpen },
    { key: "skills", label: "Skills Matrix", icon: Award },
    { key: "assets", label: "Assets Allocation", icon: Package },
    { key: "announcements", label: "Announcements", icon: Megaphone },
    { key: "feedback", label: "Feedback & Grievance", icon: MessageSquare },
    { key: "meetings", label: "Meetings", icon: Video },
  ];

  // Component rendering function
  const renderActiveComponent = () => {
    switch(activeTab) {
      case "team":
        return <TeamManagement />;
      case "attendance":
        return <Attendance />;
      case "performance":
        return <Performance />;
      case "goals":
        return <GoalsTasks />;
      case "training":
        return <TrainingDevelopment />;
      case "skills":
        return <Skills />;
      case "assets":
        return <Assets />;
      case "announcements":
        return <Announcements />;
      case "feedback":
        return <FeedbackGrievance />;
      case "meetings":
        return <Meetings />;
      default:
        return <TeamManagement />; // fallback
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 flex flex-col min-h-screen">
        <h2 className="text-2xl font-bold text-green-600 mb-6">
          Manager Dashboard
        </h2>
        <nav className="flex-1 space-y-2 overflow-y-auto">
          {menuItems.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => handleTabClick(key)}
              className={`flex items-center w-full px-4 py-2 rounded-lg transition text-sm ${
                activeTab === key
                  ? "bg-green-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon className="mr-2 h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-2 mt-4 text-red-600 hover:bg-gray-100 rounded-lg"
        >
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </button>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <h1 className="text-lg font-semibold text-gray-800">Manager Panel</h1>
          <div className="flex items-center gap-3">
            <UserCircle className="h-8 w-8 text-gray-500" />
            <span className="font-medium text-gray-800">
              {user?.username || "Manager"}
            </span>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 flex-1 overflow-y-auto">
          {renderActiveComponent()}
        </div>
      </main>
    </div>
  );
};

export default Manager;