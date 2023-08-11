interface RecipeIngredient {
    id: number;
    amount: string;
}

export interface Recipe {
    id: number;
    name: string;
    instructions: string[];
    ingredients: RecipeIngredient[];
}