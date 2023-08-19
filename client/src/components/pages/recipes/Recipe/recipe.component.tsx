import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import { useGetRecipeByIdQuery } from "../../../../features/api/api.slice";
import { Ingredient } from "../../ingredients/Ingredinet/ingredient.component";

export const Recipe: FunctionComponent = () => {
    const { id } = useParams<{ id: string }>();
    const recipeId = Number(id);

    const { data: recipe, isError: recipeError } = useGetRecipeByIdQuery(recipeId);
    
    if (recipeError || !recipe) {
        return <p>Error: 'Invalid recipe ID'</p>;
    }

    const { name, description, ingredients, instructions } = recipe;

    return (
        <>
            <p>{name}</p>
            <p>{description}</p>
            {ingredients.map(ingredient => <Ingredient key={ingredient.id} id={ingredient.id} />)}
            <p>{instructions}</p>
        </>
    );
};
