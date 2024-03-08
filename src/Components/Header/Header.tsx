import React from 'react';
import Title from './Title';
import Announcements from './Announcements';
import MenuBar from './MenuBar/MenuBar';
import SideBar from '../SideBar/SideBar';
import SearchBar from './SearchBar';

export default function Header () {
    const WebTitle = "kimi beauty";
    const announcement ="ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    return(
        <div>
            <Announcements 
                info={announcement}
            />
            <div className="relative bg-pink-white flex flex-col">
                <div className="flex justify-between items-center bg-pink-white">
                    <Title 
                        title={WebTitle}
                    />
                    <div className="flex flex-row items-center gap-x-2">
                        <SearchBar />
                        <SideBar />
                    </div>
                </div>
                <div className="bg-white">
                    <MenuBar />
                </div>
            </div>
        </div>
    );
}

