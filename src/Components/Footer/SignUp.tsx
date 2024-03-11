import React, { useState } from 'react';
import Alert from '../Alert';

export default function SignUpForm() {
	const [email, setEmail] = useState('');
    const [isBlankEmail, setIsBlankEmail] = useState(false);

    const validateEmail = (email: string): boolean => {
        return Boolean(
            email
                .toLowerCase()
                .match(
                    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
                )
        );
    };
    

	function handleSubmit (e: { preventDefault: () => void; }) {
		e.preventDefault();

        if (email.trim() === "" || !validateEmail(email)) {
            setIsBlankEmail(true);
            return;
        }
        else{
            setIsBlankEmail(false);
        }

		alert("Thanks for joining! An email will be sent shortly to your inbox.");
		setEmail("");
	};

    return (
        <div>
            <form className="w-full font-mono" onSubmit={handleSubmit}>
                <label htmlFor="UserEmail" className="sr-only">
                    Email Address
                </label>
                <div className="flex flex-col sm:flex-row items-center border border-gray-300 p-2 gap-4">
                <input
                    type="email"
                    id="UserEmail"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 bg-white border-b border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-0"
                />
                    <button
                        type="submit"
                        className="w-full sm:w-auto bg-bright-orange px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-main focus:outline-none focus:ring-0"
                    >
                        Submit
                    </button>
                    {isBlankEmail && 
                        <div className="font-mono text-bright-orange text-sm">
                            Please enter a valid email.
                        </div>
                    }
                </div>
            </form>
        </div>
    );
}
