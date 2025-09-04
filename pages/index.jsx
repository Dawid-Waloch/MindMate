import Link from "next/link";
import React from "react"

const HomePage = () => {

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <h1 className="text-5xl font-bold mb-4">MindMate</h1>
            <h2 className="text-xl mb-8 text-center">Breathe. Share. Find peace.</h2>    
            <Link href={'/chat'}>
                <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition">
                    Start Chat
                </button>
            </Link>
        </div>
    );
}

export default HomePage;