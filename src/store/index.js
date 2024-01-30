import { configureStore } from '@reduxjs/toolkit';
import cart from './slices/cartSlice';
import user from './slices/userSlice';
import wishlist from './slices/wishlistSlice';
import products from './slices/productsSlice';

export default configureStore({
  reducer: {
    cart,
    user,
    wishlist,
    products,
  },
});
