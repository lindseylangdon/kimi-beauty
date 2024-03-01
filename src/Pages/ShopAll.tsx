import { Link } from "react-router-dom";
import Announcements from "../Components/Announcements";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect } from "react";

export default function PopUpPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col flex-grow min-h-screen">
            <Announcements />
            <Header />
            <h1>Add content here loll</h1>
            <Footer />
        </div>
    );
}