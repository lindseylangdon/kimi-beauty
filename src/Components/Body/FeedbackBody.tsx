import React from "react";
import Form from "../Form";
import PageTitle from "../PageTitle";

export default function FeedBackBody () {
 
    return(
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-4 lg:gap-8 font-mono">
            <div className="h-32">
                <PageTitle>
                    We love customer feedback!
                </PageTitle>
                <p className="text-base text-gray-500 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>
            <div className="bg-white p-8 shadow-lg md:col-span-3 lg:col-span-3">
                <Form buttonString="Send Feedback" />
            </div>
        </div>
    );
}