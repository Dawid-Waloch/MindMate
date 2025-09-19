import React from "react";
import Header from "../../components/Header";

const HelpPage = () => {
    const polishSupport = [
        "116 123 - Adult Helpline in Mental Crisis (ITAKA)",
        "116 111 - Helpline for Children and Youth (Fundacja Dajemy Dzieciom Siłę)",
        "22 621 22 55 - Crisis Hotline, Warsaw",
        "0801 199 990 - Support for people with addictions"
    ]

    const internationalSupport = [
        "116 123 - Samaritans (UK & Ireland)",
        "988 - National Suicide Prevention Lifeline (USA)",
        "Text “HELLO” to 741741 - Crisis Text Line (USA)",
        "List of support contacts in many countries: https://www.befrienders.org - Befrienders Worldwide"
    ]

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="mt-3 text-2xl font-bold">Support phones</div>
                <div className="grid grid-cols-2 justify-center bg-white/10 h-96 w-full max-w-3xl mt-5 rounded-lg">
                    <div className="flex flex-col bg-white/20 m-3 p-3 rounded-lg">
                        <div className="font-bold text-center mb-2">Polish support (Polska)</div>
                        <div className="text-justify">
                            <ul className="list-inside list-disc">
                                {polishSupport.map(element => (
                                    <li className="mb-1">{element}</li>
                                ))}
                            </ul>
                        </div>  
                    </div>
                    <div className="flex flex-col bg-white/20 m-3 p-3 rounded-lg">
                        <div className="font-bold text-center mb-2">International support</div>
                        <div className="text-justify">
                            <ul className="list-inside list-disc">
                                {internationalSupport.map(element => (
                                    <li className="mb-1">{element}</li>
                                ))}
                            </ul>
                        </div>  







                    </div>
                </div>
            </div>
        </div>
    );
}

export default HelpPage;