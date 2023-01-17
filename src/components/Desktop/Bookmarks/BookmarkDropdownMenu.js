import React from "react";

import Bookmark from "./Bookmark";

const BookmarkDropdownMenu = ({}) => {
    return (
        <div className="absolute top-full right-0 z-50 w-[20rem] h-80 bg-dark-blue">
            <Bookmark />
            <Bookmark />
        </div>
    );
};

export default BookmarkDropdownMenu;
