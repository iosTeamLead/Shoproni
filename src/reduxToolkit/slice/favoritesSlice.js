import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        // If item is already in favorites, remove it
        state.favorites.splice(index, 1);
      } else {
        // If item is not in favorites, add it
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;