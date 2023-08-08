import { FunctionComponent, useState } from "react";
import { Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

import StyledCenteredGridContainer from "../../../../styled-components/styled-grid.component";

import { AutocompleteSearch } from "../../../AutocompleteSearch/autocomplete-search.component";
import { useGetIngredientsQuery } from "../../../../features/api/api.slice";
import { addIngredient } from "../../../../features/ingredients/ingreditents.slice"
import { Ingredient } from "../../../../types/ingredients.type";

export const SelectIngredientListGroup: FunctionComponent = () => {

  const dispatch = useDispatch();
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
      dispatch(addIngredient(selectedValue));
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
        <AutocompleteSearch label="Ingredient" options={processFetchedIngedientsData(data || [])} onValueChange={handleValueChange} />
      </Grid>
      <Grid item sx={{ p: 3 }}>
        <Button variant="outlined" onClick={handleSubmit}>Submit</Button>
      </Grid>
    </StyledCenteredGridContainer>
  );
};
