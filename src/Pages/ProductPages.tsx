import React, { ComponentType } from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { useEffect } from "react";

export default function ProductPages ( { body: BodyComponent } : { body: ComponentType<any>; } ) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen font-mono text-gray-700">
            <Header />
            <div className="mb-10 padding-x padding-y">
                <BodyComponent />
            </div>
            <Footer />
        </div>
    );
}