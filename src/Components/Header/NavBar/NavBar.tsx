import React from "react";
import PopUp from "./PopUpLink";
import SearchBar from "./SearchBar";
import HomeLink from "./HomeLink";

export default function NavBar () {

    return(
        <div className="flex items-center justify-between py-10">
            <div className="flex absolute top-0 right-0 z-20 p-4 items-center gap-x-2 sm:gap-x-4 md:gap-x-4 lg:gap-x-6">
                <HomeLink />
                <PopUp />
                <SearchBar />
            </div>
        </div>
    )
}