import React, { useEffect, useState } from "react";
import { getResignations, updateResignationStatus } from "../../api/resignationApi";

const Resignations = () => {
  const [resignations, setResignations] = useState([]);

  useEffect(() => {
    fetchResignations();
  }, []);

  const fetchResignations = async () => {
    const res = await getResignations();
    setResignations(res.data);
  };

  const handleStatusChange = async (id, status) => {
    await updateResignationStatus(id, status);
    fetchResignations();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Employee Exit / Resignation</h2>

      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Employee</th>
            <th className="border p-2">Notice Date</th>
            <th className="border p-2">Last Working Day</th>
            <th className="border p-2">Reason</th>
            <th className="border p-2">Within Notice Period</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {resignations.map((r) => (
            <tr key={r.id} className="text-center">
              <td className="border p-2">{r.username} ({r.email})</td>
              <td className="border p-2">{r.notice_date}</td>
              <td className="border p-2">{r.last_working_date}</td>
              <td className="border p-2">{r.reason}</td>
              <td className="border p-2">
                {r.withinNoticePeriod ? "Yes" : "No (Auto Rejected)"}
              </td>
              <td className="border p-2">{r.status}</td>
              <td className="border p-2 space-x-2">
                {r.status === "Pending" && r.withinNoticePeriod && (
                  <>
                    <button
                      onClick={() => handleStatusChange(r.id, "Accepted")}
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(r.id, "Rejected")}
                      className="bg-red-500 text-white px-2 py-1 rounded"
                    >
                      Reject
                    </button>
                  </>
                )}
                {!r.withinNoticePeriod && <span className="text-red-600">Expired</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Resignations;
