import React from "react";

const RecipeListMobile = ({ displaySearchResults }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-10 transition-transform ${
                displaySearchResults ? "" : "-translate-x-[100%]"
            }`}
        ></div>
    );
};

export default RecipeListMobile;
