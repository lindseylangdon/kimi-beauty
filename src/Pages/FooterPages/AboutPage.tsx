import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";

export default function About () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <p className="font-mono text-gray-700 text-left">about us</p>
            </div>
            <Footer />
        </div>
    );
}