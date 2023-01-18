import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import MobileSideMenu from "./MobileSideMenu";
import MobileHeroRecipe from "./MobileHeroRecipe";
import HeroGreetingMobile from "./HeroGreetingMobile";
import HeroRecipeSkeleton from "../Desktop/Hero/HeroRecipeSkeleton";

const MobileContainer = ({
    recipes,
    setHeroID,
    heroRecipe,
    isRecipeListLoading,
    displaySideMenu,
    setDisplaySideMenu,
    bookmarks,
    addBookmark,
}) => {
    const handlers = useSwipeable({
        onSwipedRight: () => setDisplaySideMenu(true),
        onSwipedLeft: () => setDisplaySideMenu(false),
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative bg-background-black w-full pt-4">
            <MobileSideMenu
                displaySideMenu={displaySideMenu}
                recipes={recipes}
                setHeroID={setHeroID}
                isRecipeListLoading={isRecipeListLoading}
                bookmarks={bookmarks}
            />
            {Object.keys(heroRecipe).length === 0 ? (
                <HeroGreetingMobile />
            ) : (
                <MobileHeroRecipe heroRecipe={heroRecipe} addBookmark={addBookmark} bookmarks={bookmarks} />
            )}
            {/* <HeroRecipeSkeleton /> */}
        </div>
    );
};

export default MobileContainer;
