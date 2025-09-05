import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <div className="flex w-full h-20 max-w-3xl items-center justify-center  bg-white/20 rounded-lg shadow-lg ">
            <Link className="flex-1" href={'/'}>
                <div className="pl-5 text-2xl">
                    MindMate
                </div>
            </Link>
            <div className="flex pr-5 text-xl gap-3 items-center">
                <Link href={'/chat'}>
                    <div className="bg-white/20 rounded-lg p-2">💬 Chat</div>
                </Link>
                <Link href={'/streak'}>
                    <div className="bg-white/20 rounded-lg p-2">🔥 Streak</div>
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