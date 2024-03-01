import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Title from './Title';
import SideBar from '../SideBar/SideBar';

export default function Header () {
    return(
        <div className="relative bg-pink-main flex flex-row items-center">
            <SideBar />
            <Title />
            <NavBar />
        </div>
    );
}

