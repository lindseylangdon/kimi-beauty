import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import PageTitle from "../../Components/PageTitle";

export default function AccessibilityPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen font-mono text-gray-700">
            <Header />
            <div className="mb-10 padding-x padding-y">
                <PageTitle>
                    Accessibility
                </PageTitle>
            </div>
            <Footer />
        </div>
    );
}