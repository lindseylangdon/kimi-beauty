import React, { useState } from 'react';
import SideBarButton from './SideBar/SideBarButton';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBar/SideBarData';
import SearchBar from './SearchBar';
import PopUp from './PopUp';
import NavBar from './NavBar';
import Title from './Title';
import SideBar from './SideBar/SideBar';

export default function Header () {
    return(
        <div className="relative bg-pink-main flex flex-row items-center">
            <SideBar />
            <Title />
            <NavBar />
        </div>
    );
}

