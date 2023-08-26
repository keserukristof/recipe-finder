import { FunctionComponent } from "react";

import { Grid } from "@mui/material";

import { MediaCard } from "../../cards/media-card.component";
import { useGetRecipesQuery } from "../../../features/api/api.slice";
import { MediaCardAdditionalSection } from "./media-card-additional-section";
import { MediaCardActionButtons } from "./media-card-action-buttons.component";


export const RecipesList: FunctionComponent = () => {
    const { data: recipes } = useGetRecipesQuery();

    return (
        <Grid container spacing={2} justifyContent="space-evenly">
            {recipes?.map(recipe => {
                const { id, name, description, complexity, preparationTime } = recipe;
                return (<Grid item>
                    <MediaCard title={name} description={description} >
                        <MediaCardAdditionalSection complexity={complexity} preparationTime={preparationTime} />
                        <MediaCardActionButtons id={id} linkPath="recipes" buttonLabel="Learn More" />
                    </MediaCard>
                </Grid>);
            })}
        </Grid>
    );
}