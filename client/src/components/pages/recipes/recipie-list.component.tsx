import { FunctionComponent } from "react";

import { Grid } from "@mui/material";

import { MediaCard } from "../../cards/media-card.component";
import { useGetRecipesQuery } from "../../../features/api/api.slice";


export const RecipesList: FunctionComponent = () => {
    const { data: recipes } = useGetRecipesQuery();

    return (
        <Grid container spacing={2}>
            {recipes?.map(recipe => {
                const { id, name, description } = recipe;
                return (<Grid item>
                    <MediaCard
                        id={id}
                        title={name}
                        description={description}
                        buttonLabel="Learn More"
                        linkPath="recipes"
                    />
                </Grid>);
            })}
        </Grid>
    );
}