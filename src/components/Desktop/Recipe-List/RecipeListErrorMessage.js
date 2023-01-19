import React from "react";

const RecipeListErrorMessage = () => {
    return (
        <div className="w-full h-28 text-bright-red flex flex-col justify-center items-center leading-10 mt-10 text-center">
            <div>Oops... Something went wrong.</div>
            <div>Search terms are limited, to see the full list</div>
            <a className="hover:underline" href="http://" target="_blank" rel="noopener noreferrer">
                CLICK HERE
            </a>
        </div>
    );
};

export default RecipeListErrorMessage;
