import { FunctionComponent, useState } from "react";
import { Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import StyledCenteredGridContainer from "../../../../styled-components/styled-grid.component";

import { Ingredient } from "../../../../types/ingredients.type";
import { AutocompleteSearch } from "../../../AutocompleteSearch/autocomplete-search.component";
import { useGetIngredientsQuery } from "../../../../features/api/api.slice";
import { addIngredient } from "../../../../features/ingredients/ingreditents.slice";

export const SelectIngredientListGroup: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { data: ingredients, isError, error } = useGetIngredientsQuery();

    const [inputValue, setInputValue] = useState<string>("");
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

    const getAutocompleteSearchOptions = (ingredients: Ingredient[]) => {
        return ingredients ? ingredients.map(ingredient => ingredient.name) : [];
    };

    const handleValueChange = (ingredientName: string | null) => {
        if (ingredientName) {
            const foundIngredient = ingredients?.find(ingredient => ingredient.name === ingredientName);
            setSelectedIngredient(foundIngredient || null);
            setSelectedValue(ingredientName);
        } else {
            setSelectedIngredient(null);
            setSelectedValue(null);
        }
    };

    const handleSubmit = () => {
        if (selectedIngredient) {
            dispatch(addIngredient(selectedIngredient));
            setSelectedIngredient(null);
            setInputValue("");
            setSelectedValue(null);
        } else {
            console.log('Please select a value before submitting.');
        }
    };

    if (isError && error) {
        return <p>Error: {JSON.stringify(error)}</p>;
    }

    return (
        <StyledCenteredGridContainer container>
            <Grid item sx={{ p: 3 }}>
                <AutocompleteSearch
                    label="Ingredient"
                    inputValue={inputValue}
                    onInputChange={setInputValue}
                    selectedValue={selectedValue}
                    onValueChange={handleValueChange}
                    options={getAutocompleteSearchOptions(ingredients || [])}
                />
            </Grid>
            <Grid item sx={{ p: 3 }}>
                <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
            </Grid>
        </StyledCenteredGridContainer>
    );
};