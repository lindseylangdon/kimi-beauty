import { Link } from "react-router-dom";
import Announcements from "../Components/Announcements";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

export default function PopUpPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Announcements />
            <Header />
            <div className="flex-grow bg-ivory">
                <h1 className="">pop-ups</h1>
            </div>
            <Footer />
        </div>
    );
}