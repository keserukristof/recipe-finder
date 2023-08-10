import { FunctionComponent } from "react";

interface NutritientValueListProps {
    protein: number;
    carbs: number;
    fat: number;
};

export const NutritientValueList: FunctionComponent<NutritientValueListProps> = ({protein, carbs, fat}) => {
    return (
        <ul>
            <li>Protein: {protein}</li>
            <li>Carbs: {carbs}</li>
            <li>Fat: {fat}</li>
        </ul>
    );
};