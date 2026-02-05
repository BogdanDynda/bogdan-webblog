import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import resourcesReducer from "./resourcesSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        resources: resourcesReducer,
        favorites: favoritesReducer,
    },
});