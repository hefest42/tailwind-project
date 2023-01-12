import React, { useState } from "react";

const RecipeBookmarkMobileContainer = () => {
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    const [displayBookmarks, setDisplayBookmarks] = useState(false);

    return (
        <div className="md:hidden absolute top-0 left-0 bg-dark-blue w-[60%] h-full mt-4 flex flex-col justify-start items-start">
            <div className="flex w-full text-dark-yellow ">
                <button
                    className="flex-1 outline-none bg-bright-red h-10"
                    onClick={() => {
                        setDisplaySearchResults(true);
                        setDisplayBookmarks(false);
                    }}
                >
                    Search Results
                </button>
                <button
                    className="flex-1 outline-none bg-lightest-blue h-10 "
                    onClick={() => {
                        setDisplaySearchResults(false);
                        setDisplayBookmarks(true);
                    }}
                >
                    Bookmarks
                </button>
            </div>

            <div
                className={`absolute top-0 left-0 bg-dark-orange w-full h-full mt-10 transition-transform ${
                    displaySearchResults ? "" : "-translate-x-[100%]"
                }`}
            ></div>

            <div
                className={`absolute top-0 left-0 bg-dark-yellow w-full h-full mt-10 transition-transform ${
                    displayBookmarks ? "" : "-translate-x-[100%]"
                } `}
            ></div>
        </div>
    );
};

export default RecipeBookmarkMobileContainer;
