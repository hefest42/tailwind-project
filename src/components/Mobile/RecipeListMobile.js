import React from "react";

import RecipeListItem from "../Desktop/Recipe-List/RecipeListItem";

const RecipeListMobile = ({ displaySearchResults }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-0 transition-transform bg-medium-champagne ${
                displaySearchResults ? "" : "-translate-x-[100%]"
            }`}
        >
            <RecipeListItem />
            <RecipeListItem />
        </div>
    );
};

export default RecipeListMobile;
