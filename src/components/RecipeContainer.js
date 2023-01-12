import React from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import RecipeBookmarkMobileContainer from "./Recipe-List/RecipeBookmarkMobileContainer";

const RecipeContainer = () => {
    return (
        <div className="relative h-[95%] pt-4 flex justify-between overflow-hidden md:overflow-hidden">
            <RecipeList />
            <RecipeBookmarkMobileContainer />
            <HeroRecipe />
        </div>
    );
};

export default RecipeContainer;
