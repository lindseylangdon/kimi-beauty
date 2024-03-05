import React, { useState, useRef, useEffect } from 'react';

export default function SearchBar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
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
                <form onSubmit={handleSearch} className="flex items-center border-b border-gray-700">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="lg:text-lg md:text-base sm:text-sm text-gray-700 focus:outline-none font-mono px-0 lg:px-2 py-1 md:px-2 py-1 sm:px-0"
                        onBlur={() => setIsExpanded(false)}
                    />
                    <button type="submit" className="lg:text-lg md:text-base sm:text-sm text-gray-700 hover:text-pale-brown focus:outline-none font-mono px-2 transition-all duration-500 cursor-pointer">
                        enter
                    </button>
                </form>
            ) : (
                <span
                    className="lg:text-xl md:text-lg text-gray-700 hover:text-pale-brown focus:outline-none underline font-mono cursor-pointer"
                    onClick={() => setIsExpanded(true)} // Expand the search bar when the text is clicked
                >
                    Search
                </span>
            )}
        </div>
    );
}
