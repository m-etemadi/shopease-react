import { createSlice } from '@reduxjs/toolkit';

const initialState = { orders: [] };

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder(state, newOrder) {
      state.orders.push(newOrder);
    },
  },
});

export const { placeOrder } = orderSlice.actions;

export default orderSlice.reducer;
