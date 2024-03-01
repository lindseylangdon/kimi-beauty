import React, { useState, useRef, useEffect } from 'react';

export default function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Whenever the state changes to expanded, focus the input
        if (isExpanded && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isExpanded]);

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add search logic or redirection here
        console.log('Search Term:', searchInputRef.current?.value);
    };

    return (
        <div className="relative">
            {isExpanded ? (
                <form onSubmit={handleSearch} className="flex items-center border-b border-med-brown">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="lg:text-lg md:text-m text-med-brown focus:outline-none font-mono px-2 py-1"
                        onBlur={() => setIsExpanded(false)} // Hide the input when it loses focus
                    />
                    <button type="submit" className="lg:text-xl md:text-lg text-med-brown hover:text-pale-brown focus:outline-none font-mono px-2 transition-all duration-500 cursor-pointer">
                        enter
                    </button>
                </form>
            ) : (
                // Underlined word
                <span
                    className="lg:text-xl md:text-lg text-med-brown hover:text-pale-brown focus:outline-none underline font-mono cursor-pointer"
                    onClick={() => setIsExpanded(true)} // Expand the search bar when the text is clicked
                >
                    Search
                </span>
            )}
        </div>
    );
}
