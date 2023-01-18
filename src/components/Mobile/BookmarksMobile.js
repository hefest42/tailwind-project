import React from "react";

import Bookmark from "../Desktop/Bookmarks/Bookmark";

const BookmarksMobile = ({ displayBookmarks, bookmarks, setHeroID }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full transition-transform ${
                displayBookmarks ? "" : "-translate-x-[100%]"
            } `}
        >
            {bookmarks.map((bookmark, i) => (
                <Bookmark key={i} bookmark={bookmark} setHeroID={setHeroID} />
            ))}
        </div>
    );
};

export default BookmarksMobile;
