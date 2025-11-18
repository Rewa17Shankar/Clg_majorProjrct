// import  { useState } from 'react';
// import { generateJobDescription } from '../../api/AI/aiApi';
// import './JobDescriptionGenerator.css';

// const JobDescriptionGenerator = ({ onDescriptionGenerated }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({
//     jobTitle: '',
//     department: '',
//     experienceLevel: '',
//     keySkills: '',
//     responsibilities: '',
//     location: ''
//   });
//   const [generatedDescription, setGeneratedDescription] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleGenerate = async () => {
//     if (!formData.jobTitle || !formData.department) {
//       setError('Job title and department are required');
//       return;
//     }

//     setLoading(true);
//     setError(null);

//     try {
//       const result = await generateJobDescription(formData);
//       setGeneratedDescription(result.jobDescription);
      
//       if (onDescriptionGenerated) {
//         onDescriptionGenerated(result.jobDescription);
//       }
//     } catch (err) {
//       setError(err.error || 'Failed to generate job description');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClear = () => {
//     setFormData({
//       jobTitle: '',
//       department: '',
//       experienceLevel: '',
//       keySkills: '',
//       responsibilities: '',
//       location: ''
//     });
//     setGeneratedDescription('');
//     setError(null);
//   };

//   const handleCopyToClipboard = () => {
//     navigator.clipboard.writeText(generatedDescription);
//     alert('Job description copied to clipboard!');
//   };

//   return (
//     <div className="job-description-generator">
//       <div className="generator-header">
//         <h3>AI Job Description Generator</h3>
//         <p>Fill in the basic details and let AI create a comprehensive job description</p>
//       </div>

//       <div className="generator-form">
//         <div className="form-row">
//           <div className="form-group">
//             <label>Job Title *</label>
//             <input
//               type="text"
//               name="jobTitle"
//               value={formData.jobTitle}
//               onChange={handleChange}
//               placeholder="e.g., Senior Software Engineer"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Department *</label>
//             <input
//               type="text"
//               name="department"
//               value={formData.department}
//               onChange={handleChange}
//               placeholder="e.g., Engineering"
//               required
//             />
//           </div>
//         </div>

//         <div className="form-row">
//           <div className="form-group">
//             <label>Experience Level</label>
//             <select
//               name="experienceLevel"
//               value={formData.experienceLevel}
//               onChange={handleChange}
//             >
//               <option value="">Select level</option>
//               <option value="Entry Level">Entry Level (0-2 years)</option>
//               <option value="Mid Level">Mid Level (2-5 years)</option>
//               <option value="Senior Level">Senior Level (5-8 years)</option>
//               <option value="Lead Level">Lead Level (8+ years)</option>
//             </select>
//           </div>

//           <div className="form-group">
//             <label>Location</label>
//             <input
//               type="text"
//               name="location"
//               value={formData.location}
//               onChange={handleChange}
//               placeholder="e.g., Remote / Mumbai, India"
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <label>Key Skills (comma separated)</label>
//           <input
//             type="text"
//             name="keySkills"
//             value={formData.keySkills}
//             onChange={handleChange}
//             placeholder="e.g., React, Node.js, MongoDB, REST APIs"
//           />
//         </div>

//         <div className="form-group">
//           <label>Basic Responsibilities (optional)</label>
//           <textarea
//             name="responsibilities"
//             value={formData.responsibilities}
//             onChange={handleChange}
//             placeholder="Briefly describe the main responsibilities..."
//             rows="3"
//           />
//         </div>

//         {error && <div className="error-message">{error}</div>}

//         <div className="generator-actions">
//           <button 
//             onClick={handleGenerate} 
//             disabled={loading}
//             className="btn-generate"
//           >
//             {loading ? 'Generating...' : '✨ Generate with AI'}
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

//       {generatedDescription && (
//         <div className="generated-content">
//           <div className="content-header">
//             <h4>Generated Job Description</h4>
//             <button onClick={handleCopyToClipboard} className="btn-copy">
//               📋 Copy
//             </button>
//           </div>
//           <div className="content-body">
//             <pre>{generatedDescription}</pre>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default JobDescriptionGenerator;




import { useState } from 'react';
import { generateJobDescription } from '../../api/AI/aiApi';
import './JobDescriptionGenerator.css';

const JobDescriptionGenerator = ({ onDescriptionGenerated }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    jobTitle: '',
    department: '',
    experienceLevel: '',
    keySkills: '',
    responsibilities: '',
    location: ''
  });
  const [generatedDescription, setGeneratedDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGenerate = async () => {
    if (!formData.jobTitle || !formData.department) {
      setError('Job title and department are required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      console.log('🔄 Generating job description with data:', formData);
      
      const result = await generateJobDescription(formData);
      
      console.log('✅ Generated result:', result);
      
      // The response structure from your backend
      if (result.success && result.jobDescription) {
        setGeneratedDescription(result.jobDescription);
        
        if (onDescriptionGenerated) {
          onDescriptionGenerated(result.jobDescription);
        }
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      console.error('❌ Error in handleGenerate:', err);
      setError(err.error || err.message || 'Failed to generate job description');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      jobTitle: '',
      department: '',
      experienceLevel: '',
      keySkills: '',
      responsibilities: '',
      location: ''
    });
    setGeneratedDescription('');
    setError(null);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(generatedDescription);
    alert('Job description copied to clipboard!');
  };

  return (
    <div className="job-description-generator">
      <div className="generator-header">
        <h3>AI Job Description Generator</h3>
        <p>Fill in the basic details and let AI create a comprehensive job description</p>
      </div>

      <div className="generator-form">
        <div className="form-row">
          <div className="form-group">
            <label>Job Title *</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              placeholder="e.g., Senior Software Engineer"
              required
            />
          </div>

          <div className="form-group">
            <label>Department *</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="e.g., Engineering"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Experience Level</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
            >
              <option value="">Select level</option>
              <option value="Entry Level">Entry Level (0-2 years)</option>
              <option value="Mid Level">Mid Level (2-5 years)</option>
              <option value="Senior Level">Senior Level (5-8 years)</option>
              <option value="Lead Level">Lead Level (8+ years)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Remote / Mumbai, India"
            />
          </div>
        </div>

        <div className="form-group">
          <label>Key Skills (comma separated)</label>
          <input
            type="text"
            name="keySkills"
            value={formData.keySkills}
            onChange={handleChange}
            placeholder="e.g., React, Node.js, MongoDB, REST APIs"
          />
        </div>

        <div className="form-group">
          <label>Basic Responsibilities (optional)</label>
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            placeholder="Briefly describe the main responsibilities..."
            rows="3"
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="generator-actions">
          <button 
            onClick={handleGenerate} 
            disabled={loading}
            className="btn-generate"
          >
            {loading ? 'Generating...' : '✨ Generate with AI'}
          </button>
          <button 
            onClick={handleClear}
            className="btn-clear"
            disabled={loading}
          >
            Clear
          </button>
        </div>
      </div>

      {generatedDescription && (
        <div className="generated-content">
          <div className="content-header">
            <h4>Generated Job Description</h4>
            <button onClick={handleCopyToClipboard} className="btn-copy">
              📋 Copy
            </button>
          </div>
          <div className="content-body">
            <pre>{generatedDescription}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobDescriptionGenerator;
