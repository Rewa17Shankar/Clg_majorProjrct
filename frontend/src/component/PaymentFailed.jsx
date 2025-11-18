// src/pages/PaymentFailed.jsx
import { useNavigate } from "react-router-dom";

export default function PaymentFailed() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-xl p-8 bg-slate-900 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-4 text-red-400">Payment Failed</h1>
        <p className="text-gray-400 mb-6">Sorry — your payment couldn't be completed. Please try again.</p>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/pricing")}
            className="px-4 py-2 rounded bg-white text-slate-900 font-semibold"
          >
            Back to Pricing
          </button>

          <button
            onClick={() => navigate("/support")}
            className="px-4 py-2 rounded bg-slate-800 text-white border border-slate-700"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
}
