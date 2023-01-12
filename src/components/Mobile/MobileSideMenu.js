import React, { useState } from "react";
import { useSwipeable } from "react-swipeable";

const MobileSideMenu = ({ displaySideMenu }) => {
    const [displaySearchResults, setDisplaySearchResults] = useState(true);
    const [displayBookmarks, setDisplayBookmarks] = useState(false);

    const handlers = useSwipeable({
        onSwipedRight: () => {
            setDisplaySearchResults((state) => !state);
            setDisplayBookmarks((state) => !state);
        },
        swipeDuration: 300,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div
            {...handlers}
            className={`md:hidden absolute top-0 left-0 bg-dark-blue w-[60%] h-full mt-4 flex flex-col justify-start items-start overflow-y-scroll transition-transform ${
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
                        setDisplayBookmarks(false);
                    }}
                >
                    Search Results
                </button>
                <button
                    className={`flex-1 outline-none border-b-2 h-10 ${
                        displayBookmarks ? "border-dark-yellow" : "border-dark-blue"
                    }`}
                    onClick={() => {
                        setDisplaySearchResults(false);
                        setDisplayBookmarks(true);
                    }}
                >
                    Bookmarks
                </button>
            </div>
        </div>
    );
};

export default MobileSideMenu;
