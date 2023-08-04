import { FunctionComponent } from "react";
import { Autocomplete, TextField } from '@mui/material';

interface AutocompleteSearchProps {
  options: string[];
  label: string;
  onValueChange: (newValue: string | null) => void;
}

export const AutocompleteSearch: FunctionComponent<AutocompleteSearchProps> = ({ options, label, onValueChange }) => {
  return (
    <Autocomplete
      disablePortal
      id="autocomplete-search"
      options={options || []}
      sx={{ width: 300 }}
      onChange={(event, newValue) => onValueChange(newValue)}
      renderInput={(params) => <TextField {...params} label={label} />}
    />
  );
}