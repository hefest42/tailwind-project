import React, { useState } from "react";

import BookmarkDropdownMenu from "../Bookmarks/BookmarkDropdownMenu";

import { BsBookmark } from "react-icons/bs";

const SearchBar = ({ setSearch, setHeroID, bookmarks }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [displayBookmarks, setDisplayBookmarks] = useState(false);

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setSearch(searchTerm);

        setSearchTerm("");
    };

    return (
        <div className="w-full h-10 text-dark-yellow text-lg lg:text-xl flex flex-row justify-between items-center">
            <div className="h-full pr-10 flex justify-start items-center">RecipeSearch</div>

            <form onSubmit={formSubmitHandler} className="h-full flex-1 flex">
                <input
                    type="text"
                    placeholder="Search for Meals..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    className="flex-1 outline-none rounded-l-lg"
                />

                <button className="w-28 h-full bg-bright-red rounded-r-lg">SEARCH</button>
            </form>

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

                {displayBookmarks && <BookmarkDropdownMenu bookmarks={bookmarks} setHeroID={setHeroID} />}
            </div>
        </div>
    );
};

export default SearchBar;
