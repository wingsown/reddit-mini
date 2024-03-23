import { configureStore } from "@reduxjs/toolkit";
import articlePreviewReducer from "../../features/Category/categorySlice";
import searchReducer from "../../features/Search/searchSlice";
import articleReducer from "../../features/Article/articleSlice";

export const store = configureStore({
  reducer: {
    articlePreviews: articlePreviewReducer,
    search: searchReducer,
    article: articleReducer,
  },
});
