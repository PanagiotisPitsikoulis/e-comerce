import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import authReducer from "./slices/authSlice";
import sidebarSliceReducer from "./slices/sidebarSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    auth: authReducer,
    sidebar: sidebarSliceReducer,
  },
});

export default store;
