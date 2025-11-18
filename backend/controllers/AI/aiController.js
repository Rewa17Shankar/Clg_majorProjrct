// import { generateContent, generateContentWithContext } from "../../config/geminiClient.js";
// import supabase from "../../config/supabaseClient.js";

// // HR: Generate Job Description
// export const generateJobDescription = async (req, res) => {
//   try {
//     console.log('🔍 Generate Job Description - Request received');
//     console.log('Request body:', req.body);
//     console.log('User from JWT:', req.user);

//     const { 
//       jobTitle, 
//       department, 
//       experienceLevel, 
//       keySkills, 
//       responsibilities,
//       location 
//     } = req.body;

//     if (!jobTitle || !department) {
//       console.log('❌ Missing required fields');
//       return res.status(400).json({ 
//         error: "Job title and department are required" 
//       });
//     }

//     console.log('✅ Validation passed, creating prompt...');

//     const prompt = `Generate a professional and comprehensive job description for the following position:

// Job Title: ${jobTitle}
// Department: ${department}
// Experience Level: ${experienceLevel || "Not specified"}
// Key Skills Required: ${keySkills || "Not specified"}
// Basic Responsibilities: ${responsibilities || "Not specified"}
// Location: ${location || "Not specified"}

// Please provide:
// 1. A compelling job overview (2-3 sentences)
// 2. Detailed key responsibilities (5-7 points)
// 3. Required qualifications and skills (5-7 points)
// 4. Nice-to-have qualifications (3-4 points)
// 5. What we offer section (3-4 points)

// Format the response in a professional manner suitable for a job posting.`;

//     console.log('🤖 Calling Gemini API...');
    
//     const generatedDescription = await generateContent(prompt);

//     console.log('✅ Gemini API response received');
//     console.log('Description length:', generatedDescription.length);

//     res.status(200).json({
//       success: true,
//       jobDescription: generatedDescription,
//       metadata: {
//         jobTitle,
//         department,
//         generatedAt: new Date().toISOString()
//       }
//     });

//   } catch (error) {
//     console.error("❌ Error in generateJobDescription:", error);
//     console.error("Error stack:", error.stack);
//     console.error("Error message:", error.message);
    
//     res.status(500).json({ 
//       error: "Failed to generate job description",
//       details: error.message,
//       type: error.name
//     });
//   }
// };

// // Manager: Recommend Employee for Task
// export const recommendEmployeeForTask = async (req, res) => {
//   try {
//     console.log('🔍 Recommend Employee - Request received');
    
//     const { 
//       taskTitle, 
//       taskDescription, 
//       requiredSkills, 
//       estimatedHours,
//       priority,
//       departmentId 
//     } = req.body;

//     if (!taskTitle || !departmentId) {
//       return res.status(400).json({ 
//         error: "Task title and department ID are required" 
//       });
//     }

//     console.log('📊 Fetching employees from department:', departmentId);

//     // Fetch employees from the department with their skills
//     const { data: employees, error: employeeError } = await supabase
//       .from('employees')
//       .select(`
//         id,
//         first_name,
//         last_name,
//         email,
//         designation_id,
//         designations(designation_name),
//         employee_skills:skills(skill_name, proficiency_level)
//       `)
//       .eq('department_id', departmentId)
//       .eq('status', 'active');

//     if (employeeError) {
//       console.error('❌ Database error:', employeeError);
//       throw new Error("Failed to fetch employees");
//     }

//     if (!employees || employees.length === 0) {
//       console.log('⚠️ No employees found in department');
//       return res.status(404).json({ 
//         error: "No active employees found in the department" 
//       });
//     }

//     console.log(`✅ Found ${employees.length} employees`);

//     // Prepare employee data for AI analysis
//     const employeeList = employees.map(emp => ({
//       id: emp.id,
//       name: `${emp.first_name} ${emp.last_name}`,
//       designation: emp.designations?.designation_name || "Not specified",
//       skills: emp.employee_skills?.map(s => `${s.skill_name} (${s.proficiency_level})`) || []
//     }));

//     const prompt = `You are an AI task assignment assistant. Based on the following task details and available employees, recommend the top 3 most suitable employees for this task.

// Task Details:
// - Title: ${taskTitle}
// - Description: ${taskDescription || "Not provided"}
// - Required Skills: ${requiredSkills || "Not specified"}
// - Estimated Hours: ${estimatedHours || "Not specified"}
// - Priority: ${priority || "Medium"}

// Available Employees:
// ${JSON.stringify(employeeList, null, 2)}

// Please analyze each employee's skills and designation, then provide:
// 1. Top 3 recommended employees (include employee ID, name, and designation)
// 2. Reason for each recommendation (2-3 sentences explaining why they're suitable)
// 3. Skill match percentage for each recommended employee
// 4. Any additional notes or suggestions for successful task completion

// Format the response as JSON with the following structure:
// {
//   "recommendations": [
//     {
//       "employeeId": "id",
//       "name": "name",
//       "designation": "designation",
//       "matchPercentage": 85,
//       "reason": "explanation"
//     }
//   ],
//   "additionalNotes": "notes"
// }`;

