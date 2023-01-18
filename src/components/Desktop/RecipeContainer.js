import React from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import HeroGreeting from "./Hero/HeroGreeting";
import HeroRecipeSkeleton from "./Hero/HeroRecipeSkeleton";

const RecipeContainer = ({ recipes, setHeroID, heroRecipe, isRecipeListLoading, bookmarks, addBookmark }) => {
    return (
        <div className="relative w-full h-full pt-4 flex justify-between overflow-scroll md:overflow-hidden">
            <RecipeList recipes={recipes} setHeroID={setHeroID} isRecipeListLoading={isRecipeListLoading} />
            {Object.keys(heroRecipe).length === 0 ? (
                <HeroGreeting />
            ) : (
                <HeroRecipe heroRecipe={heroRecipe} addBookmark={addBookmark} bookmarks={bookmarks} />
            )}
        </div>
    );
};

export default RecipeContainer;
