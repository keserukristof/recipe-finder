import { FunctionComponent } from "react";

import { SelectIngredientListGroup } from "../SelectIngredientGroup/select-ingredient-group.component";
import { ManageIngredients } from "../ManageIngredients/manage-ingredients.component";

export const HomePage: FunctionComponent = () => {
    return (
        <>
            <ManageIngredients />
            <SelectIngredientListGroup />
        </>
    );
}