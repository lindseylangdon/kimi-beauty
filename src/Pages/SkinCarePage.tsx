import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

export default function SkinCarePage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col flex-grow min-h-screen">
            <Header />
            <div className="flex-grow">
                <h1 className="">skincare</h1>
            </div>
            <Footer />
        </div>
    );
}