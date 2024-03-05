import React from 'react';
import NavBar from './NavBar/NavBar';
import Title from './Title';
import SideBar from '../SideBar/SideBar';
import Announcements from './Announcements';

export default function Header () {
    const WebTitle = "kimi beauty";

    return(
        <div>
            <Announcements 
                info="ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit." 
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

