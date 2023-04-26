import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

function CardsearchAutocomplete() {
  let [searchOptions, setSearchOptions] = useState([]);

  const handleInputChange = () => {};

  return (
    <Autocomplete
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} label="Card" />}
      options={searchOptions}
    />
  );
}

export default CardsearchAutocomplete;
