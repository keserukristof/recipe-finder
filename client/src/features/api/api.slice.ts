import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Ingredient } from "../../types/ingredients.type";
import { SERVER_BASE_URL } from "../../constants/api.constants"

export const ingredientsApi  = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_BASE_URL }),
    endpoints: (builder) => ({
        getIngredients: builder.query<Ingredient[], void>({
            query: () => "/ingredients",
            transformResponse: (response: Ingredient[]) => response.sort((a, b) => a.name.localeCompare(b.name)),
        })
    })
});

export const { useGetIngredientsQuery, middleware: ingredientsApiMiddleware } = ingredientsApi;