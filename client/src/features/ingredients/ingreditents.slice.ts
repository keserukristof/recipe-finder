import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ingredient } from '../../types/ingredients.type';

const initialState: Ingredient[] = [];

const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<Ingredient>) => {
            const ingredientExists = state.some(ingredient => ingredient.id === action.payload.id);
            if (!ingredientExists) {
                state.push(action.payload);
            }
        },
        removeIngredient: (state, action: PayloadAction<number>) => {
            return state.filter(ingredient => ingredient.id !== action.payload);
        },
        updateIngredient: (state, action: PayloadAction<Ingredient>) => {
            const index = state.findIndex(ingredient => ingredient.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    }
});

export const { addIngredient, removeIngredient, updateIngredient } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
