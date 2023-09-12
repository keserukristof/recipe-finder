import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

import { ExpandableCard } from "../../cards/expandable-card.component";
import { NutritientValueList } from "./nutritient-value-list.component";
import { selectAllIngredients } from "../../../features/ingredients/ingredient.selectors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { removeIngredient } from "../../../features/ingredients/ingreditents.slice";


export const ManageIngredients: FunctionComponent = () => {
    const dispatch = useDispatch();
    const ingredientsFromState = useSelector(selectAllIngredients);

    const handleRemoveIngredient = (id: number) => {
        dispatch(removeIngredient(id));
    }

    return (
        <Grid container spacing={2}>
            {ingredientsFromState.map(ingredient => {
                const { id, name, nutritionalValues, isVegan } = ingredient;
                return (
                    <Grid item>
                        <ExpandableCard 
                            id={id}
                            title={name}
                            isIcon={isVegan}
                            minWidth="200px"
                            icon={<FontAwesomeIcon icon={faLeaf} />}
                            expandedContent={<NutritientValueList nutritionalValues={nutritionalValues} />}
                            handleXClick={handleRemoveIngredient}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};