// import React, { useState } from 'react';
// import EmployeeRecommender from '../../component/AI/EmployeeRecommender';
// import './GoalsTasks.css';

// const GoalsTasks = () => {
//   const [showAIRecommender, setShowAIRecommender] = useState(false);
//   const [departmentId, setDepartmentId] = useState(null); // Get from context or props

//   return (
//     <div className="goals-tasks-container">
//       <div className="page-header">
//         <h2>Goals & Tasks Management</h2>
//         <button 
//           onClick={() => setShowAIRecommender(!showAIRecommender)}
//           className="btn-ai-toggle"
//         >
//           {showAIRecommender ? 'Hide' : 'Show'} AI Assistant
//         </button>
//       </div>

//       {showAIRecommender && (
//         <div className="ai-section">
//           <EmployeeRecommender departmentId={departmentId} />
//         </div>
//       )}

//       <div className="tasks-content">
//         {/* Your existing task management components */}
//       </div>
//     </div>
//   );
// };

// export default GoalsTasks;
