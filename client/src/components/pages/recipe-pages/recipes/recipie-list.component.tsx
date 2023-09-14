import { FunctionComponent } from "react";

import { Grid } from "@mui/material";

import { useGetRecipesQuery } from "../../../../features/api/api.slice";
import RecipeCard from "../recipe-card.component";


export const RecipesList: FunctionComponent = () => {
    const { data: recipes } = useGetRecipesQuery();

    return (
        <Grid container spacing={2} justifyContent="space-evenly">
            {recipes?.map(recipe => 
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