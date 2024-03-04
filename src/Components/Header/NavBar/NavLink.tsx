import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink ( link: { name: string , path: string} ) {
    return (
        <Link to={link.path}>
            <button className="lg:text-xl md:text-lg text-gray-700 hover:text-pale-brown focus:outline-none underline font-mono hover:scale-110 transition-all duration-500 cursor-pointer">
                {link.name}
            </button>
        </Link>
    );
}
