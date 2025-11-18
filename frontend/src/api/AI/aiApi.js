import request from '../Api.js';

// HR: Generate Job Description
export const generateJobDescription = async (jobData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    const response = await request('/ai/hr/generate-job-description', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(jobData),
    });
    
    return response;
  } catch (error) {
    console.error('Error generating job description:', error);
    throw { error: error.message || 'Failed to generate job description' };
  }
};

// Manager: Get Employee Recommendations for Task
export const recommendEmployeeForTask = async (taskData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    const response = await request('/ai/manager/recommend-employee', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(taskData),
    });
    
    return response;
  } catch (error) {
    console.error('Error getting employee recommendations:', error);
    throw { error: error.message || 'Failed to get employee recommendations' };
  }
};

// Manager: Analyze Employee Feedback
export const analyzeEmployeeFeedback = async (feedbackData) => {
  try {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    
    const response = await request('/ai/manager/analyze-feedback', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
      body: JSON.stringify(feedbackData),
    });
    
    return response;
  } catch (error) {
    console.error('Error analyzing feedback:', error);
    throw { error: error.message || 'Failed to analyze feedback' };
  }
};
