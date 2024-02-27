import { Link } from "react-router-dom";
import Announcements from "../Components/Announcements";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export default function FacePage () {
    return (
        <div className="flex flex-col min-h-screen">
            <Announcements />
            <Header />
            <h1 className="bg-ivory">face cardd</h1>
            <Footer />
        </div>
    );
}