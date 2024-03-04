import React from 'react';
import NavBar from './NavBar/NavBar';
import Title from './Title';
import SideBar from '../SideBar/SideBar';
import Announcements from './Announcements';

export default function Header () {
    return(
        <div>
            <Announcements 
                info="ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit." 
            />
            <div className="relative bg-pink-white flex flex-row items-center">
                <SideBar />
                <Title 
                    title="kimi beauty" 
                />
                <NavBar />
            </div>
        </div>
    );
}

