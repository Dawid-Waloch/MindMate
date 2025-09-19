import React, { createContext, useContext, useEffect, useState } from "react"
import { parseDate } from "../pages/streak";

const StreakContext = createContext();

export const StreakProvider = ({ children }) => {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        const streakLvl = localStorage.getItem("streakLvl");
        
        const prevJournalEntries = JSON.parse(localStorage.getItem("journal") || "[]");
        const lastJournalEntry = prevJournalEntries[prevJournalEntries.length - 1] ?? null;
        const todayDate = parseDate("8.10.2025");
        const diffDates = lastJournalEntry ? todayDate.getTime() - parseDate(lastJournalEntry.date).getTime() : todayDate.getTime();
        lastJournalEntry && (diffDates > (1000 * 60 * 60 * 24) || (streakLvl == null)) ? updateStreak(0) : updateStreak(JSON.parse(streakLvl));
    }, [])

    const updateStreak = (newStreak) => {
        setStreak(newStreak);
        localStorage.setItem("streakLvl", JSON.stringify(newStreak));
    };

    return (
        <StreakContext.Provider value={{ streak, updateStreak }}>
            {children}
        </StreakContext.Provider>
    )
}

export const useStreak = () => useContext(StreakContext);