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
        <div className="relative font-mono text-gray-700">
            {isExpanded ? (
                <form onSubmit={handleSearch} className="flex items-center border-b border-gray-700">
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        id="search"
                        className="text-sm focus:outline-none px-1 py-1 lg:px-2 md:px-2"
                        onBlur={() => setIsExpanded(false)}
                    />
                    <button type="submit" 
                        className="text-sm lg:text-base md:text-base sm:text-sm hover:text-gray-500 focus:outline-none px-2 transition-all duration-500 cursor-pointer"
                    >
                        enter
                    </button>
                </form>
            ) : (
                <span
                    className="text-lg hover:text-gray-500 focus:outline-none underline cursor-pointer"
                    onClick={() => setIsExpanded(true)} // Expand the search bar when the text is clicked
                >
                    <button className="text-gray-600 hover:text-gray-500 focus:outline-none underline hover:scale-110 transition-all duration-500 cursor-pointer">
                        <AiOutlineSearch className="h-6 w-6 lg:h-8 lg:w-8 md:h-8 md:w-8 sm:w-6 sm:h-6 mt-1"/>
                    </button>
                </span>
            )}
        </div>
    );
}
