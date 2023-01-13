import React, { useState } from "react";

import BookmarkDropdownMenu from "../Bookmarks/BookmarkDropdownMenu";

import { BsBookmark } from "react-icons/bs";

const SearchBar = () => {
    const [displayBookmarks, setDisplayBookmarks] = useState(false);

    return (
        <div className="w-full h-10 text-dark-yellow text-base lg:text-lg flex flex-row justify-between items-center">
            <div className="h-full pr-6 flex justify-start items-center">RecipeSearch</div>

            <div className="h-full flex-1 flex bg-dark-orange">
                <input type="text" placeholder="Search for Meals..." className="flex-1 outline-none" />

                <button className="w-28 h-full bg-bright-red">SEARCH</button>
            </div>

            <div className="relative w-auto px-4 lg:pl-8 lg:w-[20%] h-full flex justify-center lg:justify-end items-center">
                <p className="hidden lg:block mr-4">BOOKMARKS</p>
                <div>
                    <BsBookmark className="w-8 h-8" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
