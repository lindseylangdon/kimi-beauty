import React, { useState } from "react";

export default function Form ( ) {
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
                <button
                type="submit"
                className="text-sm inline-block bg-bright-orange px-5 py-2 text-white sm:w-auto"
                >
                Send Feedback
                </button>
            </div>
        </form>
    );
}