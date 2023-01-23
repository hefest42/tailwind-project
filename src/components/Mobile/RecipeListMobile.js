import React, { useContext } from "react";

import RecipeListItem from "../Desktop/Recipe-List/RecipeListItem";
import RecipeListItemSkeleton from "../Desktop/Recipe-List/RecipeListItemSkeleton";
import RecipeListErrorMessage from "../Desktop/Recipe-List/RecipeListErrorMessage";
import { useFetchRecipes } from "../../store/useFetchRecipes";
import { RecipesContext } from "../../store/RecipeContext";

const RecipeListMobile = ({}) => {
    const { searchTerm } = useContext(RecipesContext);
    const { recipes, isLoading, error } = useFetchRecipes(searchTerm);

    return (
        <div className={`absolute top-0 left-0 w-full h-full mt-0 transition-transform z-10`}>
            {error && !isLoading && <RecipeListErrorMessage />}
            {!error && isLoading && <RecipeListItemSkeleton />}
            {!error &&
                !isLoading &&
                recipes.length > 0 &&
                recipes.map((recipe, i) => <RecipeListItem key={recipe.recipe_id} recipe={recipe} />)}
        </div>
    );
};

export default RecipeListMobile;
