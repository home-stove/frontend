// src/reducers/menuSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
    isOpen: boolean;
}

const initialState: MenuState = {
    isOpen: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu(state) {
            state.isOpen = !state.isOpen;
        },
        resetMenu(state) {
            state.isOpen = false; // Resetting the menu state
        },
    },
});

export const { toggleMenu, resetMenu } = menuSlice.actions;
export default menuSlice.reducer;