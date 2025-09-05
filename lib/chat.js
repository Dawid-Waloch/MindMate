import { api } from "./openai";

export const main = async (prompt) => {
    const result = await api.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
        max_tokens: 512,
    });

    return result.choices[0].message.content;
};