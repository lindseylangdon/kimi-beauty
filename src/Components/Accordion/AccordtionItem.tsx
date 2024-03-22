import React, { useState } from "react";
import { AccordionItemProps } from "./Accordion";

export function AccordtionItem({ num, title, text }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <div onClick={handleToggle} className="flex flex-col border-b border-r border-gray-700 p-6 shadow-md">
            <div className="flex flex row text-gray-700 justify-between cursor-pointer">
                <p className={isOpen ? `text-bright-orange font-bold` : `font-bold`}>{num < 9 ? `0${num + 1}` : num + 1} {title}</p>
                <p className={isOpen ? `text-bright-orange font-bold justify-end` : `font-bold justify-end`}>{isOpen ? "-" : "+"}</p>
            </div>
            {isOpen &&
                <div className="text-gray-500 pt-3">
                    {text}
                </div>}

        </div>
    );
}
