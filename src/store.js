import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import authenticationReducer from './features/Authentication/authenticationSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    authentication: authenticationReducer,
  },
});

export default store;
