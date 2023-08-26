interface RecipeIngredient {
    id: number;
    amount: string;
}

export interface Recipe {
    id: number;
    name: string;
    description: string;
    instructions: string[];
    ingredients: RecipeIngredient[];
    preparationTime: number;
    complexity: string;
}