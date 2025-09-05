import React, { useState } from "react";
import Header from "../../components/Header";
import { main } from "../../lib/chat";


// const sendMessageToBot = async ({ setBotMessage, prompt }) => {
//     const message = await main(prompt);
//     setBotMessage(prev => [...prev, message]);
// };

const ChatPage = () => {
    const [prompt, setPrompt] = useState("");
    const [botMessage, setBotMessage] = useState([]);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <div className="flex flex-col w-full max-w-3xl">
                    <div className="h-96 w-full overflow-y-auto p-4 text-justify bg-white/10 text-white rounded-lg shadow-md mb-9">
                        {botMessage.map((msg, idx) => (
                            <p key={idx}>{msg}<br /></p>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-white/10 rounded-full shadow-md">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            onChange={(event) => setPrompt(event.target.value)}
                            value={prompt}
                            className="flex-1 px-4 py-2 rounded-full bg-white/20 placeholder-white text-white border-none focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button
                            className="bg-white/30 hover:bg-white/50 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
                            onClick={() => sendMessageToBot(prompt, setBotMessage)}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatPage;