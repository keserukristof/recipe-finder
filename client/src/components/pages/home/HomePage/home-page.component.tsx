import { FunctionComponent, useState } from "react";

import { Button } from '@mui/material';

import { AutocompleteSearch } from "../../../common/AutocompleteSearch/autocomplete-search.component";

export const HomePage: FunctionComponent = () => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleSubmit = () => {
        if (selectedValue) {
          // Here you can define what should happen when the value is submitted
          // For example, you could make a API request here
          console.log(`Submitted value: ${selectedValue}`);
        } else {
          console.log('Please select a value before submitting.');
        }
      };

    return (
        <>
            <p>HOME</p>
            <AutocompleteSearch label="Ingredient" options={["Red chili flakes", "Black peppercorns", "Paprika", "Chicken Breast"]} onValueChange={setSelectedValue} />
            <Button variant="outlined" onClick={handleSubmit}>Outlined</Button>
        </>
    );
}