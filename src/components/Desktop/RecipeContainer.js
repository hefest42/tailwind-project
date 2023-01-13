import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";

const RecipeContainer = () => {
    return (
        <div className="relative w-full h-full pt-4 flex justify-between overflow-scroll md:overflow-hidden">
            <RecipeList />
            <HeroRecipe />
        </div>
    );
};

export default RecipeContainer;
