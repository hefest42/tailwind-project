import React from "react";

import { BsBookmark } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

const testRecipe = {
    publisher: "101 Cookbooks",
    ingredients: [
        "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled",
        "1 3/4 (.44 ounce) teaspoons salt",
        "1 teaspoon (.11 ounce) instant yeast",
        "1/4 cup (2 ounces) olive oil (optional)",
        "1 3/4 cups (14 ounces) water, ice cold (40F)",
        "Semolina flour OR cornmeal for dusting",
    ],
    source_url: "http://www.101cookbooks.com/archives/001199.html",
    recipe_id: "47746",
    image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg",
    social_rank: 100,
    publisher_url: "http://www.101cookbooks.com",
    title: "Best Pizza Dough Ever",
};

const MobileHeroRecipe = ({ heroRecipe }) => {
    return (
        <div className="md:hidden w-full h-full text-dark-yellow">
            <div className="w-full h-40 xs:h-64 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={heroRecipe.image_url} alt="" />
            </div>

            <h1 className="w-full flex justify-center text-3xl">{heroRecipe.title}</h1>

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
