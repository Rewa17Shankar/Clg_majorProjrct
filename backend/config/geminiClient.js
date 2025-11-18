// import { GoogleGenerativeAI } from "@google/generative-ai";
// import dotenv from "dotenv";

// dotenv.config();

// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// // Get the Gemini model
// export const getGeminiModel = (modelName = "gemini-1.5-flash") => {
//   return genAI.getGenerativeModel({ model: modelName });
// };

// // Generate content from prompt
// export const generateContent = async (prompt) => {
//   try {
//     const model = getGeminiModel();
//     const result = await model.generateContent(prompt);
//     const response = await result.response;
//     return response.text();
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     throw new Error("Failed to generate content from Gemini API");
//   }
// };

// // Generate content with context (for multi-turn conversations)
// export const generateContentWithContext = async (history, newPrompt) => {
//   try {
//     const model = getGeminiModel();
//     const chat = model.startChat({
//       history: history,
//       generationConfig: {
//         maxOutputTokens: 1000,
//       },
//     });
    
//     const result = await chat.sendMessage(newPrompt);
//     const response = await result.response;
//     return response.text();
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     throw new Error("Failed to generate content with context");
//   }
// };
