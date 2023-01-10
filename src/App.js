import SearchBar from "./components/Search-Bar/SearchBar";
import RecipeContainer from "./components/RecipeContainer";

function App() {
    return (
        <div className="w-full h-screen bg-background-black flex justify-center items-center">
            <div className="w-full h-full xl:w-7/12 xl:h-[95%] flex-col">
                <SearchBar />
                <RecipeContainer />
            </div>
        </div>
    );
}

export default App;
