import { createSlice } from "@reduxjs/toolkit";
import { getAdvert, getAdverts } from "./operations";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const handleFulfilledAdverts = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.adverts = action.payload;
};

const handleFulfilledAdvert = (state, action) => {
    state.isLoading = false;
    state.error = null;
    state.selectedAdvert = action.payload;
};

export const advertsSlice = createSlice({
  name: "adverts",
  initialState: {
    adverts: [],
    selectedAdvert: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAdverts.pending, handlePending)
      .addCase(getAdverts.fulfilled, handleFulfilledAdverts)
      .addCase(getAdverts.rejected, handleRejected)
      .addCase(getAdvert.pending, handlePending)
      .addCase(getAdvert.fulfilled, handleFulfilledAdvert)
      .addCase(getAdvert.rejected, handleRejected);
  },
});

export const advertsReducer = advertsSlice.reducer;
