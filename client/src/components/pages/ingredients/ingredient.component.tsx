import { FunctionComponent } from "react";

import { useIngredientName } from "../../../hooks/api/ingredients.hooks";

interface IngredientProps {
    id: number;
};

export const Ingredient: FunctionComponent<IngredientProps> = ({ id }) => {
    const { name, error } = useIngredientName(id);
    
    if (error) {
        return <p>{error}</p>;
    }

    return <p>{name}</p>;
};