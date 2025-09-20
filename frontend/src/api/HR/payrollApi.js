// const BASE_URL = "http://localhost:5000/api/payroll";
const BASE_URL = "https://clg-majorprojrct.onrender.com/api/payroll";
export const fetchPayrollAPI = async () => {
  // Just fetch without token
  const res = await fetch(`${BASE_URL}/hr`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
  return await res.json();
};
