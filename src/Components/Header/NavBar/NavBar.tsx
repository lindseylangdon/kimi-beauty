import React from "react";
import SearchBar from "./SearchBar";
import NavLink from "./NavLink";

export default function NavBar () {

    return(
        <div className="flex items-center justify-between py-8">
            <div className="flex absolute top-0 right-0 z-20 p-4 items-center gap-x-4 sm:gap-x-4 md:gap-x-4 lg:gap-x-6">
                <NavLink name="Home" path={"/"} />
                <NavLink name="Pop-Ups" path={"/pop-ups"} />
                <SearchBar />
            </div>
        </div>
    )
}