import SearchBar from "./components/Desktop/Search-Bar/SearchBar";
import MobileContainer from "./components/Mobile/MobileContainer";

// seperate hero recipe for desktop & mobile
function App() {
    return (
        <div className="w-full h-screen bg-background-black flex flex-col justify-start items-center">
            <SearchBar />
            <MobileContainer />
        </div>
    );
}

export default App;
