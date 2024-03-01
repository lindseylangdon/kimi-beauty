
import React, { useState } from 'react';
import SideBarButton from './SideBarButton';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <SideBarButton onClick={toggleSidebar} />
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={toggleSidebar}></div>
            )}
            <nav className={`fixed left-0 top-0 h-full bg-white bg-opacity-100 transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-0'} overflow-hidden z-30`}>
                {/* Close button */}
                {isOpen && (
                    <div className="absolute top-0 left-0 z-40 p-4">
                        <button onClick={toggleSidebar} className="text-gray-700 text-xl font-bold font-mono bg-latte rounded-lg p-1">
                            <AiOutlineClose />
                        </button>
                    </div>
                )}
                <ul className="mt-16">
                    {SideBarData.map((item, index) => (
                        <li key={index} className="py-4">
                            <Link to={item.path} className="lg:text-8xl md:text-7xl text-gray-700 font-bold font-mono flex flex-col items-center transition duration-300 hover:underline hover:text-latte hover:scale-110 transition-all duration-500 cursor-pointer">
                                <span className="text-sm">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}
