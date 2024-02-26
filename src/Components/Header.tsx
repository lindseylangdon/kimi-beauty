import React, { useState } from 'react';
import SideBarButton from './SideBarButton';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header () {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return(
        <header className="relative bg-pink-main">
        {/* Overlay when sidebar is open */}
        {sidebar && <div className="fixed inset-0 z-10" onClick={showSideBar}></div>}
        <div className="flex items-center justify-between py-10">
            <div className="absolute top-0 left-0 z-20">
                <Link to="#" className="menu-bars text-white">
                    <SideBarButton onClick={showSideBar} />
                </Link>
            </div>
            <nav className={`fixed left-0 top-0 h-full bg-pink-white bg-opacity-90 transition-all duration-300 ease-in-out ${sidebar ? 'w-64' : 'w-0'} overflow-hidden z-30 sidebar`}>
                {/* Close button */}
                {sidebar && (
                    <div className="absolute top-0 right-0 z-40 p-4">
                        <button onClick={showSideBar} className="text-ivory text-xl font-bold font-mono bg-pale-brown rounded-lg p-1">
                            <AiOutlineClose />
                        </button>
                    </div>
                )}
                <ul className='nav-menu-items mt-16'>
                    {SideBarData.map((item, index) => (
                        <li key={index} className={`py-4 ${item.className}`}>
                            <Link to={item.path} className="lg:text-8xl md:text-7xl text-med-brown font-bold font-mono flex flex-col items-center transition duration-300 hover:underline hover:text-med-brown">
                                <span className="text-base">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 text-center flex-grow">
                <h1 className="lg:text-8xl md:text-7xl font-bubble outlined-text text-ivory">kimi beauty</h1>
                <p className="text-2xl font-mono text-med-brown"> 
                    Omaha's First Korean Skincare and Makeup Store
                </p>
            </div>
        </div>
    </header>
    );
}
