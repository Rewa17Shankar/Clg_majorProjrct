
// // export default Assets;
// import React, { useEffect, useState } from "react";
// import { getAssets, assignAsset, returnAsset } from "../../api/MANAGER/assetsApi";

// const Assets = () => {
//   const [assets, setAssets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [formData, setFormData] = useState({
//     name: "",
//     assigned_to: "",
//     assigned_date: "",
//     return_date: "",
//   });

//   // ✅ Fetch all assets
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAssets();
//         setAssets(data);
//       } catch (error) {
//         console.error("Error fetching assets:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // ✅ Handle form input
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // ✅ Assign new asset
//   const handleAssign = async (e) => {
//     e.preventDefault();
//     try {
//       const newAsset = await assignAsset(formData);
//       setAssets([...assets, newAsset]);
//       setFormData({ name: "", assigned_to: "", assigned_date: "", return_date: "" });
//     } catch (error) {
//       console.error("Error assigning asset:", error);
//     }
//   };

//   // ✅ Return asset
//   const handleReturn = async (id) => {
//     try {
//       const updated = await returnAsset(id);
//       setAssets(assets.map((a) => (a.id === id ? updated : a)));
//     } catch (error) {
//       console.error("Error returning asset:", error);
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">📦 Asset Management</h2>

//       {/* Assign Asset Form */}
//       <form onSubmit={handleAssign} className="bg-gray-100 p-4 rounded mb-6">
//         <h3 className="font-semibold mb-2">Assign New Asset</h3>
//         <input
//           type="text"
//           name="name"
//           placeholder="Asset Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="number"
//           name="assigned_to"
//           placeholder="User ID"
//           value={formData.assigned_to}
//           onChange={handleChange}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="date"
//           name="assigned_date"
//           value={formData.assigned_date}
//           onChange={handleChange}
//           className="border p-2 mr-2 rounded"
//           required
//         />
//         <input
//           type="date"
//           name="return_date"
//           value={formData.return_date}
//           onChange={handleChange}
//           className="border p-2 mr-2 rounded"
//         />
//         <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
//           Assign
//         </button>
//       </form>

//       {/* Assets List */}
//       {loading ? (
//         <p>Loading assets...</p>
//       ) : (
//         <table className="w-full border">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-2 border">Name</th>
//               <th className="p-2 border">Assigned To</th>
//               <th className="p-2 border">Assigned Date</th>
//               <th className="p-2 border">Return Date</th>
//               <th className="p-2 border">Status</th>
//               <th className="p-2 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {assets.map((asset) => (
//               <tr key={asset.id} className="text-center">
//                 <td className="p-2 border">{asset.name}</td>
//                 <td className="p-2 border">{asset.assigned_to}</td>
//                 <td className="p-2 border">{asset.assigned_date}</td>
//                 <td className="p-2 border">{asset.return_date || "N/A"}</td>
//                 <td className="p-2 border">{asset.status}</td>
//                 <td className="p-2 border">
//                   {asset.status === "Assigned" ? (
//                     <button
//                       onClick={() => handleReturn(asset.id)}
//                       className="bg-green-600 text-white px-3 py-1 rounded"
//                     >
//                       Return
//                     </button>
//                   ) : (
//                     "✅ Returned"
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Assets;


import React, { useEffect, useState } from "react";
import { getAssets, assignAsset, returnAsset } from "../../api/MANAGER/assetsApi";

const StatusPill = ({ value }) => {
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
      value === "Assigned"
        ? "bg-blue-500/20 text-blue-300 border-blue-500/30"
        : "bg-green-500/20 text-green-300 border-green-500/30"
    }`}>
      {value}
    </span>
  );
};

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    assigned_to: "",
    assigned_date: "",
    return_date: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAssets();
        setAssets(data);
      } catch (error) {
        console.error("Error fetching assets:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAssign = async (e) => {
    e.preventDefault();
    try {
      const newAsset = await assignAsset(formData);
      setAssets([...assets, newAsset]);
      setFormData({ name: "", assigned_to: "", assigned_date: "", return_date: "" });
    } catch (error) {
      console.error("Error assigning asset:", error);
    }
  };

  const handleReturn = async (id) => {
    try {
      const updated = await returnAsset(id);
      setAssets(assets.map((a) => (a.id === id ? updated : a)));
    } catch (error) {
      console.error("Error returning asset:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-white border-r-transparent mb-4"></div>
          <p className="text-gray-400">Loading assets...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">📦 Asset Management</h2>
          <p className="text-gray-400 text-sm">
            Assign and track company assets
          </p>
        </div>

        {/* Assign Asset Form */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-6">Assign New Asset</h3>
          <form onSubmit={handleAssign} className="grid md:grid-cols-5 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Asset Name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
              required
            />
            <input
              type="number"
              name="assigned_to"
              placeholder="User ID"
              value={formData.assigned_to}
              onChange={handleChange}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
              required
            />
            <input
              type="date"
              name="assigned_date"
              value={formData.assigned_date}
              onChange={handleChange}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="date"
              name="return_date"
              value={formData.return_date}
              onChange={handleChange}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-150"
            >
              Assign
            </button>
          </form>
        </div>

        {/* Assets List */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
          {assets.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500">No assets assigned yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-900/50">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Asset Name
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Assigned To
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Assigned Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Return Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700/50">
                  {assets.map((asset) => (
                    <tr key={asset.id} className="hover:bg-gray-700/30 transition-colors duration-150">
                      <td className="px-6 py-4 text-sm font-medium text-white">
                        {asset.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {asset.assigned_to}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {asset.assigned_date}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-300">
                        {asset.return_date || "N/A"}
                      </td>
                      <td className="px-6 py-4">
                        <StatusPill value={asset.status} />
                      </td>
                      <td className="px-6 py-4">
                        {asset.status === "Assigned" ? (
                          <button
                            onClick={() => handleReturn(asset.id)}
                            className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors duration-150"
                          >
                            Return
                          </button>
                        ) : (
                          <span className="text-green-400 text-sm">✅ Returned</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Assets;
