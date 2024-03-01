import React from "react";
import { PopUpData } from "./PopUpData";

export default function PopUpBody () {
    
    return(
        <div>
            <span className="flex flex-col bg-white mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                {PopUpData.map((item) => (
                    <div className="font-mono text-med-brown flex flex-row">
                        {item.align == 'left' ? 
                            <>
                                <div className="flex flex-col" key={item.title}>
                                    <span className="flex-shrink mx-4 mb-4 font-bold">{item.title}</span>
                                    <p className="mx-4 mb-4">Date: {item.date}</p>
                                </div>
                                <div className="flex-grow border-t border-pink-main mt-2"></div>
                            </>
                        : 
                            <>
                                <div className="flex-grow border-t border-pink-main mt-2"></div>
                                <div className="flex flex-col" key={item.title}>
                                    <span className="flex-shrink mx-4 mb-4 font-bold">{item.title}</span>
                                    <p className="mx-4 mb-4">Date: {item.date}</p>
                                </div>
                            </>
                        }
                    </div>
                ))}
            </span>
        </div>
    );
}