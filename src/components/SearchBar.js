import React from "react";

import { BsBookmark } from "react-icons/bs";

const SearchBar = () => {
    return (
        <div className="w-full h-12 bg-orange-400 flex flex-row">
            <div className="text-dark-yellow px-5 h-full text-sm md:text-lg flex justify-center items-center">
                <p className="hidden lg:block">RECIPESEARCH</p>
                <div className="leading-4">
                    <p className="block lg:hidden">RECIPE</p>
                    <p className="block lg:hidden">SEARCH</p>
                </div>
            </div>
            <div className="flex-auto h-full flex flex-row justify-center bg-green-500">
                <form className="w-full h-full">
                    <input
                        className="w-full h-full text-dark-yellow border-none outline-none px-2 xl:px-6 text-lg rounded-l-md"
                        type="text"
                        placeholder="Search for recipes..."
                    />
                </form>
                <button className="w-4/12 bg-bright-red hover:bg-dark-red text-dark-yellow rounded-r-md">Search</button>
            </div>
            <div className="w-auto px-3 md:px-5 xl:px-10 h-full bg-lime-500 ">
                <div className="h-full flex justify-center items-center cursor-pointer">
                    <div className="hidden lg:block mr-4 text-lg text-dark-yellow">BOOKMARKS</div>
                    <div>
                        <BsBookmark className="text-dark-yellow w-6 h-6 md:w-8 md:h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
