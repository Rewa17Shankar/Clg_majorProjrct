
// export default Assets;
import React, { useEffect, useState } from "react";
import { getAssets, assignAsset, returnAsset } from "../../api/MANAGER/assetsApi";

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    assigned_to: "",
    assigned_date: "",
    return_date: "",
  });

  // ✅ Fetch all assets
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

  // ✅ Handle form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Assign new asset
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

  // ✅ Return asset
  const handleReturn = async (id) => {
    try {
      const updated = await returnAsset(id);
      setAssets(assets.map((a) => (a.id === id ? updated : a)));
    } catch (error) {
      console.error("Error returning asset:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📦 Asset Management</h2>

      {/* Assign Asset Form */}
      <form onSubmit={handleAssign} className="bg-gray-100 p-4 rounded mb-6">
        <h3 className="font-semibold mb-2">Assign New Asset</h3>
        <input
          type="text"
          name="name"
          placeholder="Asset Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 mr-2 rounded"
          required
        />
        <input
          type="number"
          name="assigned_to"
          placeholder="User ID"
          value={formData.assigned_to}
          onChange={handleChange}
          className="border p-2 mr-2 rounded"
          required
        />
        <input
          type="date"
          name="assigned_date"
          value={formData.assigned_date}
          onChange={handleChange}
          className="border p-2 mr-2 rounded"
          required
        />
        <input
          type="date"
          name="return_date"
          value={formData.return_date}
          onChange={handleChange}
          className="border p-2 mr-2 rounded"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Assign
        </button>
      </form>

      {/* Assets List */}
      {loading ? (
        <p>Loading assets...</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Assigned To</th>
              <th className="p-2 border">Assigned Date</th>
              <th className="p-2 border">Return Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.id} className="text-center">
                <td className="p-2 border">{asset.name}</td>
                <td className="p-2 border">{asset.assigned_to}</td>
                <td className="p-2 border">{asset.assigned_date}</td>
                <td className="p-2 border">{asset.return_date || "N/A"}</td>
                <td className="p-2 border">{asset.status}</td>
                <td className="p-2 border">
                  {asset.status === "Assigned" ? (
                    <button
                      onClick={() => handleReturn(asset.id)}
                      className="bg-green-600 text-white px-3 py-1 rounded"
                    >
                      Return
                    </button>
                  ) : (
                    "✅ Returned"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Assets;
