import React from 'react';

type PopUpProps = {
    onClick: () => void;
};

export default function PopUp({ onClick }: PopUpProps) {
    return (
        <button onClick={onClick} className="lg:text-xl md:text-lg text-med-brown hover:text-pale-brown focus:outline-none underline font-mono ml-4 hover:scale-110 transition-all duration-500 cursor-pointer">
            Pop Ups
        </button>
    );
}
