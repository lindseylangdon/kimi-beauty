import React from 'react';
import { Link } from 'react-router-dom';

export default function PopUp() {
    return (
        <Link to="/pop-ups">
            <button className="lg:text-xl md:text-lg text-med-brown hover:text-pale-brown focus:outline-none underline font-mono ml-4 hover:scale-110 transition-all duration-500 cursor-pointer mr-2">
                Pop-Ups
            </button>
        </Link>
    );
}
