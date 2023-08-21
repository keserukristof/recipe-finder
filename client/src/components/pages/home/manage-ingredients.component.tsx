import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";

import { ExpandableCard } from "../../cards/expandable-card.component";
import { NutritientValueList } from "./nutritient-value-list.component";
import { selectAllIngredients } from "../../../features/ingredients/ingredient.selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";


export const ManageIngredients: FunctionComponent = () => {
    const ingredientsFromState = useSelector(selectAllIngredients);

    return (
        <Grid container spacing={2}>
            {ingredientsFromState.map(ingredient => {
                const { name, nutritionalValues, isVegan } = ingredient;
                return (
                    <Grid item>
                        <ExpandableCard title={name} isIcon={isVegan} minWidth="200px" icon={<FontAwesomeIcon icon={faLeaf} />} expandedContent={<NutritientValueList nutritionalValues={nutritionalValues} />} />
                    </Grid>
                );
            })}
        </Grid>
    );
};