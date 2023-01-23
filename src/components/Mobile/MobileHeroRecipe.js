import React, { useContext } from "react";

import { RecipesContext } from "../../store/RecipeContext";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";

const MobileHeroRecipe = ({ hero }) => {
    const { bookmarks, setBookmarks } = useContext(RecipesContext);

    const addAndRemoveBookmakrs = (bookmark) => {
        if (bookmarks.filter((bm) => bm.title === bookmark.title).length > 0) {
            console.log("HELLO");

            const removedBookmark = bookmarks.filter((bm) => bm.recipe_id !== bookmark.recipe_id);

            setBookmarks(removedBookmark);
            localStorage.setItem("bookmarks", JSON.stringify(removedBookmark));

            return;
        }

        const newBookmarks = [...bookmarks, bookmark];

        setBookmarks(newBookmarks);

        localStorage.setItem("bookmarks", JSON.stringify(newBookmarks));
    };

    return (
        <div className="md:hidden w-full h-screen overflow-scroll text-dark-yellow">
            <div className="w-full h-40 xs:h-64 rounded-xl">
                <img className="w-full h-full object-cover rounded-xl" src={hero.image_url} alt="" />
            </div>

            <h1 className="w-full flex justify-center text-3xl text-center">{hero.title}</h1>

            <div className="w-full flex justify-center cursor-pointer my-4">
                {bookmarks.filter((bm) => bm.title === hero.title).length > 0 ? (
                    <BsBookmarkFill className="w-8 h-8" onClick={() => addAndRemoveBookmakrs(hero)} />
                ) : (
                    <BsBookmark className="w-8 h-8" onClick={() => addAndRemoveBookmakrs(hero)} />
                )}
            </div>

            <div className="w-full flex justify-center items-center mb-4 text-xs xs:text-base">
                <ul className="w-full bg-skeleton-dark mb-4 list-none columns-3 p-4 rounded-xl">
                    {hero.ingredients.map((ing, i) => (
                        <li key={i} className="mb-2 p-1">
                            {ing}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center text-sm text-center">
                <p>To see more detailed description on how to make this recipe, press the button</p>
                <a href={hero.source_url} target="_blank" rel="noopener noreferrer">
                    <button className="h-8 px-8 bg-bright-red rounded-lg  hover:bg-dark-red flex justify-center items-center mt-4">
                        Recipe <RiExternalLinkLine className="ml-2" />
                    </button>
                </a>
            </div>

            <div className="flex flex-col justify-center items-center text-sm text-center mt-4">
                <p>For more recipes from PUBLISHER, press the button</p>
                <a href={hero.publisher_url} target="_blank" rel="noopener noreferrer">
                    <button className="h-8 px-8 bg-bright-red rounded-md hover:bg-dark-red flex justify-center items-center mt-4">
                        Publisher
                        <RiExternalLinkLine className="ml-2" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default MobileHeroRecipe;
