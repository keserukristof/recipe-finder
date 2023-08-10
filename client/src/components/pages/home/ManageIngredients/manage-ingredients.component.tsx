import { FunctionComponent } from "react";

import { ExpandableCard } from "../../../ExpandableCard/expandable-card.component";
import { NutritientValueList } from "../NutritientValueList/nutritient-value-list.component";


export const ManageIngredients: FunctionComponent = () => {
    return (
        <>
            <ExpandableCard title="Butter" expandedContent={<NutritientValueList fat={1} carbs={1} protein={1} />} />
        </>
    );
};