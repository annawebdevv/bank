import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  auth: false,
};

export const authSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    toggleAuth: (state, action) => {
      state.auth = action.payload
    },
  },
});

export const { toggleAuth } = authSlice.actions;

export default authSlice.reducer;
