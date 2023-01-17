import React from "react";

import RecipeListItem from "../Desktop/Recipe-List/RecipeListItem";
import RecipeListItemSkeleton from "../Desktop/Recipe-List/RecipeListItemSkeleton";

const RecipeListMobile = ({ displaySearchResults, recipes, setHeroID, isRecipeListLoading }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-0 transition-transform ${
                displaySearchResults ? "" : "-translate-x-[100%]"
            }`}
        >
            {isRecipeListLoading ? (
                <RecipeListItemSkeleton />
            ) : (
                recipes.map((recipe, i) => <RecipeListItem key={i} recipe={recipe} setHeroID={setHeroID} />)
            )}
        </div>
    );
};

export default RecipeListMobile;
