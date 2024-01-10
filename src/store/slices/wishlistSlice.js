import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

const initialState = {
  wishlist: [],
};

const userSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => state.wishlist.push(action.payload),
    removeFromWishlist: (state, action) => state.wishlist = state.wishlist.filter(item => item.id !== action.payload),
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
