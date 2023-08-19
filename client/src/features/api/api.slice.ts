import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Ingredient } from "../../types/ingredients.type";
import { Recipe } from "../../types/recipe.type"
import { SERVER_BASE_URL } from "../../constants/api.constants"

export const api  = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_BASE_URL }),
    endpoints: (builder) => ({
        getIngredients: builder.query<Ingredient[], void>({
            query: () => "/ingredients",
            transformResponse: (response: Ingredient[]) => response.sort((a, b) => a.name.localeCompare(b.name)),
        }),
        getIngredientById: builder.query<Recipe, number>({
            query: (id) => `/ingredients/${id}`,
        }),
        getRecipes: builder.query<Recipe[], void>({
            query: () => "/recipes",
            transformResponse: (response: Recipe[]) => response.sort((a, b) => a.name.localeCompare(b.name)),
        }),
        getRecipeById: builder.query<Recipe, number>({
            query: (id) => `/recipes/${id}`,
        }),
    })
});

export const { useGetIngredientsQuery, useGetIngredientByIdQuery, useGetRecipesQuery, useGetRecipeByIdQuery, middleware: apiMiddleware } = api;