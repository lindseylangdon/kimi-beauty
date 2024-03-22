import React, { ReactNode } from "react";

interface PageTitleProps {
    children: ReactNode;
}

export default function PageTitle( { children }: PageTitleProps ) {
    return(
        <h2 className="text-2xl font-bold font-mono text-gray-700 mt-4 mb-4">
            {children}
        </h2>
    );
}