import React from "react";

import RecipeListItem from "../Desktop/Recipe-List/RecipeListItem";

const RecipeListMobile = ({ displaySearchResults, recipes }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-0 transition-transform bg-medium-champagne ${
                displaySearchResults ? "" : "-translate-x-[100%]"
            }`}
        >
            {recipes.map((recipe, i) => (
                <RecipeListItem key={i} image={recipe.image_url} title={recipe.title} publisher={recipe.publisher} />
            ))}
        </div>
    );
};

export default RecipeListMobile;
