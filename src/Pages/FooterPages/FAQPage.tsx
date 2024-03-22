import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";
import Accordion from "../../Components/Accordion/Accordion";
import PageTitle from "../../Components/PageTitle";

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
            <div className="mb-10 padding-x padding-y">
                <PageTitle>
                    Frequently Asked Questions
                </PageTitle>
                <Accordion data={faqs} />
            </div>
            <Footer />
        </div>
    );
}