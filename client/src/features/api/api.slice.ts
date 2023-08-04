import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Ingredient } from "../../types/ingredients.type";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (builder) => ({
        getIngredients: builder.query<Ingredient[], void>({
            query: () => "/ingredients",
            transformResponse: (response: Ingredient[]) => response.sort((a, b) => a.name.localeCompare(b.name)),
        })
    })
});

export const { useGetIngredientsQuery } = apiSlice;