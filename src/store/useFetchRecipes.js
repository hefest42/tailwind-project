import { useEffect, useState } from "react";

export const useFetchRecipes = (search) => {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (search === "") return;

        setIsLoading(true);

        (async () => {
            try {
                setError(false);

                const response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`);

                if (!response.ok) throw new Error();

                const data = await response.json();

                if (data.recipes.length === 0) throw new Error();

                setRecipes(data.recipes);
            } catch (error) {
                setIsLoading(false);
                setError(true);
            }
        })();

        // for nicer loading
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 500);

        // not sure if i need this
        return () => clearTimeout(timeout);
    }, [search]);

    return { recipes, isLoading, error };
};
