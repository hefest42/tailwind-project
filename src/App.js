import { useEffect, useState } from "react";

import SearchBar from "./components/Desktop/Search-Bar/SearchBar";
import MobileContainer from "./components/Mobile/MobileContainer";
import RecipeContainer from "./components/Desktop/RecipeContainer";
import MobileSearchBar from "./components/Mobile/MobileSearchBar";

// seperate hero recipe for desktop & mobile
function App() {
    const [search, setSearch] = useState("");
    const [hero, setHero] = useState({});
    const [recipes, setRecipes] = useState([]);
    const [isRecipeListLoading, setIsRecipeListLoading] = useState(false);

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

    return (
        <>
            <div className="md:hidden w-full h-screen bg-background-black">
                {/* <div className="md:hidden w-full h-screen bg-background-black flex flex-col justify-start items-center">
                    <MobileSearchBar />
                    <MobileContainer recipes={recipes} />
                </div> */}
            </div>

            <div className="hidden w-full h-screen bg-background-black md:flex flex-col justify-center items-center">
                <div className="w-full h-screen lg:w-[80%] lg:h-[95%] xl:w-[70%] 2xl:w-[60%] bg-background-black md:flex flex-col items-center">
                    <SearchBar setSearch={setSearch} />
                    <RecipeContainer
                        recipes={recipes}
                        hero={hero}
                        setHero={setHero}
                        isRecipeListLoading={isRecipeListLoading}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
