import { Autocomplete, TextField } from "@mui/material";

function CardsearchAutocomplete() {
  return (
    <Autocomplete
      renderInput={(params) => <TextField {...params} label="Card" />}
      options={["one", "two"]}
    />
  );
}

export default CardsearchAutocomplete;
