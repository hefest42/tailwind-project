import React from "react";

import { BsBookmark } from "react-icons/bs";

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

const HeroRecipe = () => {
    return (
        <div className="w-full md:w-[64%] lg:w-[69%] h-full text-dark-yellow">
            <div className="w-full h-1/4 xs:h-1/3 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={testRecipe.image_url} alt="" />
            </div>

            <h1 className="w-full text-2xl sm:text-4xl flex justify-center">{testRecipe.title}</h1>
            <div className="w-full flex justify-center mt-6">
                <BsBookmark className="w-8 h-8 md:w-12 md:h-12" />
            </div>
            <div className="w-full flex justify-center items-center">
                <ul className="w-full bg-skeleton-dark mt-8 list-none md:list-disc columns-3 md:columns-2 text-xs md:text-base p-8">
                    {testRecipe.ingredients.map((ing, i) => (
                        <li key={i} className="mb-4">
                            {ing}
                        </li>
                    ))}
                </ul>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default HeroRecipe;
