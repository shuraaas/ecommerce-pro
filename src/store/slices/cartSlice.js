import { createSlice } from '@reduxjs/toolkit';

const cartSlise = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      console.log(action)
    },
    removeFromCart: (state, action) => {},
  },
});

export const { addToCart, removeFromCart } = cartSlise.actions;
export default cartSlise.reducer;
