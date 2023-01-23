import React, { useContext } from "react";

import { useSwipeable } from "react-swipeable";

import MobileSideMenu from "./MobileSideMenu";
import MobileHeroRecipe from "./MobileHeroRecipe";
import HeroGreetingMobile from "./HeroGreetingMobile";
import { RecipesContext } from "../../store/RecipeContext";

const MobileContainer = ({ displaySideMenu }) => {
    const { hero } = useContext(RecipesContext);

    const handlers = useSwipeable({
        onSwipedRight: () => {},
        onSwipedLeft: () => {},
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div {...handlers} className="relative bg-background-black w-full pt-4">
            <MobileSideMenu displaySideMenu={displaySideMenu} />
            {Object.keys(hero).length === 0 ? <HeroGreetingMobile /> : <MobileHeroRecipe hero={hero} />}
        </div>
    );
};

export default MobileContainer;

// error
// recipes
