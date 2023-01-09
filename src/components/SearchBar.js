import React from "react";

const SearchBar = () => {
    return (
        <div className="w-full h-12 bg-orange-400 flex flex-row">
            <div className="w-[20%] h-full bg-amber-200">RecipeSearch</div>
            <div className="flex-auto h-full flex flex-row justify-center bg-green-500">
                <form className="w-full h-full">
                    <input className="w-full h-full border-none outline-none px-2 xl:px-10  " type="text" />
                </form>
                <button className="w-4/12 bg-blue-500">Search</button>
            </div>
            <div className="w-auto xl:w-[25%] h-full bg-lime-500">test</div>
        </div>
    );
};

export default SearchBar;
