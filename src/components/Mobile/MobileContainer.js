import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import MobileSideMenu from "./MobileSideMenu";
import MobileHeroRecipe from "./MobileHeroRecipe";
import HeroGreetingMobile from "./HeroGreetingMobile";
import HeroRecipeSkeleton from "../Desktop/Hero/HeroRecipeSkeleton";

const MobileContainer = () => {
    const handlers = useSwipeable({
        onSwipedRight: () => {},
        onSwipedLeft: () => {},
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative bg-background-black w-full pt-4">
            <MobileSideMenu />
            {Object.keys({}).length === 0 ? <HeroGreetingMobile /> : <MobileHeroRecipe />}
        </div>
    );
};

export default MobileContainer;

// error
// recipes
