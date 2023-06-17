import { createSlice } from "@reduxjs/toolkit";
import { fetchAllSuperheroes } from "./operations";

const superheroesSlice = createSlice({
  name: "superheroes",
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSuperheroes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllSuperheroes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchAllSuperheroes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const superheroesReducer = superheroesSlice.reducer;
