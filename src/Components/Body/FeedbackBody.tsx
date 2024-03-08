import React from "react";

export default function FeedBackBody () {
    return(
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-8 font-mono">
            <div className="h-32">
                <p className="text-base text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>
            <div className="h-32 border border-gray-700 lg:col-span-2">
                <textarea 
                    className="outline-none px-2 py-2"
                    name="feedback"
                    placeholder="Lorem ipsum dolor sit amet..."
                >
                </textarea>
            </div>
        </div>
    );
}