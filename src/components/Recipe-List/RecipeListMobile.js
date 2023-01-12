import React from "react";

import RecipeListItem from "../Recipe-List/RecipeListItem";

const RecipeListMobile = ({ displaySearchResults }) => {
    return (
        <div
            className={`absolute top-0 left-0 bg-dark-orange w-full h-full mt-10 transition-transform ${
                displaySearchResults ? "" : "-translate-x-[100%]"
            }`}
        >
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
        </div>
    );
};

export default RecipeListMobile;
