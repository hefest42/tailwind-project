import React from "react";

import RecipeListItem from "../Recipe-List/RecipeListItem";

const BookmarksMobile = () => {
    return (
        <div className="absolute top-0 right-0 md:hidden bg-dark-blue w-[40%] h-full mt-4">
            <RecipeListItem />
        </div>
    );
};

export default BookmarksMobile;
