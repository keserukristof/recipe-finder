import { configureStore } from '@reduxjs/toolkit';
import ingredientsReducer from './features/ingredients/ingreditents.slice';
import { apiMiddleware, api } from "./features/api/api.slice"

export const store = configureStore({
    reducer: {
        ingredients: ingredientsReducer,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;