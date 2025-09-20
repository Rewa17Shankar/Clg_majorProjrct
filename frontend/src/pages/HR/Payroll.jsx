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

  if (loading) return <p>Loading payroll...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>HR Payroll</h2>
      <table>
        <thead>
          <tr>
            <th>Employee</th>
            <th>Salary</th>
            <th>Month</th>
          </tr>
        </thead>
        <tbody>
          {payroll.map((p) => (
            <tr key={p.id}>
              <td>{p.username}</td>
              <td>{p.total_salary}</td>
              <td>{p.month}/{p.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
