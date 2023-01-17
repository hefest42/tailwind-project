import { useEffect, useState } from "react";

import SearchBar from "./components/Desktop/Search-Bar/SearchBar";
import RecipeContainer from "./components/Desktop/RecipeContainer";
import MobileContainer from "./components/Mobile/MobileContainer";
import MobileSearchBar from "./components/Mobile/MobileSearchBar";

// seperate hero recipe for desktop & mobile
function App() {
    const [search, setSearch] = useState("");
    const [heroID, setHeroID] = useState("");
    const [heroRecipe, setHeroRecipe] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [isRecipeListLoading, setIsRecipeListLoading] = useState(false);
    const [displaySideMenu, setDisplaySideMenu] = useState(false);

    useEffect(() => {
        if (search === "") return;

        const fetchRecipes = async () => {
            try {
                setIsRecipeListLoading(true);

                const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`);

                const data = await response.json();

                setRecipes(data.recipes);
                setIsRecipeListLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRecipes();
    }, [search]);

    useEffect(() => {
        if (heroID === "") return;

        const fetchHeroRecipe = async () => {
            try {
                const response = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${heroID}`);

                const data = await response.json();

                const { recipe } = data;

                setHeroRecipe(recipe);
            } catch (error) {}
        };

        fetchHeroRecipe();
    }, [heroID]);

    return (
        <>
            <div
                className={`md:hidden w-full  bg-background-black ${
                    Object.keys(heroRecipe).length === 0 ? "h-screen overflow-hidden" : ""
                }`}
            >
                <div className={`md:hidden w-full bg-background-black flex flex-col justify-start items-center`}>
                    <MobileSearchBar setSearch={setSearch} setDisplaySideMenu={setDisplaySideMenu} />
                    <MobileContainer
                        recipes={recipes}
                        setHeroID={setHeroID}
                        heroRecipe={heroRecipe}
                        isRecipeListLoading={isRecipeListLoading}
                        displaySideMenu={displaySideMenu}
                        setDisplaySideMenu={setDisplaySideMenu}
                    />
                </div>
            </div>

            <div className="hidden w-full h-screen bg-background-black md:flex flex-col justify-center items-center">
                <div className="w-full h-screen lg:w-[80%] lg:h-[95%] xl:w-[70%] 2xl:w-[60%] bg-background-black md:flex flex-col items-center">
                    <SearchBar setSearch={setSearch} />
                    <RecipeContainer
                        recipes={recipes}
                        setHeroID={setHeroID}
                        heroRecipe={heroRecipe}
                        isRecipeListLoading={isRecipeListLoading}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
