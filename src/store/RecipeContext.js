import React, { useState, createContext, useContext } from "react";

export const RecipesContext = React.createContext();

export function RecipeProvider({ children }) {
    const [recipes, setRecipes] = useState([]);
    const [hero, setHero] = useState({});

    const value = {
        recipes,
        setRecipes,
        hero,
        setHero,
    };

    return <RecipesContext.Provider value={value}>{children}</RecipesContext.Provider>;
}
