import React, { useState, createContext, useContext } from "react";

export const RecipesContext = React.createContext();

export function RecipeProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [heroID, setHeroID] = useState("");

    const value = {
        searchTerm,
        setSearchTerm,
        heroID,
        setHeroID,
    };

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
