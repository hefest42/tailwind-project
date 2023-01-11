import React from "react";

import RecipeListItem from "./RecipeListItem";
import RecipeListItemSkeleton from "./RecipeListItemSkeleton";

const RecipeList = () => {
    return (
        <div className={`hidden md:block w-[35%] lg:w-[30%] h-full text-sm md:text-base overflow-y-scroll`}>
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItemSkeleton />
        </div>
    );
};

export default RecipeList;
