import { configureStore } from "@reduxjs/toolkit";
import articlePreviewReducer from "../../features/Category/categorySlice";

export const store = configureStore({
  reducer: {
    articlePreviews: articlePreviewReducer,
  },
});
