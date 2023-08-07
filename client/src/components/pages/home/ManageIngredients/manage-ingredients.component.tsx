import { FunctionComponent } from "react";
import { Card } from "../../../Card/card.component";
import { NutritientDescription } from "../NutritientDescription/nuitritient-description.component";


export const ManageIngredients: FunctionComponent = () => {
    return (
        <Card title="Butter" content={<NutritientDescription/>}/>
    );
};