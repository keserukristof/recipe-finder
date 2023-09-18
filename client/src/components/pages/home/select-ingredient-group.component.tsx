import { FunctionComponent, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid } from '@mui/material';

import StyledCenteredGridContainer from "../../../styled-components/styled-grid.component";
import { Ingredient } from "../../../types/ingredients.type";
import { AutocompleteSearch } from "../../autocomplete-search.component";
import { useGetIngredientsQuery } from "../../../features/api/api.slice";
import { addIngredient, removeAllIngredients } from "../../../features/ingredients/ingreditents.slice";
import { selectAllIngredients } from "../../../features/ingredients/ingredient.selectors";

export const SelectIngredientListGroup: FunctionComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { data: ingredients, isError, error } = useGetIngredientsQuery();

    const ingredientsFromState = useSelector(selectAllIngredients);

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

    const handleAddIngredient = () => {
        if (selectedIngredient) {
            dispatch(addIngredient(selectedIngredient));
            setSelectedIngredient(null);
            setInputValue("");
            setSelectedValue(null);
        } else {
            console.log('Please select a value before submitting.');
        }
    };

    const handleSubmitRecipeSearch = () => {
        const ingredientIds = ingredientsFromState.map(ingredient => ingredient.id);
        navigate(`/recipe-search-results?ingredients=${ingredientIds.join("-")}`);
    }

    const handleRemoveAllIngredients = () => {
        dispatch(removeAllIngredients());
    }

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
                <Button variant="outlined" onClick={handleAddIngredient} sx={{ minWidth: 100 }}>Add</Button>
            </Grid>
            {ingredientsFromState.length ? <>
                <Grid item sx={{ p: 3 }}>
                    <Button variant="outlined" onClick={handleSubmitRecipeSearch}>Search Recipe</Button>
                </Grid>
                <Grid item sx={{ p: 3 }}>
                    <Button variant="outlined" onClick={handleRemoveAllIngredients}>Remove All Ingredients</Button>
                </Grid>
            </> : ""}
        </StyledCenteredGridContainer>
    );
};