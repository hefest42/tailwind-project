import React from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import HeroRecipeSkeleton from "./Hero/HeroRecipeSkeleton";

const RecipeContainer = () => {
    return (
        <div className="relative w-full h-full pt-4 flex justify-between overflow-scroll md:overflow-hidden">
            <RecipeList />
            <HeroRecipe />
            {/* <HeroRecipeSkeleton /> */}
        </div>
    );
};

export default RecipeContainer;
