// import React, { useState } from 'react';
// import { recommendEmployeeForTask } from '../../api/AI/aiApi';
// import './EmployeeRecommender.css';

// const EmployeeRecommender = ({ departmentId }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     taskTitle: '',
//     taskDescription: '',
//     requiredSkills: '',
//     estimatedHours: '',
//     priority: 'Medium'
//   });
//   const [recommendations, setRecommendations] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleGetRecommendations = async () => {
//     if (!formData.taskTitle) {
//       setError('Task title is required');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const result = await recommendEmployeeForTask({
//         ...formData,
//         departmentId
//       });
//       setRecommendations(result);
//     } catch (err) {
//       setError(err.error || 'Failed to get recommendations');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       taskTitle: '',
//       taskDescription: '',
//       requiredSkills: '',
//       estimatedHours: '',
//       priority: 'Medium'
//     });
//     setRecommendations(null);
//     setError(null);
//   };

//   return (
//     <div className="employee-recommender">
//       <div className="recommender-header">
//         <h3>AI Employee Recommender</h3>
//         <p>Get AI-powered employee recommendations for your tasks</p>
//       </div>

//       <div className="recommender-form">
//         <div className="form-group">
//           <label>Task Title *</label>
//           <input
//             type="text"
//             name="taskTitle"
//             value={formData.taskTitle}
//             onChange={handleChange}
//             placeholder="e.g., Develop Login Module"
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Task Description</label>
//           <textarea
//             name="taskDescription"
//             value={formData.taskDescription}
//             onChange={handleChange}
//             placeholder="Describe the task in detail..."
//             rows="3"
//           />
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Required Skills</label>
//             <input
//               type="text"
//               name="requiredSkills"
//               value={formData.requiredSkills}
//               onChange={handleChange}
//               placeholder="e.g., React, Node.js"
//             />
//           </div>

//           <div className="form-group">
//             <label>Estimated Hours</label>
//             <input
//               type="number"
//               name="estimatedHours"
//               value={formData.estimatedHours}
//               onChange={handleChange}
//               placeholder="e.g., 40"
//             />
//           </div>

//           <div className="form-group">
//             <label>Priority</label>
//             <select
//               name="priority"
//               value={formData.priority}
//               onChange={handleChange}
//             >
//               <option value="Low">Low</option>
//               <option value="Medium">Medium</option>
//               <option value="High">High</option>
//               <option value="Critical">Critical</option>
//             </select>
//           </div>
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <div className="recommender-actions">
//           <button 
//             onClick={handleGetRecommendations} 
//             disabled={loading}
//             className="btn-recommend"
//           >
//             {loading ? 'Analyzing...' : '🤖 Get AI Recommendations'}
//           </button>
//           <button 
//             onClick={handleClear}
//             className="btn-clear"
//             disabled={loading}
//           >
//             Clear
//           </button>
//         </div>
//       </div>

//       {recommendations && recommendations.aiRecommendations && (
//         <div className="recommendations-result">
//           <h4>Recommended Employees</h4>
          
//           {recommendations.aiRecommendations.recommendations && 
//            recommendations.aiRecommendations.recommendations.length > 0 ? (
//             <div className="recommendations-list">
//               {recommendations.aiRecommendations.recommendations.map((rec, index) => (
//                 <div key={index} className="recommendation-card">
//                   <div className="card-header">
//                     <div className="employee-info">
//                       <h5>#{index + 1} {rec.name}</h5>
//                       <span className="designation">{rec.designation}</span>
//                     </div>
//                     <div className="match-badge">
//                       {rec.matchPercentage}% Match
//                     </div>
//                   </div>
//                   <div className="card-body">
//                     <p className="reason">{rec.reason}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <div className="raw-response">
//               <p>{recommendations.aiRecommendations.rawResponse}</p>
//             </div>
//           )}

//           {recommendations.aiRecommendations.additionalNotes && (
//             <div className="additional-notes">
//               <h5>Additional Notes:</h5>
//               <p>{recommendations.aiRecommendations.additionalNotes}</p>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EmployeeRecommender;
