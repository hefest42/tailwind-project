import React from "react";

const RecipeListItem = ({ recipe }) => {
    return (
        <div
            onClick={() => {}}
            className=" bg-skeleton-dark text-dark-yellow w-full h-22 flex justify-between items-center rounded-md mb-1 cursor-pointer hover:bg-skeleton-light"
        >
            <div className="w-[30%] flex justify-center items-center ">
                <img className="rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" src={recipe.image_url} alt="" />
            </div>
            <div className="w-[70%] h-20 text-center flex flex-col justify-center items-center">
                <div className="h-[3rem] overflow-hidden text-ellipsis">{recipe.title}</div>
                <div className="w-[15rem] ">{recipe.publisher}</div>
            </div>
        </div>
    );
};

export default RecipeListItem;
