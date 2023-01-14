import React from "react";

import { BsBookmark } from "react-icons/bs";

const MobileSearchBar = () => {
    return (
        <div className="w-full h-10 text-dark-yellow text-sm flex flex-row justify-between items-center">
            <div className="h-full flex flex-col justify-start items-center">
                <div>Recipe</div>
                <div>Search</div>
            </div>

            <div className="h-full flex flex-1 px-5">
                <input type="text" placeholder="Search for Meals..." className="outline-none flex-1 rounded-l-lg" />

                <button className=" w-16 h-full bg-bright-red rounded-r-lg">SEARCH</button>
            </div>

            <div className="relative h-full">
                <div className="h-full flex justify-end items-center cursor-pointer">
                    <BsBookmark className="w-auto h-[90%]" />
                </div>
            </div>
        </div>
    );
};

export default MobileSearchBar;
