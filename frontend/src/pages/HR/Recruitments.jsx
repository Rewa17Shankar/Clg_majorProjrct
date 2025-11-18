import  { useState } from 'react';
import JobDescriptionGenerator from '../../component/AI/JobDescriptionGenerator';
import './Recruitments.css';

const Recruitments = () => {
  const [showAIGenerator, setShowAIGenerator] = useState(false);
  const [jobDescription, setJobDescription] = useState('');

  const handleDescriptionGenerated = (description) => {
    setJobDescription(description);
    // You can now use this description in your job posting form
  };

  return (
    <div className="recruitment-container">
      <div className="page-header">
        <h2>Recruitment Management</h2>
        <button 
          onClick={() => setShowAIGenerator(!showAIGenerator)}
          className="btn-ai-toggle"
        >
          {showAIGenerator ? 'Hide' : 'Show'} AI Assistant
        </button>
      </div>

      {showAIGenerator && (
        <div className="ai-section">
          <JobDescriptionGenerator 
            onDescriptionGenerated={handleDescriptionGenerated}
          />
        </div>
      )}

      <div className="recruitment-content">
        {/* Your existing recruitment components */}
        {/* Job posting form, applicant list, etc. */}
      </div>
    </div>
  );
};

export default Recruitments;
