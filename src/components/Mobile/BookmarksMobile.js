import React from "react";

import Bookmark from "../Desktop/Bookmarks/Bookmark";

const BookmarksMobile = ({}) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full transition-transform ${
                false ? "" : "-translate-x-[100%]"
            } `}
        >
            {[].map((bookmark, i) => (
                <Bookmark key={i} />
            ))}
        </div>
    );
};

export default BookmarksMobile;
