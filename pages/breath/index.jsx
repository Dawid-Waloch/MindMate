import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";

const BreathPage = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [exerciseOn, setExercieOn] = useState(false);
    const [showInitialStep, setShowInitialStep] = useState(true);
    const timeoutRef = useRef(null);
    const initialSteps = useRef([
        { text: "Prepare yourself to exercise", scale: 0, duration: 4000 },
        { text: "Inhale through nose", scale: 1, duration: 4000 },
        { text: "Hold", scale: 1, duration: 7000 },
        { text: "Exhale", scale: 0, duration: 8000 },
        { text: "Hold", scale: 0, duration: 2000 },
    ]);
    const [steps, setSteps] = useState(initialSteps.current);
    const displaySteps = showInitialStep ? steps : steps.slice(1);

    useEffect(() => {
        if(!exerciseOn) {
            clearInterval(timeoutRef.current);
            setCurrentStep(0);
            setSteps(initialSteps.current);
            setShowInitialStep(true);
            return;
        }

        const { duration } = displaySteps[currentStep];
        timeoutRef.current = setInterval(() => {
            if(showInitialStep) {
                setShowInitialStep(false);
            } else {
                setCurrentStep((prev) => (prev + 1) % displaySteps.length);
            }
        }, duration)

        return () => clearInterval(timeoutRef.current);
    }, [exerciseOn, currentStep, steps, showInitialStep])

    const { text, scale, duration } = displaySteps[currentStep];

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600 text-white">
            <div className="flex justify-center pt-6">
                <Header />
            </div>
            <div className="flex flex-col items-center min-h-screen">
                <div className="mt-3 text-2xl font-bold">{exerciseOn ? text : "Click Start Exercise"}</div>
                <div className="mt-10 rounded-full bg-white/20 w-80 h-80">
                    <div
                        className={`rounded-full bg-blue-500 transition-transform ease-in-out w-80 h-80`}
                        style={{
                            transition: `transform ${duration}ms ease-in-out`,
                            transform: `scale(${scale})`,
                        }}
                    />
                </div>
                <button
                    className="bg-white/20 p-2 rounded-lg text-xl mt-5"
                    onClick={() => setExercieOn((prev) => !prev)}
                >
                    {exerciseOn ? "Stop" : "Start"} exercise
                </button>
            </div>
        </div>
    );
}

export default BreathPage;