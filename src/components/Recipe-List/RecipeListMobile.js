import React, { useState } from "react";

import RecipeListItem from "./RecipeListItem";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecipeListMobile = () => {
    const [displayRecipeListMobile, setDisplayRecipeMobile] = useState(true);

    return (
        <div
            className={`absolute md:hidden top-4 left-0 w-[70%] h-full flex flex-row justify-between items-center bg-medium-champagne transition-transform ${
                displayRecipeListMobile ? "" : "-translate-x-[100%]"
            }`}
        >
            <div className="w-[100%] h-full overflow-y-scroll">
                <RecipeListItem />
                <RecipeListItem />
                <RecipeListItem />
            </div>

            <div
                className={`md:hidden w-10 h-10 bg-lightest-blue rounded-full flex justify-center items-center transition-transform ${
                    displayRecipeListMobile ? "" : "translate-x-[100%]"
                } `}
                onClick={() => setDisplayRecipeMobile((state) => !state)}
            >
                {displayRecipeListMobile ? <FaArrowLeft /> : <FaArrowRight />}
            </div>
        </div>
    );
};

export default RecipeListMobile;
