import React from "react";

const RecipeListItemSkeleton = () => {
    return (
        <div className=" bg-skeleton-dark w-full h-22 flex justify-center items-center rounded-md mb-1 cursor-pointer hover:bg-dark-blue">
            <div className="w-[30%] flex justify-center items-center">
                <div className="rounded-full bg-skeleton-light animate-pulse w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18"></div>
            </div>
            <div className="flex-1 h-20 flex flex-col justify-center items-center">
                <div className="w-32 xs:w-44 h-2 bg-skeleton-light animate-pulse mb-3 rounded-md"></div>
                <div className="w-32 xs:w-44 h-2 bg-skeleton-light animate-pulse rounded-md"></div>
            </div>
        </div>
    );
};

export default RecipeListItemSkeleton;
