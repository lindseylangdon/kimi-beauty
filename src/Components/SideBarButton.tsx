import { Menu } from 'lucide-react';

type SideBarButtonProps = {
    onClick: () => void;
    }

const SideBarButton: React.FC<SideBarButtonProps> = ({onClick}) => {
    return (
        <button onClick={onClick} className="text-xl text-med-brown hover:text-pale-brown focus:outline-none underline font-mono hover:scale-110 transition-all duration-500 cursor-pointer">
            Menu
        </button>
    );
};

export default SideBarButton;