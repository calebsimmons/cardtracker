import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import { useGetCardsearchAutocompleteQuery } from "../../app/services/scryfall";
import { useDebounce } from "../../app/utils/useDebounce";

function CardsearchAutocomplete() {
  const [searchString, setSearchString] = useState("");

  const debouncedSearch = useDebounce(searchString, 500);

  const handleInputChange = (event: any, newValue: string) => {
    setSearchString(newValue);
  };

  const {
    data = { autocomplete: [] },
    error,
    isLoading,
  } = useGetCardsearchAutocompleteQuery(debouncedSearch, {
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  return (
    <Autocomplete
      onInputChange={handleInputChange}
      renderInput={(params) => <TextField {...params} label="Add Card" />}
      options={data.autocomplete}
    />
  );
}

export default CardsearchAutocomplete;
