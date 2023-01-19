import React from "react";

import RecipeListItem from "./RecipeListItem";
import RecipeListItemSkeleton from "./RecipeListItemSkeleton";
import RecipeListErrorMessage from "../Recipe-List/RecipeListErrorMessage";

const RecipeList = ({ recipes, setHeroID, isRecipeListLoading, recipeListError }) => {
    return (
        <div className={`hidden md:block w-[35%] lg:w-[30%] h-full text-sm md:text-base overflow-y-scroll`}>
            {recipeListError && !isRecipeListLoading && <RecipeListErrorMessage />}
            {!recipeListError && isRecipeListLoading && <RecipeListItemSkeleton />}
            {!recipeListError &&
                !isRecipeListLoading &&
                recipes.length > 0 &&
                recipes.map((recipe, i) => <RecipeListItem key={i} recipe={recipe} setHeroID={setHeroID} />)}
        </div>
    );
};

export default RecipeList;
