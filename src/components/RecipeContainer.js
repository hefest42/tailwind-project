import React from "react";

import RecipeList from "./Recipe-List/RecipeList";
import RecipeListMobile from "./Recipe-List/RecipeListMobile";
import HeroRecipe from "./Hero/HeroRecipe";

const RecipeContainer = () => {
    return (
        <div className="relative h-[95%] pt-4 flex justify-between overflow-hidden">
            <RecipeList />
            <RecipeListMobile />
            <HeroRecipe />
        </div>
    );
};

export default RecipeContainer;