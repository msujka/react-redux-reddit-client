import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../../utils/reddit';

export const loadPosts = createAsyncThunk(
    'posts/loadPosts',
    async () => {
        return getSubredditPosts('/r/BerkshireHathaway');
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPosts.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
                state.posts = [];
            })
    },
});

export const selectAllPosts = (state) => state.posts.posts;
export const isLoading = (state) => state.posts.isLoading;
export default postsSlice.reducer; 
