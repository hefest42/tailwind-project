import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className="w-full h-screen bg-slate-800 flex justify-center items-center">
            <div className="w-full h-full xl:w-7/12 xl:h-[95%] bg-gray-700 rounded-md">
                <SearchBar />
            </div>
        </div>
    );
}

export default App;
