// import { useEffect, useState } from "react";
// import { fetchEmployees, deleteEmployee } from "../api/employeeApi";

// export default function Employees() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadEmployees();
//   }, []);

//   const loadEmployees = () => {
//     fetchEmployees()
//       .then((res) => setEmployees(res.data))
//       .catch((err) => console.error("Failed to fetch employees:", err))
//       .finally(() => setLoading(false));
//   };

//   const handleDelete = async (id) => {
//     if (window.confirm("Are you sure?")) {
//       await deleteEmployee(id);
//       loadEmployees();
//     }
//   };

//   if (loading) return <p className="p-4">Loading employees...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Employees</h2>
//       {employees.length === 0 ? (
//         <p>No employees found.</p>
//       ) : (
//         <table className="table-auto w-full border text-sm">
//           <thead>
//             <tr className="bg-gray-100">
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Email</th>
//               <th className="border px-4 py-2">Department</th>
//               <th className="border px-4 py-2">Designation</th>
//               <th className="border px-4 py-2">Role</th>
//               <th className="border px-4 py-2">Joined</th>
//               <th className="border px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((emp) => (
//               <tr key={emp.id}>
//                 <td className="border px-4 py-2">{emp.username}</td>
//                 <td className="border px-4 py-2">{emp.email}</td>
//                 <td className="border px-4 py-2">{emp.departments?.name || "-"}</td>
//                 <td className="border px-4 py-2">{emp.designations?.title || "-"}</td>
//                 <td className="border px-4 py-2">{emp.roles?.role_name || "-"}</td>
//                 <td className="border px-4 py-2">{emp.date_of_joining}</td>
//                 <td className="border px-4 py-2">
//                   <button
//                     onClick={() => handleDelete(emp.id)}
//                     className="bg-red-500 text-white px-2 py-1 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { fetchEmployees, deleteEmployee } from "../api/employeeApi";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // ✅ new filter state

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    fetchEmployees()
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Failed to fetch employees:", err))
      .finally(() => setLoading(false));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await deleteEmployee(id);
      loadEmployees();
    }
  };

  // ✅ Apply filter
  const filteredEmployees = employees.filter((emp) => {
    if (filter === "manager") return emp.roles?.role_name?.toLowerCase() === "manager";
    if (filter === "employee") return emp.roles?.role_name?.toLowerCase() === "employee";
    return true; // all
  });

  if (loading) return <p className="p-4">Loading employees...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Employees</h2>

      {/* ✅ Filter Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("manager")}
          className={`px-4 py-2 rounded ${filter === "manager" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Managers
        </button>
        <button
          onClick={() => setFilter("employee")}
          className={`px-4 py-2 rounded ${filter === "employee" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Employees
        </button>
      </div>

      {filteredEmployees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="table-auto w-full border text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Department</th>
              <th className="border px-4 py-2">Designation</th>
              <th className="border px-4 py-2">Role</th>
              <th className="border px-4 py-2">Joined</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr key={emp.id}>
                <td className="border px-4 py-2">{emp.username}</td>
                <td className="border px-4 py-2">{emp.email}</td>
                <td className="border px-4 py-2">{emp.departments?.name || "-"}</td>
                <td className="border px-4 py-2">{emp.designations?.title || "-"}</td>
                <td className="border px-4 py-2">{emp.roles?.role_name || "-"}</td>
                <td className="border px-4 py-2">{emp.date_of_joining}</td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

