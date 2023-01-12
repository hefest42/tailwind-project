import React, { useState } from "react";

import RecipeListMobile from "./RecipeListMobile";
import BookmarksMobile from "../Bookmarks/BookmarksMobile";

const RecipeBookmarkMobileContainer = () => {
    const [displaySearchResults, setDisplaySearchResults] = useState(false);
    const [displayBookmarks, setDisplayBookmarks] = useState(false);

    return (
        <div className="md:hidden absolute top-0 left-0 bg-dark-blue w-[60%] h-full mt-4 flex flex-col justify-start items-start overflow-y-scroll">
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

            <RecipeListMobile displaySearchResults={displaySearchResults} />
            <BookmarksMobile displayBookmarks={displayBookmarks} />
        </div>
    );
};

export default RecipeBookmarkMobileContainer;
