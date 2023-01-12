import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

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
        <div
            {...handlers}
            className="relative h-[95%] pt-4 flex justify-between overflow-scroll md:overflow-hidden"
        ></div>
    );
};

export default RecipeContainer;
