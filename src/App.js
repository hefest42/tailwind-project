import { useEffect, useState } from "react";

import SearchBar from "./components/Desktop/Search-Bar/SearchBar";
import RecipeContainer from "./components/Desktop/RecipeContainer";
import MobileContainer from "./components/Mobile/MobileContainer";
import MobileSearchBar from "./components/Mobile/MobileSearchBar";
import { RecipeProvider } from "./store/RecipeContext";

// change colors of RecipeListItem
function App() {
    // const addBookmark = (bookmark) => {
    //     if (bookmarks.filter((bm) => bm.title === bookmark.title).length > 0)
    //         setBookmarks((state) => state.filter((bm) => bm.title !== bookmark.title));
    //     else setBookmarks((state) => [...state, bookmark]);

    //     const addNewBookmark = [...bookmarks, bookmark];
    //     const newBookmarks = JSON.stringify(addNewBookmark);

    //     localStorage.setItem("bookmarks", newBookmarks);
    // };

    // useEffect(() => {
    //     if (search === "") return;

    //     const fetchRecipes = async () => {
    //         try {
    //             setIsRecipeListLoading(true);

    //             const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`);

    //             const data = await response.json();

    //             if (data.recipes.length === 0) {
    //                 throw new Error();
    //             }
    //         } catch (error) {}
    //     };

    //     fetchRecipes();
    // }, []);

    // useEffect(() => {
    //     if (heroID === "") return;

    //     const fetchHeroRecipe = async () => {
    //         try {
    //             const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${heroID}`);

    //             const data = await response.json();

    //             const { recipe } = data;
    //         } catch (error) {}
    //     };

    //     fetchHeroRecipe();
    // }, []);

    // useEffect(() => {
    //     const storedBookmarks = JSON.parse(localStorage.getItem("bookmarks"));

    //     setBookmarks(storedBookmarks);
    // }, []);

    return (
        <RecipeProvider>
            <div
                className={`md:hidden w-full bg-background-black ${
                    Object.keys({}).length === 0 ? "h-screen overflow-hidden" : ""
                }`}
            >
                <div className={`md:hidden w-full bg-background-black flex flex-col justify-start items-center`}>
                    <MobileSearchBar />
                    <MobileContainer />
                </div>
            </div>

            <div className="hidden w-full h-screen bg-background-black md:flex flex-col justify-center items-center">
                <div className="w-full h-screen lg:w-[80%] lg:h-[95%] xl:w-[70%] 2xl:w-[60%] bg-background-black md:flex flex-col items-center">
                    <SearchBar />
                    <RecipeContainer />
                </div>
            </div>
        </RecipeProvider>
    );
}

export default App;
