import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export interface RecommendationResult {
  suggestion: string;
  reasoning: string;
}

/**
 * Uses Gemini to provide a food recommendation based on a user query or mood.
 */
export const getFoodRecommendation = async (userQuery: string): Promise<string> => {
  if (!ai) {
    return "API Key not configured. Unable to get AI recommendations.";
  }

  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a helpful food assistant for a Chinese food voucher app called "Shi Hui Bao" (食惠宝).
      The user is asking: "${userQuery}".
      
      Current categories available: Hotpot, Chinese Food, BBQ, Soup, Snacks.
      
      Provide a short, appetizing recommendation (under 50 words) suggesting what they should eat, 
      and mention one of the categories if relevant. Be enthusiastic and friendly (like a food blogger).
      Reply in Chinese.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
    });

    return response.text || "抱歉，我现在有点饿，想不出来推荐什么。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "网络繁忙，请稍后再试。";
  }
};