import React, { useContext } from "react";

import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { RiExternalLinkLine } from "react-icons/ri";
import { RecipesContext } from "../../../store/RecipeContext";

const HeroRecipe = ({ hero }) => {
    const { bookmarks, setBookmarks } = useContext(RecipesContext);

    const addAndRemoveBookmakrs = (bookmark) => {
        if (bookmarks.filter((bm) => bm.title === bookmark.title).length > 0) {
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
        <div className="w-full md:w-[64%] lg:w-[69%] h-full text-dark-yellow overflow-scroll">
            <div className="w-full h-1/4 xs:h-1/3 rounded-xl">
                <img loading="lazy" className="w-full h-full object-cover rounded-xl" src={hero.image_url} alt="" />
            </div>

            <h1 className="w-full text-4xl flex justify-center text-center">{hero.title}</h1>

            <div className="w-full flex justify-center mt-6 ">
                {bookmarks.filter((bm) => bm.title === hero.title).length > 0 ? (
                    <BsBookmarkFill
                        className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
                        onClick={() => addAndRemoveBookmakrs(hero)}
                    />
                ) : (
                    <BsBookmark
                        className="w-8 h-8 md:w-10 md:h-10 cursor-pointer"
                        onClick={() => addAndRemoveBookmakrs(hero)}
                    />
                )}
            </div>

            <div className="w-full flex justify-center items-center ">
                <ul className="w-full bg-skeleton-dark mt-8 list-none columns-3 md:columns-2  p-4 rounded-xl">
                    {hero.ingredients.map((ing, i) => (
                        <li key={i} className="mb-2 p-1">
                            {ing}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex flex-col justify-center items-center  text-center mt-4">
                <p>To see more detailed description on how to make {hero.title}, press the button</p>
                <a href={hero.source_url} target="_blank" rel="noopener noreferrer">
                    <button className="h-10 px-8 bg-bright-red rounded-lg mt-4 hover:bg-dark-red flex justify-center items-center">
                        Recipe <RiExternalLinkLine className="ml-2" />
                    </button>
                </a>
            </div>

            <div className="flex flex-col justify-center items-center text-center mt-4">
                <p>For more recipes from {hero.publisher}, press the button</p>
                <a href={hero.publisher_url} target="_blank" rel="noopener noreferrer">
                    <button className="h-10 px-8 bg-bright-red rounded-md mt-4 hover:bg-dark-red flex justify-center items-center">
                        Publisher
                        <RiExternalLinkLine className="ml-2" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default HeroRecipe;
