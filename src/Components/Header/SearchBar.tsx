import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

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
                        className="text-base text-gray-700 focus:outline-none font-mono px-1 py-1 lg:px-2 md:px-2"
                        onBlur={() => setIsExpanded(false)}
                    />
                    <button type="submit" 
                        className="mt-2 text-base lg:text-base md:text-base sm:text-sm text-gray-700 hover:text-gray-500 focus:outline-none font-mono px-2 transition-all duration-500 cursor-pointer"
                    >
                        enter
                    </button>
                </form>
            ) : (
                <span
                    className="text-lg text-gray-700 hover:text-gray-500 focus:outline-none underline font-mono cursor-pointer"
                    onClick={() => setIsExpanded(true)} // Expand the search bar when the text is clicked
                >
                    <button className="text-gray-600 hover:text-gray-500 focus:outline-none underline hover:scale-110 transition-all duration-500 cursor-pointer">
                        <AiOutlineSearch className="w-8 h-8 lg:h-12 w-12 md:h-12 w-12 sm:h-8 w-8 mt-1"/>
                    </button>
                </span>
            )}
        </div>
    );
}
