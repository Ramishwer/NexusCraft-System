
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProjectConsultation = async (prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the lead solutions architect at NexusCraft Systems. Your goal is to provide concise, expert-level feedback on software project ideas. Be professional, slightly futuristic, and always suggest a high-level tech stack (e.g., React, Node, PostgreSQL, etc.) and a possible timeline. If the request is not related to software, politely redirect them.",
        temperature: 0.7,
      },
    });
    return response.text || "I'm having trouble connecting to my neural network. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Our systems are currently under heavy load. Please reach out via the contact form!";
  }
};
