import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const userSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlistItem: (state, action) => {
      if (state.items.length === 0) {
        state.items.push(action.payload);
        return;
      }

      const inWishlist = state.items.some(
        item => item.id === action.payload.id,
      );

      if (!inWishlist) {
        state.items.push(action.payload);
        return;
      }

      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { toggleWishlistItem } = userSlice.actions;
export default userSlice.reducer;
