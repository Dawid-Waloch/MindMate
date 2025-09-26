import { OpenAI } from "openai";

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const handler = async (req, res) => {
    if(req.method !== "POST") {
        return res.status(405).json({ error: "Only POST requests allowed" });
    }

    const { prompt } = req.body;

    if(!prompt) {
        return res.status(400).json({ error: "Missing prompt" });
    }

    try {
        const result = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                {
                    role: "system",
                    content: "Jesteś wsparciem psychologicznym. Twoim zadaniem jest empatyczne słuchanie, udzielanie wsparcia i proponowanie ogólnych strategii radzenia sobie z trudnymi emocjami. Zachowuj spokojny i wspierający ton. Dostosuj język swojej wypowiedzi do tego, w którym dostajesz wiadomość od użykwonika."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            max_tokens: 150,
        });
        res.status(200).json({ text: result.choices[0].message.content })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "OpenAI request failed" });
    }
}

export default handler;