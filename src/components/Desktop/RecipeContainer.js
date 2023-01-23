import React, { useContext, useEffect } from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import HeroGreeting from "./Hero/HeroGreeting";
import HeroRecipeSkeleton from "./Hero/HeroRecipeSkeleton";
import { RecipesContext } from "../../store/RecipeContext";

const RecipeContainer = ({}) => {
    const { hero } = useContext(RecipesContext);

    return (
        <div className="relative w-full h-full pt-4 flex justify-between md:overflow-hidden">
            <RecipeList />

            {Object.keys(hero).length === 0 ? <HeroGreeting /> : <HeroRecipe hero={hero} />}
        </div>
    );
};

export default RecipeContainer;
