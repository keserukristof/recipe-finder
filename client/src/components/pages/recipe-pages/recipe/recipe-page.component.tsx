import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, Grid, List, ListItem, Typography } from "@mui/material";

import { useGetRecipeByIdQuery } from "../../../../features/api/api.slice";
import { Ingredient } from "../../ingredients/ingredient.component";

export const RecipePage: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const recipeId = Number(id);

    const { data: recipe, isError: recipeError } = useGetRecipeByIdQuery(recipeId);

    if (recipeError || !recipe) {
        return <p>Error: 'Invalid recipe ID'</p>;
    }

    const { name, description, ingredients, instructions } = recipe;

    return (
        <>
            <Box mb={3}>
                <Typography variant="h5" gutterBottom>
                    {name}
                </Typography>
            </Box>

            <Box mb={3}>
                <Typography variant="body1" paragraph>
                    {description}
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mb={3}>
                <Grid container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Ingredients
                        </Typography>
                        <List>
                            {ingredients.map(ingredient => (
                                <ListItem key={ingredient.id}>
                                    <Ingredient id={ingredient.id} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Instructions
                        </Typography>
                        <List>
                            {instructions.map((instruction, index) => (
                                <ListItem key={index}>
                                    <Typography variant="body2">{instruction}</Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};
