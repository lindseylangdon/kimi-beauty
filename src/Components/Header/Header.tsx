import React from 'react';
import NavBar from './NavBar/NavBar';
import Title from './Title';
import Announcements from './Announcements';
import MenuBar from './MenuBar/MenuBar';

export default function Header () {
    const WebTitle = "kimi beauty";
    const announcement ="ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    return(
        <div>
            <Announcements 
                info={announcement}
            />
            <div className="mx-auto relative bg-pink-white flex flex-col">
                <div className="flex flex-row items-end">
                    {/* <SideBar /> */}
                    <Title 
                        title={WebTitle}
                    />
                    <NavBar />
                </div>
                <div className="bg-white">
                    <MenuBar />
                </div>
            </div>
        </div>
    );
}

