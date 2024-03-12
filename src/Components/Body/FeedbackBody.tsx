import React from "react";
import Form from "../Form";

export default function FeedBackBody () {
 
    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 font-mono">
            <div className="h-32">
                <p className="text-2xl font-bold">
                    We love customer feedback!
                </p>
                <p className="text-base text-gray-500 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>
            <div className="bg-white p-8 shadow-lg md:col-span-3 lg:col-span-3">
                <Form />
            </div>
        </div>
    );
}