import { Menu } from 'lucide-react';

const SideBarButton = ({onClick}) => {
    return (
        <button onClick={onClick} className="p-5 ounded-md text-med-brown hover:text-pale-brown focus:outline-none">
            <Menu className="lg:h-16 w-16 md:h-14 w-14" />
        </button>
    );
};

export default SideBarButton;
