import { FunctionComponent } from "react";

import { SelectIngredientListGroup } from "./select-ingredient-group.component";
import { ManageIngredients } from "./manage-ingredients.component";

export const HomePage: FunctionComponent = () => {
    return (
        <>
            <ManageIngredients />
            <SelectIngredientListGroup />
        </>
    );
}