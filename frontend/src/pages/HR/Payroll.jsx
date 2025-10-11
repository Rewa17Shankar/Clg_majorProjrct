// import React, { useEffect, useState } from "react";
// import { fetchPayrollAPI } from "../../api/HR/payrollApi";

// const Payroll = () => {
//   const [payroll, setPayroll] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchPayrollAPI();
//         setPayroll(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p>Loading payroll...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       <h2>HR Payroll</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Employee</th>
//             <th>Salary</th>
//             <th>Month</th>
//           </tr>
//         </thead>
//         <tbody>
//           {payroll.map((p) => (
//             <tr key={p.id}>
//               <td>{p.username}</td>
//               <td>{p.total_salary}</td>
//               <td>{p.month}/{p.year}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Payroll;


import React, { useEffect, useState } from "react";
import { fetchPayrollAPI } from "../../api/HR/payrollApi";

const Payroll = () => {
  const [payroll, setPayroll] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPayrollAPI();
        setPayroll(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-white border-r-transparent mb-4"></div>
          <p className="text-gray-400">Loading payroll...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center">
          <p className="text-red-300">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">HR Payroll</h2>
          <p className="text-gray-400 text-sm">
            View and manage employee payroll information
          </p>
        </div>

        {/* Content Card */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/50">
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Employee
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Salary
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Month/Year
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50">
                {payroll.map((p) => (
                  <tr 
                    key={p.id}
                    className="hover:bg-gray-700/30 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {p.username}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      ${p.total_salary?.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {p.month}/{p.year}
                    </td>
                  </tr>
                ))}
                {!payroll.length && (
                  <tr>
                    <td className="px-6 py-16 text-gray-500 text-center" colSpan="3">
                      No payroll records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payroll;
