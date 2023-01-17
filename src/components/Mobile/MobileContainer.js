import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import MobileSideMenu from "./MobileSideMenu";
import MobileHeroRecipe from "./MobileHeroRecipe";
import HeroRecipeSkeleton from "../Desktop/Hero/HeroRecipeSkeleton";

const MobileContainer = ({
    recipes,
    setHeroID,
    heroRecipe,
    isRecipeListLoading,
    displaySideMenu,
    setDisplaySideMenu,
}) => {
    const handlers = useSwipeable({
        onSwipedRight: () => setDisplaySideMenu(true),
        onSwipedLeft: () => setDisplaySideMenu(false),
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative bg-background-black w-full py-4">
            <MobileSideMenu
                displaySideMenu={displaySideMenu}
                recipes={recipes}
                setHeroID={setHeroID}
                isRecipeListLoading={isRecipeListLoading}
            />
            {Object.keys(heroRecipe).length === 0 ? <div>test</div> : <MobileHeroRecipe heroRecipe={heroRecipe} />}
            {/* <HeroRecipeSkeleton /> */}
        </div>
    );
};

export default MobileContainer;
