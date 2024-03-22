import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import PageTitle from "../../Components/PageTitle";
import Form from "../../Components/Form";

export default function Contact () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen font-mono text-gray-700">
            <Header />
            <div className="mb-10 padding-x padding-y">
                <PageTitle>
                    Contact Us
                </PageTitle>
                <div className="text-gray-500">
                    <p>Contact us via email or phone or simply fill out the form below and we will get back to you as soon as possible!</p>
                    <br />
                    <div className="flex flex row">
                        <p className="font-bold">Email:</p><p>kimibeautyllc@gmail.com</p>
                    </div>
                    <div className="flex flex row">
                        <p className="font-bold">Phone: </p><p>(XXX) XXX - XXXX</p>
                    </div>
                    <br />
                    <Form buttonString="Send Form" />
                </div>
            </div>
            <Footer />
        </div>
    );
}