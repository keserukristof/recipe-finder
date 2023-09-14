import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";
import { useGetRecipesQuery } from "../../../../features/api/api.slice";
import RecipeCard from "../recipe-card.component";
import { Grid } from "@mui/material";


export const RecipeSearchResultsPage: FunctionComponent = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const ingredientIds = queryParams.get('ingredients')?.split("-") || [];

    const { data: recipes } = useGetRecipesQuery();

    const matchedRecipes = recipes?.filter(recipe => {
        return ingredientIds.every(ingredientId =>
            recipe.ingredients.some(ingredient => ingredient.id.toString() === ingredientId)
        );
    });

    if (!matchedRecipes || matchedRecipes.length < 1) {
        return <p>No recipes found for the selected ingredients.</p>;
    }


    return (
        <Grid container spacing={2} justifyContent="space-evenly">
            {matchedRecipes.map(recipe =>
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    description={recipe.description}
                    complexity={recipe.complexity}
                    preparationTime={recipe.preparationTime}
                />
            )}
        </Grid>
    );
}