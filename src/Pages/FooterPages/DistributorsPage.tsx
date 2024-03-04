import React from "react";
import Announcements from "../../Components/Announcements";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";

export default function DistributorsPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Announcements />
            <Header />
            <div className="flex-grow">
                <p>our distributors</p>
            </div>
            <Footer />
        </div>
    );
}