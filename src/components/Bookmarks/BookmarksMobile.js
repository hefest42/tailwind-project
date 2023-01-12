import React from "react";

const BookmarksMobile = ({ displayBookmarks }) => {
    return (
        <div
            className={`absolute top-0 left-0 w-full h-full mt-10 transition-transform ${
                displayBookmarks ? "" : "-translate-x-[100%]"
            } `}
        ></div>
    );
};

export default BookmarksMobile;
