import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideBarButton from "./SideBarButton";
import PopUp from "./PopUp";
import SearchBar from "./SearchBar";
import { AiOutlineClose } from 'react-icons/ai';
import { SideBarData } from "./SideBarData";
import HomeLink from "./HomeLink";

export default function NavBar () {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    // Function to close the sidebar
    const closeSideBar = () => setSideBar(false);

    return(
        <div className="flex items-center justify-between py-10">
            <div className="flex absolute top-0 left-0 z-20 p-4 items-center md:gap-x-4 lg:gap-x-6">
                <HomeLink />
                <SideBarButton onClick={showSideBar}/>
                <PopUp />
                <SearchBar />
            </div>
            {sidebar && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-20" onClick={closeSideBar}></div> // Overlay to close sidebar
            )}
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
                            <Link to={item.path} className="lg:text-8xl md:text-7xl text-med-brown font-bold font-mono flex flex-col items-center transition duration-300 hover:underline hover:text-med-brown hover:scale-110 transition-all duration-500 cursor-pointer">
                                <span className="text-base">{item.title}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}