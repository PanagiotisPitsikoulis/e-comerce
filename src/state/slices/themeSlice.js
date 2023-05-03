import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: false, // false for light mode, true for dark mode
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = !state.mode; // toggle the boolean value of mode
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
