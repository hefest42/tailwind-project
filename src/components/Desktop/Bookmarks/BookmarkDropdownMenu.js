import React from "react";

import Bookmark from "./Bookmark";

const BookmarkDropdownMenu = () => {
    return (
        <div className="absolute top-full right-0 z-50 h-auto">
            <div className="w-[20rem] mt-4 bg-background-black">
                {[].length === 0 ? <div></div> : [].map((bookmark, i) => <Bookmark key={i} />)}
            </div>
        </div>
    );
};

export default BookmarkDropdownMenu;
