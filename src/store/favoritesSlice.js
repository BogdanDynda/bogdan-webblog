import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        saved: []
    },
    reducers: {
        addFavorite(state, action) {
            if (!state.saved.includes(action.payload)) {
                state.saved.push(action.payload);
            }
        },
        removeFavorite(state, action) {
            state.saved = state.saved.filter(id => id !== action.payload);
        }
    }
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;