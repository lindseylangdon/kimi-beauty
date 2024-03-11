import React from 'react';
import { Menu } from 'lucide-react';

type SideBarButtonProps = {
    onClick: () => void;
    }

export default function SideBarButton ({ onClick }: SideBarButtonProps) {
    return (
        <button onClick={onClick} className="text-gray-600 hover:text-gray-500 focus:outline-none underline font-mono hover:scale-110 transition-all duration-500 cursor-pointer ml-2">
            <Menu className="h-6 w-6 lg:h-8 lg:w-8 md:h-8 md:w-8 sm:w-6 sm:h-6 mr-2" />
        </button>
    );
};