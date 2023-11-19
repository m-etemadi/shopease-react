import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import authenticationReducer from './features/login/authenticationSlice';
import orderReducer from './features/order/orderSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    authentication: authenticationReducer,
    orders: orderReducer,
  },
});

export default store;
