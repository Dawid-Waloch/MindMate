import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useStreak } from "../contexts/StreakContext";

const Header = () => {
    const { streak } = useStreak();

    return (
        <div className="flex w-full h-20 max-w-3xl items-center justify-center bg-white/20 rounded-lg shadow-lg ">
            <div className="flex-1 pl-5 text-2xl">
                <Link href={'/'}>MindMate</Link>
            </div>
            <div className="flex pr-5 text-xl gap-3 items-center">
                <Link href={'/chat'}>
                    <div className="bg-white/20 rounded-lg p-2">💬 Chat</div>
                </Link>
                <Link href={'/streak'}>
                    <div className="bg-white/20 rounded-lg p-2">{streak == 0 ? "" : streak}🔥 Streak</div>
                </Link>
                <Link href={'/breath'}>
                    <div className="bg-white/20 rounded-lg p-2">🌬️ Breath</div>
                </Link>
                <Link href={'/help'}>
                    <div className="bg-red-600 rounded-lg p-2">🚨 Help</div>
                </Link>
            </div>
        </div>
    );
}

export default Header;