import Payroll from "../../models/HR/payrollModel.js";

export const addBonus = async (req, res) => {
  try {
    const { user_id, amount, reason } = req.body;
    const bonus = await Payroll.addBonus(user_id, amount, reason);
    res.status(201).json(bonus);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const addDeduction = async (req, res) => {
  try {
    const { user_id, amount, reason } = req.body;
    const deduction = await Payroll.addDeduction(user_id, amount, reason);
    res.status(201).json(deduction);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const updatePayroll = async (req, res) => {
  try {
    const { id } = req.params;
    const { salary } = req.body;
    const payroll = await Payroll.updatePayroll(id, salary);
    res.json(payroll);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getPayrolls = async (req, res) => {
  try {
    const data = await Payroll.getAll();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const generatePayroll = async (req, res) => {
  try {
    const { user_id, baseSalary, month, year } = req.body;

    const netSalary = await Payroll.calculateNetSalary(user_id, baseSalary);

    const payroll = await Payroll.generate({
      user_id,
      salary: netSalary,
      month,
      year,
    });

    res.status(201).json(payroll);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

export const getPayrollByUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const data = await Payroll.getByUser(user_id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
