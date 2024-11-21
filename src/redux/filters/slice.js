// src/redux/filters/slice.js

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state and slice
const initialState = {
  filter: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Export the action
export const { setFilter } = filtersSlice.actions;

// Export the selector
export const selectFilter = (state) => state.filters.filter;

// Export the reducer
export default filtersSlice.reducer;
