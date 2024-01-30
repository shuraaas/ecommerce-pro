import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlise = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlise.actions;
export default cartSlise.reducer;
