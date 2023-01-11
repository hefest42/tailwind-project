import React, { useState } from "react";

import RecipeListItem from "./RecipeListItem";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecipeListMobile = () => {
    const [displayRecipeListMobile, setDisplayRecipeMobile] = useState(true);

    return (
        <div
            className={`absolute md:hidden top-4 left-0 w-[70%] xs:w-[60%] sm:w-[55%] h-full flex flex-row text-xs xs:text-sm justify-between items-center transition-transform ${
                displayRecipeListMobile ? "" : "-translate-x-[100%]"
            }`}
        >
            <div className="w-[100%] h-full overflow-y-scroll">
                <RecipeListItem />
                <RecipeListItem />
                <RecipeListItem />
            </div>

            <div
                className={`md:hidden w-12 h-12 bg-lightest-blue rounded-full flex justify-center items-center transition-transform ${
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
