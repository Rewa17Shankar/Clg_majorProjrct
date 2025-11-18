// import React, { useState } from 'react';
// import { analyzeEmployeeFeedback } from '../../api/AI/aiApi';
// import './FeedbackAnalyzer.css';

// const FeedbackAnalyzer = ({ employeeId, employeeName }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     feedbackText: '',
//     feedbackType: 'performance',
//     rating: ''
//   });
//   const [analysis, setAnalysis] = useState(null);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleAnalyze = async () => {
//     if (!formData.feedbackText) {
//       setError('Feedback text is required');
//       return;
//     }

//     if (!employeeId) {
//       setError('Employee ID is required');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const result = await analyzeEmployeeFeedback({
//         ...formData,
//         employeeId
//       });
//       setAnalysis(result);
//     } catch (err) {
//       setError(err.error || 'Failed to analyze feedback');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       feedbackText: '',
//       feedbackType: 'performance',
//       rating: ''
//     });
//     setAnalysis(null);
//     setError(null);
//   };

//   const getSentimentColor = (sentiment) => {
//     switch(sentiment?.toLowerCase()) {
//       case 'positive': return '#10b981';
//       case 'negative': return '#ef4444';
//       default: return '#6b7280';
//     }
//   };

//   return (
//     <div className="feedback-analyzer">
//       <div className="analyzer-header">
//         <h3>AI Feedback Analyzer</h3>
//         {employeeName && <p>Analyzing feedback for: <strong>{employeeName}</strong></p>}
//       </div>

//       <div className="analyzer-form">
//         <div className="form-row">
//           <div className="form-group">
//             <label>Feedback Type</label>
//             <select
//               name="feedbackType"
//               value={formData.feedbackType}
//               onChange={handleChange}
//             >
//               <option value="performance">Performance</option>
//               <option value="behavior">Behavior</option>
//               <option value="general">General</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Rating (Optional)</label>
//             <select
//               name="rating"
//               value={formData.rating}
//               onChange={handleChange}
//             >
//               <option value="">Select rating</option>
//               <option value="1">1 - Poor</option>
//               <option value="2">2 - Below Average</option>
//               <option value="3">3 - Average</option>
//               <option value="4">4 - Good</option>
//               <option value="5">5 - Excellent</option>
//             </select>
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Feedback Text *</label>
//           <textarea
//             name="feedbackText"
//             value={formData.feedbackText}
//             onChange={handleChange}
//             placeholder="Enter detailed feedback about the employee..."
//             rows="5"
//             required
//           />
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <div className="analyzer-actions">
//           <button 
//             onClick={handleAnalyze} 
//             disabled={loading}
//             className="btn-analyze"
//           >
//             {loading ? 'Analyzing...' : '🔍 Analyze with AI'}
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

//       {analysis && analysis.feedbackAnalysis && (
//         <div className="analysis-result">
//           <h4>Analysis Results</h4>

//           {/* Sentiment Section */}
//           {analysis.feedbackAnalysis.sentiment && (
//             <div className="analysis-section sentiment-section">
//               <h5>Sentiment Analysis</h5>
//               <div className="sentiment-display">
//                 <div 
//                   className="sentiment-indicator"
//                   style={{ 
//                     backgroundColor: getSentimentColor(analysis.feedbackAnalysis.sentiment.type)
//                   }}
//                 >
//                   {analysis.feedbackAnalysis.sentiment.type}
//                 </div>
//                 <div className="confidence-bar">
//                   <div 
//                     className="confidence-fill"
//                     style={{ 
//                       width: `${analysis.feedbackAnalysis.sentiment.confidence}%`,
//                       backgroundColor: getSentimentColor(analysis.feedbackAnalysis.sentiment.type)
//                     }}
//                   />
//                 </div>
//                 <span className="confidence-text">
//                   {analysis.feedbackAnalysis.sentiment.confidence}% Confidence
//                 </span>
//               </div>
//             </div>
//           )}

//           {/* Strengths Section */}
//           {analysis.feedbackAnalysis.strengths && 
//            analysis.feedbackAnalysis.strengths.length > 0 && (
//             <div className="analysis-section strengths-section">
//               <h5>✨ Key Strengths</h5>
//               <ul className="points-list">
//                 {analysis.feedbackAnalysis.strengths.map((strength, index) => (
//                   <li key={index}>{strength}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Improvements Section */}
//           {analysis.feedbackAnalysis.improvements && 
//            analysis.feedbackAnalysis.improvements.length > 0 && (
//             <div className="analysis-section improvements-section">
//               <h5>📈 Areas for Improvement</h5>
//               <ul className="points-list">
//                 {analysis.feedbackAnalysis.improvements.map((improvement, index) => (
//                   <li key={index}>{improvement}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Recommendations Section */}
//           {analysis.feedbackAnalysis.recommendations && 
//            analysis.feedbackAnalysis.recommendations.length > 0 && (
//             <div className="analysis-section recommendations-section">
//               <h5>💡 Actionable Recommendations</h5>
//               <ul className="points-list">
//                 {analysis.feedbackAnalysis.recommendations.map((rec, index) => (
//                   <li key={index}>{rec}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {/* Summary Section */}
//           {analysis.feedbackAnalysis.summary && (
//             <div className="analysis-section summary-section">
//               <h5>📝 Overall Summary</h5>
//               <p>{analysis.feedbackAnalysis.summary}</p>
//             </div>
//           )}

//           {/* Raw Response Fallback */}
//           {analysis.feedbackAnalysis.rawResponse && (
//             <div className="analysis-section raw-section">
//               <h5>Analysis Details</h5>
//               <pre>{analysis.feedbackAnalysis.rawResponse}</pre>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeedbackAnalyzer;
