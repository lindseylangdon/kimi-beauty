import React, { useState } from "react";
import Button from "./Button";

interface FormProps {
    buttonString: string;
}

export default function Form ( { buttonString }: FormProps ) {
    const [feedback, setFeedback] = useState(false);

    const handleChange = (e: any) => {
        if (e.target.value.length >= 256) {
            setFeedback(true)
        }
        else {
            setFeedback(false);
        }
    }

    return(
        <form onChange={handleChange} className="space-y-4">
            <div>
                <label className="sr-only" htmlFor="name">Name</label>
                <input
                className="w-full border-b p-3 border-gray-700 text-sm focus:outline-none"
                placeholder="Name"
                autoComplete="name"
                type="text"
                id="name"
                />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                <div>
                <label className="sr-only" htmlFor="email">Email</label>
                <input
                    className="w-full border-b p-3 border-gray-700 text-sm focus:outline-none"
                    placeholder="Email address"
                    type="email"
                    autoComplete="email"
                    id="email"
                />
            </div>

            <div>
                <label className="sr-only" htmlFor="phone">Phone</label>
                <input
                    className="w-full border-b border-gray-700 p-3 text-sm focus:outline-none"
                    placeholder="Phone Number"
                    type="tel"
                    autoComplete="phone"
                    id="phone"
                />
                </div>
            </div>

            <div>
                <label className="sr-only" htmlFor="message">Message</label>

                <textarea
                className="w-full border-b border-gray-700 p-3 text-sm focus:outline-none"
                placeholder="Message..."
                rows={8}
                id="message"
                required
                ></textarea>
            </div>
            {feedback &&
                <div>
                    <p className="text-bright-orange text-sm">*Character limit reached*</p>
                </div>
            }
            <div className="mt-4">
                <Button 
                    bgColor="bg-white hover:scale-105 transition-all duration-500 cursor-pointer" 
                    text="text-gray-700 text-sm" 
                    border="border-b border-r border-gray-700 shadow-md"
                    sizes="inline-block px-5 py-2 sm:w-auto"
                >
                    {buttonString}
                </Button>
            </div>
        </form>
    );
}