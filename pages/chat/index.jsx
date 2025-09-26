import React, { useEffect, useState } from "react";
import Header from "../../components/Header";


const getChatResponse = async (userPrompt) => {
    const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userPrompt }),
    });

    const data = await res.json();

    return data.text;
};

const ChatPage = () => {
    const [userPrompt, setUserPrompt] = useState("");
    const [botChatHistory, setbotChatHistory] = useState([]);

    useEffect(() => {
        const storedChatWithBot = sessionStorage.getItem("chatWithBotHistory");

        if(storedChatWithBot) {
            setbotChatHistory(JSON.parse(storedChatWithBot));
        } else {
            setbotChatHistory([]);
        }
    }, [])

    const getResponseFromBot = async (userPrompt) => {
        setbotChatHistory(prev => {
            const newHistory = [...prev, { text: userPrompt, sender: "user" }];
            sessionStorage.setItem("chatWithBotHistory", JSON.stringify(newHistory));
            return newHistory;
        });
        setUserPrompt("");

        try {
            const response = await getChatResponse(userPrompt);
            setbotChatHistory(prev => {
                const newHistory = [...prev, { text: response, sender: "bot" }];
                sessionStorage.setItem("chatWithBotHistory", JSON.stringify(newHistory));
                return newHistory;
            });
        } catch (error) {
            console.error(error);
            setbotChatHistory(prev => {
                const newHistory = [...prev, { text: "Error fetching chat response.", sender: "bot" }];
                sessionStorage.setItem("chatWithBotHistory", JSON.stringify(newHistory));
                return newHistory;
            });
        }     
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="mt-3 font-bold text-2xl">Chat with our AI supporter</div>
                <div className="flex flex-col w-full max-w-3xl mt-10">
                    <div className="flex flex-col h-96 w-full overflow-y-auto p-4 text-justify bg-white/10 text-white rounded-lg shadow-md mb-9">
                        {botChatHistory && botChatHistory.map((msg, idx) => (
                            msg.sender == "user" ? <p className="self-end bg-white/20 p-3 rounded-lg mb-3 w-fit ml-50" key={idx}>{msg.text}</p> : <p className="self-start bg-white/20 p-3 rounded-lg mb-3 w-fit mr-50" key={idx}>{msg.text}</p>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-white/10 rounded-full shadow-md">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            onChange={(event) => setUserPrompt(event.target.value)}
                            value={userPrompt}
                            className="flex-1 px-4 py-2 rounded-full bg-white/20 placeholder-white text-white border-none focus:outline-none focus:ring-2 focus:ring-white/50"
                        />
                        <button
                            className="bg-white/30 hover:bg-white/50 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
                            onClick={() => getResponseFromBot(userPrompt)}
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