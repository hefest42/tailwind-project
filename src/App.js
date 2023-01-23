import React, { useEffect, useContext } from "react";

import SearchBar from "./components/Desktop/Search-Bar/SearchBar";
import RecipeContainer from "./components/Desktop/RecipeContainer";
import MobileContainer from "./components/Mobile/MobileContainer";
import MobileSearchBar from "./components/Mobile/MobileSearchBar";
import { RecipesContext } from "./store/RecipeContext";
import { useState } from "react";

function App() {
    const { hero, setBookmarks } = useContext(RecipesContext);
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    useEffect(() => {
        const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));

        setBookmarks(storedBookmarks);
    }, []);

    return (
        <>
            <div
                className={`md:hidden w-full bg-background-black ${
                    Object.keys(hero).length === 0 ? "h-screen overflow-hidden" : ""
                }`}
            >
                <div className={`md:hidden w-full bg-background-black flex flex-col justify-start items-center`}>
                    <MobileSearchBar displaySideMenu={displaySideMenu} setDisplaySideMenu={setDisplaySideMenu} />
                    <MobileContainer displaySideMenu={displaySideMenu} />
                </div>
            </div>

            <div className="hidden w-full h-screen bg-background-black md:flex flex-col justify-center items-center">
                <div className="w-full h-screen lg:w-[80%] lg:h-[95%] xl:w-[70%] 2xl:w-[60%] bg-background-black md:flex flex-col items-center">
                    <SearchBar />
                    <RecipeContainer />
                </div>
            </div>
        </>
    );
}

export default App;
