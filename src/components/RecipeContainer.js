import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import RecipeList from "./Recipe-List/RecipeList";
import HeroRecipe from "./Hero/HeroRecipe";
import RecipeBookmarkMobileContainer from "./Recipe-List/RecipeBookmarkMobileContainer";

const RecipeContainer = () => {
    const [displayRecipeBookmarkMobileContainer, setDisplayRecipeBookmarkMobileContainer] = useState(false);

    const handlers = useSwipeable({
        onSwipedLeft: () => setDisplayRecipeBookmarkMobileContainer(false),
        onSwipedRight: () => setDisplayRecipeBookmarkMobileContainer(true),
        swipeDuration: 700,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative h-[95%] pt-4 flex justify-between overflow-hidden md:overflow-hidden">
            <RecipeList />
            <RecipeBookmarkMobileContainer
                displayRecipeBookmarkMobileContainer={displayRecipeBookmarkMobileContainer}
            />
            <HeroRecipe />
        </div>
    );
};

export default RecipeContainer;
