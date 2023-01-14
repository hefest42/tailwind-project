import React from "react";

import Bookmark from "../Desktop/Bookmarks/Bookmark";

const BookmarksMobile = ({ displayBookmarks }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-10 transition-transform ${
                displayBookmarks ? "" : "-translate-x-[100%]"
            } `}
        >
            <Bookmark />
            <Bookmark />
        </div>
    );
};

export default BookmarksMobile;
