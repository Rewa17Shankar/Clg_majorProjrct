import React, { useEffect, useState } from "react";
import { getGoalsTasks, addGoal } from "../../api/MANAGER/goalsTasksApi";

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

  if (loading) return <p className="p-4">Loading goals...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Goals & Tasks</h1>

      {/* Add Goal Form */}
      <form onSubmit={handleAddGoal} className="mb-6 space-y-3 bg-gray-50 p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="User ID"
          value={newGoal.user_id}
          onChange={(e) => setNewGoal({ ...newGoal, user_id: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Goal Title"
          value={newGoal.title}
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
          className="border p-2 rounded w-full"
          required
        />
        <textarea
          placeholder="Description"
          value={newGoal.description}
          onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="date"
          value={newGoal.due_date}
          onChange={(e) => setNewGoal({ ...newGoal, due_date: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Goal
        </button>
      </form>

      {/* Goals List */}
      {goals.length === 0 ? (
        <p>No goals assigned yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal) => (
            <div 
              key={goal.id} 
              className="bg-white shadow-md rounded-2xl hover:shadow-lg transition p-4"
            >
              <p className="font-semibold">Employee: {goal.users?.username || goal.user_id}</p>
              <p className="text-lg">{goal.title}</p>
              <p className="text-sm text-gray-600">{goal.description}</p>
              <p className="text-sm">Status: {goal.status}</p>
              <p className="text-sm">Due: {goal.due_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GoalsTasks;

