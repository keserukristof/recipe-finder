import React, { FunctionComponent } from "react";
import { Grid } from "@mui/material";
import { MediaCard } from "../../cards/media-card.component";
import { MediaCardAdditionalSection } from "../../pages/recipe-pages/recipes/media-card-additional-section";
import { MediaCardActionButtons } from "../../pages/recipe-pages/recipes/media-card-action-buttons.component";

interface RecipeCardProps {
    id: number;
    name: string;
    description: string;
    complexity: string;
    preparationTime: number;
}

const RecipeCard: FunctionComponent<RecipeCardProps> = ({ id, name, description, complexity, preparationTime }) => {
    return (
        <Grid item>
            <MediaCard title={name} description={description}>
                <MediaCardAdditionalSection complexity={complexity} preparationTime={preparationTime} />
                <MediaCardActionButtons id={id} linkPath="recipes" buttonLabel="Learn More" />
            </MediaCard>
        </Grid>
    );
}

export default RecipeCard;
