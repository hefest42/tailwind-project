import React, { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecipeList = () => {
    const [displayRecipeListMobile, setDisplayRecipeMobile] = useState(true);

    return (
        <div
            className={`absolute md:static top-4 left-0 w-[70%] sm:w-[50%] md:w-[35%] h-full bg-medium-champagne  transition-transform ${
                displayRecipeListMobile ? "" : "-translate-x-full"
            }`}
        >
            <div
                className="md:hidden absolute top-2/4 left-full w-10 h-10 bg-lightest-blue rounded-full flex justify-center items-center"
                onClick={() => setDisplayRecipeMobile((state) => !state)}
            >
                {displayRecipeListMobile ? <FaArrowLeft /> : <FaArrowRight />}
            </div>
        </div>
    );
};

export default RecipeList;
