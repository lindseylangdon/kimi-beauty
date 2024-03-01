import React, { useState } from 'react';
import SideBarButton from './SideBarButton';
import { Link } from 'react-router-dom';
import { SideBarData } from './SideBarData';
import SearchBar from './SearchBar';
import PopUp from './PopUp';
import NavBar from './NavBar';
import Title from './Title';

export default function Header () {
    return(
        <div className="relative bg-pink-main flex flex-row items-center justify-between">
            <Title />
            <NavBar />
        </div>
    );
}

