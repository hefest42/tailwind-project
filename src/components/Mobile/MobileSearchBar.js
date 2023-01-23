import React, { useState, useContext } from "react";

import { RecipesContext } from "../../store/RecipeContext";

import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const MobileSearchBar = () => {
    const { setSearchTerm } = useContext(RecipesContext);
    const [searchInputValue, setSearchInputValue] = useState("");

    const formSubmitHandler = (e) => {
        e.preventDefault();

        setSearchTerm(searchInputValue);
        setSearchInputValue("");
    };

    return (
        <div className="w-full h-10 text-dark-yellow text-sm flex flex-row justify-between items-center">
            <div className="h-full flex flex-col justify-start items-center">
                <div>Recipe</div>
                <div>Search</div>
            </div>

            <form onSubmit={formSubmitHandler} className="h-full flex flex-1 px-5">
                <input
                    type="text"
                    placeholder="Search for Meals..."
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    value={searchInputValue}
                    className="outline-none flex-1 rounded-l-lg"
                />

                <button className=" w-16 h-full bg-bright-red rounded-r-lg">SEARCH</button>
            </form>

            <div className="relative h-full">
                <div className="h-full flex justify-end items-center cursor-pointer">
                    {true ? (
                        <AiOutlineClose className="w-auto h-[90%]" onClick={() => {}} />
                    ) : (
                        <RxHamburgerMenu className="w-auto h-[90%]" onClick={() => {}} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileSearchBar;
