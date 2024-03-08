import React from "react";
import SearchBar from "./SearchBar";
import SideBar from "../../SideBar/SideBar";

export default function NavBar () {

    return(
        <div className="flex items-center justify-between py-8">
            <div className="flex absolute md:py-1 lg:py-1 top-0 right-0 z-20 p-4 gap-x-2 sm:gap-x-2 md:gap-x-2 lg:gap-x-4">
                {/* <NavLink name="Home" path={"/"} /> */}
                {/* <NavLink name="Pop-Ups" path={"/pop-ups"} /> */}
                <SearchBar />
                <SideBar />
            </div>
        </div>
    )
}