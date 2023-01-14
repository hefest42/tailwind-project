import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import MobileSideMenu from "./MobileSideMenu";
import MobileHeroRecipe from "./MobileHeroRecipe";
import HeroRecipeSkeleton from "../Desktop/Hero/HeroRecipeSkeleton";

const MobileContainer = () => {
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    const handlers = useSwipeable({
        onSwipedRight: () => setDisplaySideMenu(true),
        onSwipedLeft: () => setDisplaySideMenu(false),
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative h-full bg-background-black w-full py-4">
            <MobileSideMenu displaySideMenu={displaySideMenu} />
            <MobileHeroRecipe />
            {/* <HeroRecipeSkeleton /> */}
        </div>
    );
};

export default MobileContainer;
