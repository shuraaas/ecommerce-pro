import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import userSlice from './slices/userSlice';
import wishlistSlice from './slices/wishlistSlice';

export default configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    wishlist: wishlistSlice,
  },
});
