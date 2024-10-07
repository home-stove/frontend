// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from '../reducers/menuSlice';

const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
});

export default store;