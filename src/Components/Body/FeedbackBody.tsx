import React, { useState }from "react";

export default function FeedBackBody () {
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
            </div>
        </div>
    );
}