// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RoleSelect from "./pages/RoleSelect";
// import Login from "./pages/Login";
// import SuperAdmin from "./pages/SuperAdmin";
// import Dashboard from "./pages/Dashboard";
// import ResetPassword from "./pages/ResetPassword"; 

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<RoleSelect />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<SuperAdmin />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/reset-password/:userId" element={<ResetPassword />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import RoleSelect from "./pages/RoleSelect";
// import Login from "./pages/Login";
// import SuperAdmin from "./pages/SuperAdmin";
// import Dashboard from "./pages/Dashboard";
// import ResetPassword from "./pages/ResetPassword"; 

// // HR Dashboard + Sub Pages
// import HR from "./pages/HR";
// import Employees from "./pages/Employees";
// import Departments from "./pages/Departments";
// import Designations from "./pages/Designations";
// import Attendance from "./pages/Attendance";
// import Shifts from "./pages/Shifts";
// import Leaves from "./pages/Leaves";
// import Recruitment from "./pages/Recruitment";
// import Payroll from "./pages/Payroll";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Existing Routes */}
//         <Route path="/" element={<RoleSelect />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/admin" element={<SuperAdmin />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/reset-password/:userId" element={<ResetPassword />} />

//         {/* HR Dashboard Routes */}
//         <Route path="/hr" element={<HR />}>
//           <Route path="employees" element={<Employees />} />
//           <Route path="departments" element={<Departments />} />
//           <Route path="designations" element={<Designations />} />
//           <Route path="attendance" element={<Attendance />} />
//           <Route path="shifts" element={<Shifts />} />
//           <Route path="leaves" element={<Leaves />} />
//           <Route path="recruitment" element={<Recruitment />} />
//           <Route path="payroll" element={<Payroll />} />
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import RoleSelect from "./pages/Auth/RoleSelect";
import Login from "./pages/Auth/Login";
import ResetPassword from "./pages/Auth/ResetPassword";
import Dashboard from "./pages/Common/Dashboard";
import SuperAdmin from "./pages/SuperAdmin/SuperAdmin";
import HR from "./pages/HR/HR";
import Manager from "./pages/Manager/Manager";
import Employee from "./pages/Employee/Employee";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Landing />} />
        
        <Route path="/role-select" element={<RoleSelect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<SuperAdmin />} />
        <Route path="/reset-password/:userId" element={<ResetPassword />} />

        {/* Dashboard Routes by Role */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* HR Routes - Direct routes instead of nested */}
        <Route path="/hr" element={<HR />} />
        <Route path="/hr/employees" element={<HR />} />
        <Route path="/hr/departments" element={<HR />} />
        <Route path="/hr/designations" element={<HR />} />
        <Route path="/hr/attendance" element={<HR />} />
        <Route path="/hr/leaves" element={<HR />} />
        <Route path="/hr/recruitment" element={<HR />} />
        <Route path="/hr/payroll" element={<HR />} />
        <Route path="/hr/resignations" element={<HR />} />

        {/* Manager Routes */}
        <Route path="/manager/*" element={<Manager />} />
        {/* <Route path="/manager/Announcements" element={<Manager />} />
        <Route path="/manager/Assets" element={<Manager />} />
        <Route path="/manager/AttendanceShift" element={<Manager />} />
        <Route path="/manager/FeedbackGrievance" element={<Manager />} />
        <Route path="/manager/GoalsTasks" element={<Manager />} />
        <Route path="/manager/Meetings" element={<Manager />} />
        <Route path="/manager/Performance" element={<Manager />} />
        <Route path="/manager/Skills" element={<Manager />} />
        <Route path="/manager/TeamManagement" element={<Manager />} />
        <Route path="/manager/TrainingDevelopment" element={<Manager />} /> */}

        {/* <Route path="/manager/announcements" element={<Manager />} />
        <Route path="/manager/assets" element={<Manager />} />
        <Route path="/manager/attendanceshift" element={<Manager />} />
        <Route path="/manager/feedbackgrievance" element={<Manager />} />
        <Route path="/manager/goalstasks" element={<Manager />} />
        <Route path="/manager/meetings" element={<Manager />} />
        <Route path="/manager/performance" element={<Manager />} />
        <Route path="/manager/skills" element={<Manager />} />
        <Route path="/manager/teammanagement" element={<Manager />} />
        <Route path="/manager/trainingdevelopment" element={<Manager />} /> */}

        {/* <Route path="/manager/team" element={<Manager />} />
        <Route path="/manager/attendance" element={<Manager />} />
        <Route path="/manager/performance" element={<Manager />} />
        <Route path="/manager/goals" element={<Manager />} />
        <Route path="/manager/training" element={<Manager />} />
        <Route path="/manager/skills" element={<Manager />} />
        <Route path="/manager/assets" element={<Manager />} />
        <Route path="/manager/announcements" element={<Manager />} />
        <Route path="/manager/feedback" element={<Manager />} />
        <Route path="/manager/meetings" element={<Manager />} /> */}

        {/* Employee Routes */}
        <Route path="/employee" element={<Employee />} />
      </Routes>
    </Router>
  );
}

export default App;