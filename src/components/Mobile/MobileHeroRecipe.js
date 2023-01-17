import React from "react";

import { BsBookmark } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

const MobileHeroRecipe = ({ heroRecipe }) => {
    return (
        <div className="md:hidden w-full h-screen text-dark-yellow">
            <div className="w-full h-40 xs:h-64 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={heroRecipe.image_url} alt="" />
            </div>

            <h1 className="w-full flex justify-center text-3xl text-center">{heroRecipe.title}</h1>

            <div className="w-full flex justify-center my-4">
                <BsBookmark className="w-8 h-8" />
            </div>

            <div className="w-full flex justify-center items-center mb-4 text-xs xs:text-base">
                <ul className="w-full bg-skeleton-dark mb-4 list-none columns-3 p-4 rounded-xl">
                    {heroRecipe.ingredients.map((ing, i) => (
                        <li key={i} className="mb-2 p-1">
                            {ing}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center text-sm text-center">
                <p>To see more detailed description on how to make this recipe, press the button</p>
                <button className="h-8 px-8 bg-bright-red rounded-lg  hover:bg-dark-red flex justify-center items-center mt-4">
                    Recipe <RiExternalLinkLine className="ml-2" />
                </button>
            </div>

            <div className="flex flex-col justify-center items-center text-sm text-center mt-4">
                <p>For more recipes from PUBLISHER, press the button</p>
                <button className="h-8 px-8 bg-bright-red rounded-md hover:bg-dark-red flex justify-center items-center mt-4">
                    Publisher
                    <RiExternalLinkLine className="ml-2" />
                </button>
            </div>
        </div>
    );
};

export default MobileHeroRecipe;
