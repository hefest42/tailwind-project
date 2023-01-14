import React, { useState } from "react";

import BookmarkDropdownMenu from "../Bookmarks/BookmarkDropdownMenu";

import { BsBookmark } from "react-icons/bs";

const SearchBar = () => {
    const [displayBookmarks, setDisplayBookmarks] = useState(true);

    return (
        <div className="w-full h-10 text-dark-yellow text-lg lg:text-xl flex flex-row justify-between items-center">
            <div className="h-full pr-10 flex justify-start items-center">RecipeSearch</div>

            <div className="h-full flex-1 flex">
                <input type="text" placeholder="Search for Meals..." className="flex-1 outline-none rounded-l-lg" />

                <button className="w-28 h-full bg-bright-red rounded-r-lg">SEARCH</button>
            </div>

            <div className="relative w-auto pl-10 lg:w-[20%] h-full " onMouseLeave={() => setDisplayBookmarks(false)}>
                <div
                    className="flex justify-end items-center cursor-pointer"
                    onMouseOver={() => setDisplayBookmarks(true)}
                >
                    <p className="hidden lg:block mr-4">Bookmarks</p>
                    <div>
                        <BsBookmark className="w-8 h-8" />
                    </div>
                </div>

                {displayBookmarks && <BookmarkDropdownMenu />}
            </div>
        </div>
    );
};

export default SearchBar;
