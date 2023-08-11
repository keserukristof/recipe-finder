export interface NutritionalValues {
    protein: number;
    carbs: number;
    fat: number;
    calories: number;
}

export interface Ingredient {
    id: number;
    name: string;
    nutritionalValues: NutritionalValues;
    isVegan: boolean;
}
