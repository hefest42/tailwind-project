import SearchBar from "./components/Desktop/Search-Bar/SearchBar";
import MobileContainer from "./components/Mobile/MobileContainer";
import RecipeContainer from "./components/Desktop/RecipeContainer";
import MobileSearchBar from "./components/Mobile/MobileSearchBar";

// seperate hero recipe for desktop & mobile
function App() {
    return (
        <>
            <div className="md:hidden w-full h-screen bg-background-black">
                <div className="md:hidden w-full h-screen bg-background-black flex flex-col justify-start items-center">
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
        </>
    );
}

export default App;
