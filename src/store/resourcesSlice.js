import { createSlice } from "@reduxjs/toolkit";

const resourcesSlice = createSlice({
    name: "resources",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        activeAuthor: null,
        page: 1,
    },
    reducers: {
        setLoading(state) {
            state.isLoading = true;
            state.error = null;
        },
        setResources(state, action) {
            state.items = action.payload;
            state.isLoading = false;
        },
        setError(state, action) {
            state.error = action.payload;
            state.isLoading = false;
        },
        setAuthorFilter(state, action) {
            state.activeAuthor = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        }
    }
});

export const {
    setLoading,
    setResources,
    setError,
    setAuthorFilter,
    setPage
} = resourcesSlice.actions;

export default resourcesSlice.reducer;
