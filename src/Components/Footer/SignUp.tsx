import React, { useState } from 'react';

export default function SignUpForm() {
	const [email, setEmail] = useState('');

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();
		alert(`Thanks for joining! An email will be sent shortly to: ${email}`);
		setEmail('');
	};

    return (
    <form className="w-full font-mono " onSubmit={handleSubmit}>
        <label htmlFor="UserEmail" className="sr-only">
            Email Address
        </label>
        <div className="flex flex-col sm:flex-row items-center border border-gray-300 p-2 gap-4">
            <input
                type="email"
                id="UserEmail"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-white border-b border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-black focus:ring-0"
            />
            <button
                type="submit"
                className="w-full sm:w-auto bg-bright-orange px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-pink-main focus:outline-none focus:ring-0"
            >
                Submit
            </button>
        </div>
    </form>
    );
}
