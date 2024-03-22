import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import PageTitle from "../../Components/PageTitle";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";

export default function ReturnsPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen font-mono text-gray-700">
            <Header />
            <div className="mb-10 padding-x padding-y">
                <PageTitle>
                    Returns and Exchanges
                </PageTitle>
                <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.
                </p>
                <br />
                <p className="text-gray-500">If you have any more questions, feel free to contact us!</p>
                <br />
                <Link to="/contact">
                    <Button 
                        bgColor="bg-white hover:scale-105 transition-all duration-500 cursor-pointer" 
                        text="text-gray-700 text-sm" 
                        border="border-b border-r border-gray-700 shadow-md"
                        sizes="inline-block px-5 py-2 sm:w-auto"
                        >
                            Contact Us
                    </Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}