import React from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import HeroRecipeSkeleton from "./Hero/HeroRecipeSkeleton";

const RecipeContainer = ({ recipes, setHeroID, heroRecipe, isRecipeListLoading, addBookmark }) => {
    return (
        <div className="relative w-full h-full pt-4 flex justify-between overflow-scroll md:overflow-hidden">
            <RecipeList recipes={recipes} setHeroID={setHeroID} isRecipeListLoading={isRecipeListLoading} />
            {Object.keys(heroRecipe).length === 0 ? (
                <div>test</div>
            ) : (
                <HeroRecipe heroRecipe={heroRecipe} addBookmark={addBookmark} />
            )}
        </div>
    );
};

export default RecipeContainer;
