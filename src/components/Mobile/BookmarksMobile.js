import React, { useContext } from "react";

import Bookmark from "../Desktop/Bookmarks/Bookmark";
import { RecipesContext } from "../../store/RecipeContext";

const BookmarksMobile = ({ displayBookmarks }) => {
    const { bookmarks } = useContext(RecipesContext);

    return (
        <div
            className={`absolute top-0 left-0 w-full h-full transition-transform bg-background-black z-20 ${
                displayBookmarks ? "" : "-translate-x-[100%]"
            } `}
        >
            {bookmarks.map((bookmark, i) => (
                <Bookmark key={i} bookmark={bookmark} />
            ))}
        </div>
    );
};

export default BookmarksMobile;
