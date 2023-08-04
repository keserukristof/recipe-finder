import { FunctionComponent, useState } from "react";
import { Button } from '@mui/material';
import { AutocompleteSearch } from "../../../common/AutocompleteSearch/autocomplete-search.component";
import { useGetIngredientsQuery } from "../../../../features/api/api.slice";
import { Ingredient } from "../../../../types/ingredients.type";

export const HomePage: FunctionComponent = () => {

    const { data, isError, error } = useGetIngredientsQuery();

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const processFetchedIngedientsData = (ingredients: Ingredient[]) => {
        return ingredients ? ingredients.map(ingredient => ingredient.name) : [];
    };

    const handleValueChange = (newValue: string | null) => {
        if (newValue) {
            setSelectedValue(newValue);
        } else {
            setSelectedValue(null);
        }
    };

    const handleSubmit = () => {
        if (selectedValue) {
            // Here you can define what should happen when the value is submitted
            // For example, you could make a API request here
            console.log(`Submitted value: ${selectedValue}`);
        } else {
            console.log('Please select a value before submitting.');
        }
    };

    if (isError && error) {
        return <p>Error: {JSON.stringify(error)}</p>;
    }

    return (
        <>
            <p>HOME</p>
            <AutocompleteSearch label="Ingredient" options={processFetchedIngedientsData(data || [])} onValueChange={handleValueChange} />
            <Button variant="outlined" onClick={handleSubmit}>Outlined</Button>
        </>
    );
}