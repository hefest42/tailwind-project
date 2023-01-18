import React from "react";

import Bookmark from "./Bookmark";

const BookmarkDropdownMenu = ({ bookmarks }) => {
    return (
        <div className="absolute top-full right-0 z-50 h-auto">
            <div className="w-[20rem] mt-4 bg-dark-blue">
                {bookmarks.length === 0 ? (
                    <div></div>
                ) : (
                    bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark} />)
                )}
            </div>
        </div>
    );
};

export default BookmarkDropdownMenu;
