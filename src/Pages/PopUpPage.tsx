import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import PopUpBody from "../Components/PopUps/PopUpBody";
import { useEffect } from "react";

export default function PopUpPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <PopUpBody />
            </div>
            <Footer />
        </div>
    );
}