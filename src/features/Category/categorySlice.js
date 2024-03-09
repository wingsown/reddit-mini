import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadByCategory = createAsyncThunk(
  "articlePreviews/loadByCategory",
  async (category) => {
    const redditUrl = `https://www.reddit.com/r/${category}.json`;
    const response = await fetch(redditUrl);

    if (!response.ok) {
      if (response.status === 429) {
        throw new Error("Rate limit exceeded");
      }
    }
    const json = await response.json();
    return json;
  }
);

export const articlePreviewsSlice = createSlice({
  name: "articlePreviews",
  initialState: {
    articles: [],
    isLoadingArticlePreviews: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadByCategory.pending, (state) => {
        state.isLoadingArticlePreviews = true;
        state.hasError = false;
      })
      .addCase(loadByCategory.fulfilled, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.hasError = false;
        const res = action.payload.data.children;
        const list = res.map((article) => ({
          id: article.data.id,
          title: article.data.title,
          text: article.data.selftext,
          img: article.data.thumbnail,
          description: "",
          score: article.data.score,
          comments: article.data.num_comments,
          subReddit: article.data.author,
        }));
        state.articles = list;
      })
      .addCase(loadByCategory.rejected, (state, action) => {
        state.isLoadingArticlePreviews = false;
        state.hasError = true;
        state.articles = [];
      });
  },
});

export const selectAllPreviews = (state) => state.articlePreviews.articles;
export const isLoading = (state) =>
  state.articlePreviews.isLoadingArticlePreviews;
export const hasError = (state) => state.articlePreviews.hasError;

export default articlePreviewsSlice.reducer;
