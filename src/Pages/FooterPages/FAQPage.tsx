import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import Accordion from "../../Components/Accordion/Accordion";

const faqs = [
    {
      title: "Lorem ipsum dolor sit?",
      text:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
    },
    {
      title: "Lorem ipsum dolor sit?",
      text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
    title: "Lorem ipsum dolor sit?",
    text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    },
    {
    title: "Lorem ipsum dolor sit?",
    text:
        "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
    }
];

export default function FAQPage () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className="flex flex-col min-h-screen font-mono text-gray-700">
            <Header />
            <div className="mb-10 font-mono text-gray-700 padding-x padding-y">
                <h2 className="text-2xl font-bold mt-4 mb-4">
                    frequently asked questions...
                </h2>
                <Accordion data={faqs} />
            </div>
            <Footer />
        </div>
    );
}