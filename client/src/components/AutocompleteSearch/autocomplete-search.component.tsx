import { FunctionComponent } from "react";
import { Autocomplete, TextField } from '@mui/material';

interface AutocompleteSearchProps {
  label: string;
  options: string[];
  inputValue: string;
  selectedValue: string | null;
  onValueChange: (newValue: string | null) => void;
  onInputChange: (newInputValue: string) => void;
}

export const AutocompleteSearch: FunctionComponent<AutocompleteSearchProps> = ({
  options, 
  label, 
  inputValue,
  selectedValue,
  onValueChange, 
  onInputChange
}) => {
  return (
    <Autocomplete
      disablePortal
      id="autocomplete-search"
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      options={options || []}
      inputValue={inputValue}
      value={selectedValue}
      onChange={(event, newValue) => onValueChange(newValue)}
      onInputChange={(event, newInputValue) => onInputChange(newInputValue)}
    />
  );
}
