import React from 'react';
import NavBar from './NavBar/NavBar';
import Title from './Title';
import SideBar from '../SideBar/SideBar';
import Announcements from './Announcements';

export default function Header () {
    const WebTitle = "kimi beauty";
    const announcement ="ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    return(
        <div>
            <Announcements 
                info={announcement}
            />
            <div className="relative bg-pink-white flex flex-row items-center">
                <SideBar />
                <Title 
                    title={WebTitle}
                />
                <NavBar />
            </div>
        </div>
    );
}

