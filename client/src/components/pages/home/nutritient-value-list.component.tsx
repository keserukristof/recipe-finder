import { FunctionComponent } from "react";
import { List, ListItem } from "@mui/material";

import { NutritionalValues } from "../../../types/ingredients.type";


interface NutritientValueListProps {
    nutritionalValues: NutritionalValues;
}

export const NutritientValueList: FunctionComponent<NutritientValueListProps> = ({ nutritionalValues }) => {
    const { calories, protein, carbs, fat } = nutritionalValues;
    return (
        <List>
            <ListItem>Calories: {calories}</ListItem>
            <ListItem>Protein: {protein}</ListItem>
            <ListItem>Carbs: {carbs}</ListItem>
            <ListItem>Fat: {fat}</ListItem>
        </List>
    );
};