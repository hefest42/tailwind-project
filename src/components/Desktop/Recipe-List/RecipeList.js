import React from "react";

import RecipeListItem from "./RecipeListItem";

const RecipeList = ({ recipes }) => {
    return (
        <div
            className={`hidden md:block bg-lightest-blue w-[35%] lg:w-[30%] h-full text-sm md:text-base overflow-y-scroll`}
        >
            {recipes.map((recipe, i) => (
                <RecipeListItem key={i} image={recipe.image_url} title={recipe.title} publisher={recipe.publisher} />
            ))}
        </div>
    );
};

export default RecipeList;
