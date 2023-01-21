import React, { useState, createContext, useContext } from "react";

export const RecipesContext = React.createContext();

export function RecipeProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [hero, setHero] = useState({});

    const value = {
        searchTerm,
        setSearchTerm,
    };

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
