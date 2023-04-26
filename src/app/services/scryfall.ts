import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const scryfallApi = createApi({
  reducerPath: "scryfall",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3005" }),
  endpoints: (builder) => ({
    getCardsearchAutocomplete: builder.query({
      query: (searchString) => {
        return {
          url: "/cards",
          params: { q: searchString },
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetCardsearchAutocompleteQuery } = scryfallApi;
