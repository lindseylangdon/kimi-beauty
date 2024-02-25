import React from "react";

export default function Header () {
    return(
        <header className="relative bg-pink-main">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center py-10">
                    <h1 className="text-center lg:text-8xl md:text-7xl font-bubble outlined-text text-ivory">kimi beauty</h1>
                    <p className="text-lg md:text-l font-mono text-med-brown"> 
                        Omaha's First Korean Skincare and Makeup Store
                    </p>
                </div>
            </div>
        </header>
    );
}