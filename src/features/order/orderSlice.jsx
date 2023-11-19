import { createSlice } from '@reduxjs/toolkit';

const initialState = { orders: [] };

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    placeOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { placeOrder } = orderSlice.actions;

export default orderSlice.reducer;
