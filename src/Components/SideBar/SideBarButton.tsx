import React from 'react';
import { Menu } from 'lucide-react';

type SideBarButtonProps = {
    onClick: () => void;
    }

export default function SideBarButton ({ onClick }: SideBarButtonProps) {
    return (
        <button onClick={onClick} className="text-gray-600 hover:text-gray-500 focus:outline-none underline font-mono hover:scale-110 transition-all duration-500 cursor-pointer ml-2">
            <Menu className="w-8 h-8 lg:h-12 w-12 md:h-12 w-12 sm:h-8 w-8" />
        </button>
    );
};