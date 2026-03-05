import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/checkUser'
// import cart from './slices/cartSlice';
import cartReducer from './slices/productSlice'
export const store = configureStore({
  // хранилище Redux
  reducer: {
      cart: cartReducer,
      user: userReducer
  },
});
