import React from "react";

import RecipeListItem from "./RecipeListItem";

const RecipeList = () => {
    return (
        <div className={`hidden md:block w-[35%] lg:w-[30%] h-full overflow-y-scroll`}>
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
            <RecipeListItem />
        </div>
    );
};

export default RecipeList;
