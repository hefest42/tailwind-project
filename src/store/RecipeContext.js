import React, { useState } from "react";

export const RecipesContext = React.createContext();

export function RecipeProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [hero, setHero] = useState({});

    const value = {
        searchTerm,
        setSearchTerm,
        hero,
        setHero,
    };

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
