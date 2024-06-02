import { configureStore } from '@reduxjs/toolkit';
import photoReducer from './features/photos/photoSlice';

const store = configureStore({
    reducer: {
        photos: photoReducer,
    },
});

export default store;