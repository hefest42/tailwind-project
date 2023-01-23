import React, { useState, useEffect, useContext } from "react";

import { RecipesContext } from "../../../store/RecipeContext";

const RecipeListItem = ({ recipe }) => {
    const { setHero } = useContext(RecipesContext);
    const [heroID, setHeroID] = useState("");

    useEffect(() => {
        if (heroID === "") return;

        (async () => {
            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${heroID}`);

                const data = await response.json();

                const { recipe } = data;

                setHero(recipe);
            } catch (error) {}
        })();
    }, [heroID]);

    return (
        <div
            onClick={() => setHeroID(recipe.recipe_id)}
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
