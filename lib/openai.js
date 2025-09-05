import { OpenAI } from "openai";

export const api = new OpenAI({
    baseURL: 'https://api.aimlapi.com/v1',
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    dangerouslyAllowBrowser: true
});