import React from "react";

const Error = ({ message, onClose }) => {
    if(!message) return null;

    return (
        <div className="fixed top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-between gap-3">
            <span>{message}</span>
            <button
                className="ml-2 font-bold text-xl leading-none hover:text-gray-200"
                onClick={onClose}
            >
                X
            </button>
        </div>
    );
}

export default Error;