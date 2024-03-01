import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeLink() {
    return (
        <Link to="/">
            <button className="lg:text-xl md:text-lg text-med-brown hover:text-pale-brown focus:outline-none underline font-mono hover:scale-110 transition-all duration-500 cursor-pointer">
                Home
            </button>
        </Link>
    );
}