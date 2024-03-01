import { Link } from "react-router-dom";
import Announcements from "../Components/Announcements";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";

export default function FacePage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Announcements />
            <Header />
            <div className="flex-grow bg-ivory">
                <h1 className="">face</h1>
            </div>
            <Footer />
        </div>
    );
}