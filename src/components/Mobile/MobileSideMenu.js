import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

import RecipeListMobile from "./RecipeListMobile";
import BookmarksMobile from "./BookmarksMobile";

const MobileSideMenu = ({ displaySideMenu }) => {
    const [displaySearchResults, setDisplaySearchResults] = useState(true);

    const handlers = useSwipeable({
        onSwipedRight: () => {
            setDisplaySearchResults((state) => !state);
        },
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div
            {...handlers}
            className={`md:hidden absolute top-0 left-0  bg-background-black w-[75%] xs:w-[55%] h-screen overflow-scroll mt-4 flex flex-col justify-start items-start transition-transform ${
                displaySideMenu ? "" : "-translate-x-[100%]"
            } `}
        >
            <div className="flex w-full text-dark-yellow ">
                <button
                    className={`flex-1 outline-none border-b-2 h-10 ${
                        displaySearchResults ? "border-dark-yellow" : "border-dark-blue"
                    }`}
                    onClick={() => {
                        setDisplaySearchResults(true);
                    }}
                >
                    Search Results
                </button>
                <button
                    className={`flex-1 outline-none border-b-2 h-10 ${
                        !displaySearchResults ? "border-dark-yellow" : "border-dark-blue"
                    }`}
                    onClick={() => {
                        setDisplaySearchResults(false);
                    }}
                >
                    Bookmarks
                </button>
            </div>
            <div className="relative w-full h-full">
                {displaySearchResults && <RecipeListMobile />}
                {!displaySearchResults && <BookmarksMobile />}
            </div>
        </div>
    );
};

export default MobileSideMenu;
