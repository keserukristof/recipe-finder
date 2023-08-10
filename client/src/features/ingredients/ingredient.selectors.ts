import { RootState } from '../../store';

export const selectAllIngredients = (state: RootState) => {
    return state.ingredients;
}

export const selectIngredientById = (id: number) => (state: RootState) => {
    return state.ingredients.find(ingredient => ingredient.id === id);
}
