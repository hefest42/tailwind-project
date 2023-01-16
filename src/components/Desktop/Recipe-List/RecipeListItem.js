import React from "react";

const RecipeListItem = ({ image, title, publisher }) => {
    return (
        <div className="bg-light-blue text-dark-yellow w-full h-22 flex justify-between items-center rounded-md mb-1 cursor-pointer hover:bg-dark-blue">
            <div className="w-[30%] flex justify-center items-center ">
                <img className="rounded-full w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18" src={image} alt="" />
            </div>
            <div className="w-[70%] h-20 text-center flex flex-col justify-center items-center">
                <div className="h-[3rem] overflow-hidden text-ellipsis">{title}</div>
                <div className="w-[15rem] ">{publisher}</div>
            </div>
        </div>
    );
};

export default RecipeListItem;
