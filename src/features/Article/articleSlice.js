import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadArticleById = createAsyncThunk(
  "article/loadByArticleId",
  async (id) => {
    const redditUrl = `https://www.reddit.com/${id}.json`;
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

export const articleSlice = createSlice({
  name: "article",
  initialState: {
    article: [],
    comments: [],
    replies: [],
    isLoadingArticle: false,
    hasError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadArticleById.pending, (state) => {
        state.isLoadingArticle = true;
        state.hasError = false;
      })
      .addCase(loadArticleById.fulfilled, (state, action) => {
        state.isLoadingArticle = false;
        const res = action.payload[0].data.children[0].data;
        state.article = {
          title: res.title,
          id: res.id,
          text: res.selftext,
          img: res.url,
          description: "",
          score: res.score,
          comments: res.num_comments,
          subReddit: res.author,
        };
        const commentsData = action.payload[1].data.children;
        const comments = [];
        commentsData.forEach((comment) => {
          const repliesData = comment.data.replies?.data?.children;
          comments.push({
            author: comment.data.author,
            text: comment.data.body,
            replies: repliesData,
          });
        });
        state.comments = comments;
      })
      .addCase(loadArticleById.rejected, (state) => {
        state.isLoadingArticle = false;
        state.hasError = true;
        state.article = {};
      });
  },
});

export const selectArticle = (state) => state.article.article;
export const selectComments = (state) => state.article.comments;
export const isLoadingArticle = (state) => state.article.isLoadingArticle;
export const hasErrorArticle = (state) => state.article.hasError;

export default articleSlice.reducer;
