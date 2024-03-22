import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import PageTitle from "../../Components/PageTitle";

export default function About () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen font-mono text-gray-700">
            <Header />
            <div className="mb-10 padding-x padding-y">
                <PageTitle>
                    About Us
                </PageTitle>
                <div className="text-center text-gray-500">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <br />
                    <div className="flex justify-center items-center">
                        <img
                                src="/toner-pad.jpg"
                                alt=""
                                className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 object-cover"
                        />
                    </div>
                    <br />
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br />
                    <div className="flex justify-center items-center">
                        <img
                                src="/toner-pad.jpg"
                                alt=""
                                className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 object-cover"
                        />
                    </div>
                    <br />
                    <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <br />
                <br />
                <p className="text-xl font-bold text-gray-700">
                duis aute irure!
                </p>
                <br />
                <Link to="/">
                    <Button 
                        bgColor="bg-white hover:scale-105 transition-all duration-500 cursor-pointer" 
                        text="text-gray-700 text-sm" 
                        border="border-b border-r border-gray-700 shadow-md"
                        sizes="inline-block px-5 py-2 sm:w-auto"
                        >
                            View Now
                    </Button>
                </Link>
            </div>
            <Footer />
        </div>
    );
}