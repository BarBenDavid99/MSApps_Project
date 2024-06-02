import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPhotos = createAsyncThunk(
    'photos/fetchPhotos',
    async ({ category, page }) => {
        const response = await axios.get(
            `https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${category}&page=${page}&per_page=9`
        );
        return response.data.hits;
    }
);

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: [],
        loading: false,
        error: null,
        category: 'sports',
        page: 1,
    },
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
            state.page = 1; // Reset to first page when category changes
        },
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhotos.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.photos = action.payload;
            })
            .addCase(fetchPhotos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error;
            });
    },
});

export const { setCategory, setPage } = photoSlice.actions;
export default photoSlice.reducer;