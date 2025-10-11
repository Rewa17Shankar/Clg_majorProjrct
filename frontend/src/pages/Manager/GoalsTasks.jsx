// import React, { useEffect, useState } from "react";
// import { getGoalsTasks, addGoal } from "../../api/MANAGER/goalsTasksApi";

// const GoalsTasks = () => {
//   const [goals, setGoals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [newGoal, setNewGoal] = useState({ 
//     user_id: "", 
//     title: "", 
//     description: "", 
//     due_date: "" 
//   });

//   useEffect(() => {
//     const fetchGoals = async () => {
//       try {
//         const data = await getGoalsTasks();
//         setGoals(data);
//       } catch (error) {
//         console.error("Error fetching goals:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchGoals();
//   }, []);

//   const handleAddGoal = async (e) => {
//     e.preventDefault();
//     try {
//       const created = await addGoal(newGoal);
//       setGoals((prev) => [...prev, created]);
//       setNewGoal({ user_id: "", title: "", description: "", due_date: "" });
//     } catch (error) {
//       console.error("Error adding goal:", error);
//     }
//   };

//   if (loading) return <p className="p-4">Loading goals...</p>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Goals & Tasks</h1>

//       {/* Add Goal Form */}
//       <form onSubmit={handleAddGoal} className="mb-6 space-y-3 bg-gray-50 p-4 rounded-lg shadow">
//         <input
//           type="text"
//           placeholder="User ID"
//           value={newGoal.user_id}
//           onChange={(e) => setNewGoal({ ...newGoal, user_id: e.target.value })}
//           className="border p-2 rounded w-full"
//           required
//         />
//         <input
//           type="text"
//           placeholder="Goal Title"
//           value={newGoal.title}
//           onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
//           className="border p-2 rounded w-full"
//           required
//         />
//         <textarea
//           placeholder="Description"
//           value={newGoal.description}
//           onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
//           className="border p-2 rounded w-full"
//         />
//         <input
//           type="date"
//           value={newGoal.due_date}
//           onChange={(e) => setNewGoal({ ...newGoal, due_date: e.target.value })}
//           className="border p-2 rounded w-full"
//         />
//         <button 
//           type="submit" 
//           className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           Add Goal
//         </button>
//       </form>

//       {/* Goals List */}
//       {goals.length === 0 ? (
//         <p>No goals assigned yet.</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {goals.map((goal) => (
//             <div 
//               key={goal.id} 
//               className="bg-white shadow-md rounded-2xl hover:shadow-lg transition p-4"
//             >
//               <p className="font-semibold">Employee: {goal.users?.username || goal.user_id}</p>
//               <p className="text-lg">{goal.title}</p>
//               <p className="text-sm text-gray-600">{goal.description}</p>
//               <p className="text-sm">Status: {goal.status}</p>
//               <p className="text-sm">Due: {goal.due_date}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default GoalsTasks;



import React, { useEffect, useState } from "react";
import { getGoalsTasks, addGoal } from "../../api/MANAGER/goalsTasksApi";

const StatusPill = ({ value }) => {
  const getStyles = () => {
    if (value === "Completed") return "bg-green-500/20 text-green-300 border-green-500/30";
    if (value === "In Progress") return "bg-blue-500/20 text-blue-300 border-blue-500/30";
    return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30";
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStyles()}`}>
      {value}
    </span>
  );
};

const GoalsTasks = () => {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newGoal, setNewGoal] = useState({ 
    user_id: "", 
    title: "", 
    description: "", 
    due_date: "" 
  });

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const data = await getGoalsTasks();
        setGoals(data);
      } catch (error) {
        console.error("Error fetching goals:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGoals();
  }, []);

  const handleAddGoal = async (e) => {
    e.preventDefault();
    try {
      const created = await addGoal(newGoal);
      setGoals((prev) => [...prev, created]);
      setNewGoal({ user_id: "", title: "", description: "", due_date: "" });
    } catch (error) {
      console.error("Error adding goal:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-white border-r-transparent mb-4"></div>
          <p className="text-gray-400">Loading goals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">Goals & Tasks</h2>
          <p className="text-gray-400 text-sm">
            Assign and track employee goals and objectives
          </p>
        </div>

        {/* Add Goal Form */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 mb-6">
          <h3 className="text-lg font-semibold text-white mb-6">Add New Goal</h3>
          <form onSubmit={handleAddGoal} className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="User ID"
              value={newGoal.user_id}
              onChange={(e) => setNewGoal({ ...newGoal, user_id: e.target.value })}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Goal Title"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400"
              required
            />
            <textarea
              placeholder="Description"
              value={newGoal.description}
              onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-400 md:col-span-2"
              rows="3"
            />
            <input
              type="date"
              value={newGoal.due_date}
              onChange={(e) => setNewGoal({ ...newGoal, due_date: e.target.value })}
              className="bg-gray-700/50 border border-gray-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button 
              type="submit" 
              className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-150"
            >
              Add Goal
            </button>
          </form>
        </div>

        {/* Goals List */}
        {goals.length === 0 ? (
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-16 text-center">
            <p className="text-gray-500">No goals assigned yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {goals.map((goal) => (
              <div 
                key={goal.id} 
                className="bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:bg-gray-700/30 transition-all duration-150"
              >
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-white">{goal.title}</h4>
                  <StatusPill value={goal.status} />
                </div>
                <p className="text-sm text-gray-300 mb-4">{goal.description}</p>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>
                    <span className="font-medium">Employee:</span>{" "}
                    {goal.users?.username || `ID: ${goal.user_id}`}
                  </p>
                  <p>
                    <span className="font-medium">Due Date:</span> {goal.due_date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalsTasks;
