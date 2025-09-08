import React, { useEffect, useState } from "react";
import { getPayrolls, generatePayroll, addBonus, addDeduction, updatePayroll } from "../../api/payrollApi";

const Payroll = () => {
  const [payrolls, setPayrolls] = useState([]);
  const [form, setForm] = useState({ user_id: "", baseSalary: "", month: "", year: "" });
  const [bonusForm, setBonusForm] = useState({ user_id: "", amount: "", reason: "" });
  const [deductionForm, setDeductionForm] = useState({ user_id: "", amount: "", reason: "" });

  useEffect(() => {
    fetchPayrolls();
  }, []);

  const fetchPayrolls = async () => {
    const res = await getPayrolls();
    setPayrolls(res.data);
  };

  const handleGenerate = async () => {
    await generatePayroll(form);
    setForm({ user_id: "", baseSalary: "", month: "", year: "" });
    fetchPayrolls();
  };

  const handleBonus = async () => {
    await addBonus(bonusForm);
    setBonusForm({ user_id: "", amount: "", reason: "" });
    fetchPayrolls();
  };

  const handleDeduction = async () => {
    await addDeduction(deductionForm);
    setDeductionForm({ user_id: "", amount: "", reason: "" });
    fetchPayrolls();
  };

  const handleSalaryUpdate = async (id, newSalary) => {
    await updatePayroll(id, newSalary);
    fetchPayrolls();
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Payroll & Salary Management</h2>

      {/* Generate Payroll */}
      <div className="mb-6 border p-4 rounded bg-gray-50">
        <h3 className="text-lg font-semibold mb-2">Generate Payroll</h3>
        <input type="number" placeholder="User ID" value={form.user_id} onChange={(e) => setForm({ ...form, user_id: e.target.value })} className="border p-2 mr-2" />
        <input type="number" placeholder="Base Salary" value={form.baseSalary} onChange={(e) => setForm({ ...form, baseSalary: e.target.value })} className="border p-2 mr-2" />
        <input type="text" placeholder="Month" value={form.month} onChange={(e) => setForm({ ...form, month: e.target.value })} className="border p-2 mr-2" />
        <input type="number" placeholder="Year" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="border p-2 mr-2" />
        <button onClick={handleGenerate} className="bg-blue-500 text-white px-4 py-2 rounded">Generate</button>
      </div>

      {/* Bonus Section */}
      <div className="mb-6 border p-4 rounded bg-green-50">
        <h3 className="text-lg font-semibold mb-2">Add Bonus</h3>
        <input type="number" placeholder="User ID" value={bonusForm.user_id} onChange={(e) => setBonusForm({ ...bonusForm, user_id: e.target.value })} className="border p-2 mr-2" />
        <input type="number" placeholder="Amount" value={bonusForm.amount} onChange={(e) => setBonusForm({ ...bonusForm, amount: e.target.value })} className="border p-2 mr-2" />
        <input type="text" placeholder="Reason" value={bonusForm.reason} onChange={(e) => setBonusForm({ ...bonusForm, reason: e.target.value })} className="border p-2 mr-2" />
        <button onClick={handleBonus} className="bg-green-500 text-white px-4 py-2 rounded">Add Bonus</button>
      </div>

      {/* Deduction Section */}
      <div className="mb-6 border p-4 rounded bg-red-50">
        <h3 className="text-lg font-semibold mb-2">Add Deduction</h3>
        <input type="number" placeholder="User ID" value={deductionForm.user_id} onChange={(e) => setDeductionForm({ ...deductionForm, user_id: e.target.value })} className="border p-2 mr-2" />
        <input type="number" placeholder="Amount" value={deductionForm.amount} onChange={(e) => setDeductionForm({ ...deductionForm, amount: e.target.value })} className="border p-2 mr-2" />
        <input type="text" placeholder="Reason" value={deductionForm.reason} onChange={(e) => setDeductionForm({ ...deductionForm, reason: e.target.value })} className="border p-2 mr-2" />
        <button onClick={handleDeduction} className="bg-red-500 text-white px-4 py-2 rounded">Add Deduction</button>
      </div>

      {/* Payroll Records */}
      <h3 className="text-lg font-semibold mb-2">Payroll Records</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Employee</th>
            <th className="border p-2">Month</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Salary</th>
            <th className="border p-2">Generated At</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {payrolls.map((p) => (
            <tr key={p.id} className="text-center">
              <td className="border p-2">{p.username} ({p.email})</td>
              <td className="border p-2">{p.month}</td>
              <td className="border p-2">{p.year}</td>
              <td className="border p-2">
                <input
                  type="number"
                  defaultValue={p.salary}
                  onBlur={(e) => handleSalaryUpdate(p.id, e.target.value)}
                  className="border p-1 w-24 text-center"
                />
              </td>
              <td className="border p-2">{new Date(p.generated_at).toLocaleDateString()}</td>
              <td className="border p-2">Edit above</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payroll;
