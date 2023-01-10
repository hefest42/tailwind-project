import React from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";

const RecipeContainer = () => {
    return (
        <div className="relative h-[95%] pt-4 flex justify-between overflow-hidden">
            <RecipeList />
            <HeroRecipe />
        </div>
    );
};

export default RecipeContainer;
