import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import user from './slices/userSlice';
import wishlist from './slices/wishlistSlice';

export default configureStore({
  reducer: {
    cart,
    user,
    wishlist,
  },
});
