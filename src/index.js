import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { RecipeProvider } from "./store/RecipeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <RecipeProvider>
            <App />
        </RecipeProvider>
    </React.StrictMode>
);
