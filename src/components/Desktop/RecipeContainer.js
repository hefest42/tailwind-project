import React, { useContext } from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import HeroGreeting from "./Hero/HeroGreeting";
import HeroRecipeSkeleton from "./Hero/HeroRecipeSkeleton";
import { RecipesContext, RecipeProvider } from "../../store/RecipeContext";

const RecipeContainer = ({}) => {
    return (
        <div className="relative w-full h-full pt-4 flex justify-between  md:overflow-hidden">
            <RecipeList />

            {Object.keys({}).length === 0 ? <HeroGreeting /> : <HeroRecipe />}
        </div>
    );
};

export default RecipeContainer;
