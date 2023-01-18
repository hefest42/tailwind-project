import React from "react";

import { FiTrash2, FiExternalLink } from "react-icons/fi";

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

const Bookmark = ({ bookmark }) => {
    console.log(bookmark);
    return (
        <div className="bg-light-blue text-dark-yellow w-full h-22 flex justify-center items-center rounded-md mt-1 cursor-pointer hover:bg-dark-blue">
            <div className="w-[30%] flex justify-center items-center">
                <img className="rounded-full w-14 h-14" src={bookmark.image_url} alt="" />
            </div>

            <div className="flex-1 h-20 flex flex-col justify-center text-sm items-center">
                <div className="mb-3">{bookmark.title}</div>
                <div>{bookmark.publisher}</div>
            </div>

            <div className="h-full flex flex-col justify-betweet">
                <div className="w-8 h-[50%] mb-4 flex justify-center items-center">
                    <FiExternalLink className="w-6 h-6" />
                </div>
                <div className="w-8 h-[50%] flex justify-center items-center">
                    <FiTrash2 className="w-6 h-6" />
                </div>
            </div>
        </div>
    );
};

export default Bookmark;
