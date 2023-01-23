import React, { useContext, useEffect } from "react";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import HeroGreeting from "./Hero/HeroGreeting";
import HeroRecipeSkeleton from "./Hero/HeroRecipeSkeleton";
import { RecipesContext } from "../../store/RecipeContext";
import { useState } from "react";

const RecipeContainer = ({}) => {
    const { heroID } = useContext(RecipesContext);
    const [hero, setHero] = useState({});

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
        <div className="relative w-full h-full pt-4 flex justify-between md:overflow-hidden">
            <RecipeList />

            {Object.keys(hero).length === 0 ? <HeroGreeting /> : <HeroRecipe hero={hero} />}
        </div>
    );
};

export default RecipeContainer;
