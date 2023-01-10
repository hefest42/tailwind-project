import React from "react";

// "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"

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

const RecipeListItem = () => {
    return (
        <div className="bg-light-blue text-dark-yellow w-full h-28 flex justify-center items-center rounded-md mb-1 cursor-pointer hover:bg-dark-blue">
            <div className="w-[30%] flex justify-center items-center">
                <img
                    className="rounded-full w-20 h-20"
                    src="http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
                    alt=""
                />
            </div>
            <div className="flex-1 h-20 flex flex-col justify-center items-center">
                <div className="mb-3">{testRecipe.title}</div>
                <div>{testRecipe.publisher}</div>
            </div>
        </div>
    );
};

export default RecipeListItem;
