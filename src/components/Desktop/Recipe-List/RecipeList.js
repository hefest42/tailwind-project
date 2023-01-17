import React from "react";

import RecipeListItem from "./RecipeListItem";
import RecipeListItemSkeleton from "./RecipeListItemSkeleton";

const RecipeList = ({ recipes, setHeroID, isRecipeListLoading }) => {
    return (
        <div
            className={`hidden md:block bg-lightest-blue w-[35%] lg:w-[30%] h-full text-sm md:text-base overflow-y-scroll`}
        >
            {isRecipeListLoading ? (
                <RecipeListItemSkeleton />
            ) : (
                recipes.map((recipe, i) => <RecipeListItem key={i} recipe={recipe} setHeroID={setHeroID} />)
            )}
        </div>
    );
};

export default RecipeList;
