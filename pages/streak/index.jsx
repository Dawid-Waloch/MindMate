import React from "react";
import Header from "../../components/Header";

const StreakPage = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex justify-center items-center min-h-screen">
                <div>Streak page</div>
            </div>
        </div>
    );
}

export default StreakPage;