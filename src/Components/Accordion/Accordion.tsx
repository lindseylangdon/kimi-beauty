import React from "react";
import { AccordtionItem } from "./AccordtionItem";

interface AccordionProps {
    data: { title: string; text: string; }[];
}

export interface AccordionItemProps {
    num: number;
    title: string;
    text: string;
}

export default function Accordion( {data}: AccordionProps )  {
    return(
        <div className="grid grid-cols-1 gap-y-8">
            {data.map((faq, i) => <AccordtionItem title={faq.title} text={faq.text} num={i} key={i}/>)}
        </div>
    );
}

