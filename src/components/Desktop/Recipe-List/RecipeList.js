import React, { useContext } from "react";

import RecipeListItem from "./RecipeListItem";
import RecipeListItemSkeleton from "./RecipeListItemSkeleton";
import RecipeListErrorMessage from "../Recipe-List/RecipeListErrorMessage";
import { RecipesContext } from "../../../store/RecipeContext";
import { useFetchRecipes } from "../../../store/useFetchRecipes";

const RecipeList = ({}) => {
    const { searchTerm } = useContext(RecipesContext);
    const { recipes, isLoading, error } = useFetchRecipes(searchTerm);

    return (
        <div className={`hidden md:block w-[35%] lg:w-[30%] h-full text-sm md:text-base overflow-y-scroll`}>
            {error && !isLoading && <RecipeListErrorMessage />}
            {!error && isLoading && <RecipeListItemSkeleton />}
            {!error &&
                !isLoading &&
                recipes.length > 0 &&
                recipes.map((recipe, i) => <RecipeListItem key={recipe.recipe_id} recipe={recipe} />)}
        </div>
    );
};

export default RecipeList;
