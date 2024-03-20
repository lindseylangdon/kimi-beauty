import React from 'react';
import Title from './Title';
import Announcements from './Announcements';
import MenuBar from './MenuBar/MenuBar';
import SideBar from './SideBar/SideBar';
import SearchBar from './SearchBar';

export default function Header () {
    return(
        <div>
            <Announcements>
                ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Announcements>
            <div className="relative bg-pink-white flex flex-col">
                <div className="flex justify-between items-center bg-pink-white">
                    <Title>
                        kimi beauty
                    </Title>
                    <div className="flex flex-row items-center md:gap-x-2 lg:gap-x-2 xl:gap-x-2">
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

