import React from 'react';
import NavBar from './NavBar/NavBar';
import Title from './Title';
import Announcements from './Announcements';

export default function Header () {
    const WebTitle = "kimi beauty";
    const announcement ="ANNOUNCEMENTS: Lorem ipsum, dolor sit amet consectetur adipisicing elit.";

    return(
        <div>
            <Announcements 
                info={announcement}
            />
            <div className=" mx-auto padding-x relative bg-pink-white flex flex-row">
                {/* <SideBar /> */}
                <Title 
                    title={WebTitle}
                />
                <NavBar />
            </div>
        </div>
    );
}

