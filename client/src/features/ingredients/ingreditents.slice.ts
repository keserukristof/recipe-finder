import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Ingredient {
  id: string;
  name: string;
}

interface IngredientsState {
  ingredients: Ingredient[];
}

const initialState: IngredientsState = { ingredients: [] };

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients.push({id: Date.now().toString(), name: action.payload});
    },
    removeIngredient: (state, action: PayloadAction<string>) => {
      state.ingredients = state.ingredients.filter(ingredient => ingredient.id !== action.payload);
    },
    removeAllIngredients: state => {
      state.ingredients = [];
    },
  },
});

export const { addIngredient, removeIngredient, removeAllIngredients } = ingredientsSlice.actions;

export default ingredientsSlice.reducer;
