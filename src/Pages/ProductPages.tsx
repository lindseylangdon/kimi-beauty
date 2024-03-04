import React, { ReactElement } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

export default function ProductPages ( category: { type: string } ) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">
                <h1 className="">{category.type}</h1>
            </div>
            <Footer />
        </div>
    );
}