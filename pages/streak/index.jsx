import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Error from "../../components/Error";
import { useStreak } from "../../contexts/StreakContext";

export const parseDate = (date) => {
    const [day, month, year] = date.split(".").map(Number);
    return new Date(year, month - 1, day);
};

const StreakPage = () => {
    const [mood, setMood] = useState("");
    const [journal, setJournal] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const { updateStreak } = useStreak();

    useEffect(() => {
        setJournal(JSON.parse(localStorage.getItem("journal")));
    }, [])

    const addMoodToJournal = (mood, setJournal, setErrorMessage) => {
        const prevJournalEntries = JSON.parse(localStorage.getItem("journal") || "[]");
        const lastJournalEntry = prevJournalEntries[prevJournalEntries.length - 1] ?? null;
        const prevDate = lastJournalEntry ? parseDate(lastJournalEntry.date) : null;
        // const todayDate = parseDate(new Date(Date.now()).toLocaleDateString("pl-PL"));
        const todayDate = parseDate("30.09.2025");
        
        if(!prevDate || prevDate.getTime() != todayDate.getTime()) {
            const journalEntry = {
                // date: new Date(Date.now()).toLocaleDateString("pl-PL"),
                date: todayDate.toLocaleDateString("pl-PL"),
                entry: mood,
            };

            const updatedJournal = [...prevJournalEntries, journalEntry];
            localStorage.setItem("journal", JSON.stringify(updatedJournal));

            const streakLvl = JSON.parse(localStorage.getItem("streakLvl")) ?? 0;
            const diffDates =  prevDate ? todayDate.getTime() - prevDate.getTime() : 0;
            diffDates != (1000 * 60 * 60 * 24) || (streak == 0) ? localStorage.setItem("streakLvl", "1") : localStorage.setItem("streakLvl", JSON.stringify(streakLvl + 1));

            setJournal(updatedJournal);
            updateStreak(JSON.parse(localStroage.getItem("streakLvl")));
        } else {
            setErrorMessage("You can't post entries in journal more than once per day");
        }
    }

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="text-2xl text-white font-bold mt-3">Mood Journal</div>
                <div className="grid grid-cols-2 w-full gap-4 max-h-96 overflow-y-auto max-w-3xl mt-5 mb-10 rounded-lg">
                    {journal && journal.map((element, id) => (
                        <div key={id} className="h-40 bg-white/10 p-4 rounded-lg shadow-lg overflow-y-auto text-center">
                            <div className="bg-white/20 rounded-lg">{element.date}</div>
                            <div className="text-justify bg-white/20 rounded-lg p-2 mt-2">{element.entry}</div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex items-center gap-2 p-4 bg-white/10 w-full max-w-3xl rounded-full shadow-md">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        onChange={(event) => setMood(event.target.value)}
                        value={mood}
                        className="flex-1 px-4 py-2 rounded-full bg-white/20 placeholder-white text-white border-none focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button
                        className="bg-white/30 hover:bg-white/50 text-white font-semibold px-5 py-2 rounded-full shadow-md transition"
                        onClick={() => addMoodToJournal(mood, setJournal, setErrorMessage)}
                    >
                        Send
                    </button>
                </div>
                <div>
                    <Error message={errorMessage} onClose={() => setErrorMessage("")} />
                </div>
            </div>
        </div>
    );
}

export default StreakPage;