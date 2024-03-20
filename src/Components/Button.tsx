import React, { ReactNode } from "react";

type ButtonProps = {
    children: ReactNode;
    bgColor: string;
    text: string;
    border: string;
    sizes: string;
}

export default function Button ( { children, bgColor, text, border, sizes}: ButtonProps) {
    return(
        <button
            type="submit"
            className={`${bgColor} ${text} ${border} ${sizes}`}
        >
            {children}
        </button>
    );
}