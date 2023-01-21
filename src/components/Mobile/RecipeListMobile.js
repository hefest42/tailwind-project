import React from "react";

import RecipeListItem from "../Desktop/Recipe-List/RecipeListItem";
import RecipeListItemSkeleton from "../Desktop/Recipe-List/RecipeListItemSkeleton";
import RecipeListErrorMessage from "../Desktop/Recipe-List/RecipeListErrorMessage";

const RecipeListMobile = ({}) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-0 transition-transform ${
                true ? "" : "-translate-x-[100%]"
            }`}
        ></div>
    );
};

export default RecipeListMobile;
