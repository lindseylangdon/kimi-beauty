import React from 'react';

type SideBarButtonProps = {
    onClick: () => void;
    }

export default function SideBarButton ({ onClick }: SideBarButtonProps) {
    return (
        <button onClick={onClick} className="lg:text-xl md:text-lg text-med-brown hover:text-pale-brown focus:outline-none underline font-mono hover:scale-110 transition-all duration-500 cursor-pointer">
            Menu
        </button>
    );
};