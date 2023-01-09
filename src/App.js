import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="w-full h-screen bg-background-black flex justify-center items-center">
            <div className="w-full h-full xl:w-7/12 xl:h-[95%] bg-light-blue rounded-md">
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
