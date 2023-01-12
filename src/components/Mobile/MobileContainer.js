import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import MobileSideMenu from "./MobileSideMenu";
import HeroRecipe from "../Desktop/Hero/HeroRecipe";

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
        <div {...handlers} className="relative w-full h-full">
            <MobileSideMenu displaySideMenu={displaySideMenu} />
            <HeroRecipe />
        </div>
    );
};

export default MobileContainer;
