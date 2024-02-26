import SideBarButton from './SideBarButton';
import React, { useState } from 'react';

export default function Header () {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return(
        <header className="relative bg-pink-main">
            <div className="absolute top-0 left-0 z-10">
                <SideBarButton onClick={showSideBar} />
            </div>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-10">
                    <div className="text-center flex-grow">
                        <h1 className="lg:text-8xl md:text-7xl font-bubble outlined-text text-ivory">kimi beauty</h1>
                        <p className="text-2xl font-mono text-med-brown"> 
                            Omaha's First Korean Skincare and Makeup Store
                        </p>
                    </div>
                </div>
            </div>
        </header>
    );
}