//     console.log('🤖 Calling Gemini API for recommendations...');
//     const aiResponse = await generateContent(prompt);
    
//     // Try to parse JSON response, fallback to text if parsing fails
//     let parsedResponse;
//     try {
//       const jsonMatch = aiResponse.match(/``````/);
//       const jsonString = jsonMatch ? jsonMatch[1] : aiResponse;
//       parsedResponse = JSON.parse(jsonString);
//     } catch (parseError) {
//       console.log('⚠️ Could not parse JSON, returning raw response');
//       parsedResponse = {
//         rawResponse: aiResponse,
//         recommendations: []
//       };
//     }

//     res.status(200).json({
//       success: true,
//       taskDetails: { taskTitle, taskDescription, requiredSkills },
//       aiRecommendations: parsedResponse,
//       availableEmployeesCount: employees.length
//     });

//   } catch (error) {
//     console.error("❌ Error in recommendEmployeeForTask:", error);
//     res.status(500).json({ 
//       error: "Failed to recommend employees for task",
//       details: error.message 
//     });
//   }
// };

// // Manager: Analyze Employee Feedback
// export const analyzeEmployeeFeedback = async (req, res) => {
//   try {
//     console.log('🔍 Analyze Feedback - Request received');
    
//     const { 
//       employeeId,
//       feedbackText,
//       feedbackType,
//       rating 
//     } = req.body;

//     if (!employeeId || !feedbackText) {
//       return res.status(400).json({ 
//         error: "Employee ID and feedback text are required" 
//       });
//     }

//     console.log('📊 Fetching employee:', employeeId);

//     // Fetch employee details
//     const { data: employee, error: employeeError } = await supabase
//       .from('employees')
//       .select(`
//         id,
//         first_name,
//         last_name,
//         designation_id,
//         designations(designation_name)
//       `)
//       .eq('id', employeeId)
//       .single();

//     if (employeeError || !employee) {
//       console.error('❌ Employee not found:', employeeError);
//       return res.status(404).json({ error: "Employee not found" });
//     }

//     console.log('✅ Employee found:', employee.first_name, employee.last_name);

//     const prompt = `You are an HR feedback analysis assistant. Analyze the following employee feedback and provide insights:

// Employee Details:
// - Name: ${employee.first_name} ${employee.last_name}
// - Designation: ${employee.designations?.designation_name || "Not specified"}

// Feedback Details:
// - Type: ${feedbackType || "General"}
// - Rating: ${rating ? `${rating}/5` : "Not provided"}
// - Feedback Text: "${feedbackText}"

// Please provide:
// 1. Sentiment Analysis (Positive, Neutral, or Negative with percentage)
// 2. Key Strengths identified (3-5 points)
// 3. Areas for Improvement (3-5 points)
// 4. Actionable Recommendations for the manager (3-5 specific actions)
// 5. Overall Summary (2-3 sentences)

// Format the response as JSON:
// {
//   "sentiment": {
//     "type": "Positive/Neutral/Negative",
//     "confidence": 85
//   },
//   "strengths": ["strength1", "strength2"],
//   "improvements": ["area1", "area2"],
//   "recommendations": ["action1", "action2"],
//   "summary": "overall summary text"
// }`;

//     console.log('🤖 Calling Gemini API for feedback analysis...');
//     const aiResponse = await generateContent(prompt);
    
//     // Try to parse JSON response
//     let parsedResponse;
//     try {
//       const jsonMatch = aiResponse.match(/``````/);
//       const jsonString = jsonMatch ? jsonMatch[1] : aiResponse;
//       parsedResponse = JSON.parse(jsonString);
//     } catch (parseError) {
//       console.log('⚠️ Could not parse JSON, returning raw response');
//       parsedResponse = {
//         rawResponse: aiResponse,
//         sentiment: { type: "Unknown", confidence: 0 }
//       };
//     }

//     res.status(200).json({
//       success: true,
//       employeeName: `${employee.first_name} ${employee.last_name}`,
//       designation: employee.designations?.designation_name,
//       feedbackAnalysis: parsedResponse,
//       analyzedAt: new Date().toISOString()
//     });

//   } catch (error) {
//     console.error("❌ Error in analyzeEmployeeFeedback:", error);
//     res.status(500).json({ 
//       error: "Failed to analyze employee feedback",
//       details: error.message 
//     });
//   }
// };

// // Add this test endpoint at the end
// export const testGemini = async (req, res) => {
//   try {
//     console.log('🧪 Testing Gemini API...');
//     console.log('API Key exists:', !!process.env.GEMINI_API_KEY);
//     console.log('API Key length:', process.env.GEMINI_API_KEY?.length);
    
//     const testPrompt = "Say hello in one sentence.";
//     const response = await generateContent(testPrompt);
    
//     console.log('✅ Gemini test successful');
//     res.json({ 
//       success: true, 
//       message: "Gemini API is working!",
//       response: response 
//     });
//   } catch (error) {
//     console.error('❌ Gemini test failed:', error);
//     res.status(500).json({ 
//       error: "Gemini API test failed",
//       details: error.message,
//       stack: error.stack
//     });
//   }
// };
