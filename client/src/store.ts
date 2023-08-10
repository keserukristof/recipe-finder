import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './features/ingredients/ingreditents.slice';
import { ingredientsApiMiddleware, ingredientsApi } from "./features/api/api.slice"

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        [ingredientsApi.reducerPath]: ingredientsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ingredientsApiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;