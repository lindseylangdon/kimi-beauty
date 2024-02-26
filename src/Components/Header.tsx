import React, { useState } from 'react';
import SideBarButton from './SideBarButton';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import SearchBar from './SearchBar';
import PopUp from './PopUp';
import NavBar from './NavBar';

export default function Header () {

    return(
        <header className="relative bg-pink-main">
        <NavBar />
        <div className="flex items-center justify-between py-10">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center flex-grow">
                <h1 className="lg:text-9xl md:text-8xl md:pt-8 font-bubble outlined-text text-ivory">kimi beauty</h1>
                <p className="text-2xl font-mono text-med-brown"> 
                    Omaha's First Korean Skincare and Makeup Store
                </p>
            </div>
        </div>
    </header>
    );
}
