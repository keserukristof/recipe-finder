import { useGetIngredientByIdQuery } from "../../features/api/api.slice";

export const useIngredientName = (ingredientId: number) => {
    const { data: ingredientForId, isError } = useGetIngredientByIdQuery(ingredientId);
    
    if (isError) {
        return { error: 'Error fetching ingredient data.' };
    }

    if (!ingredientForId) {
        return { error: 'Ingredient not found.' };
    }

    return { name: ingredientForId.name };
};