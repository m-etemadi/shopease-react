import { createSlice } from '@reduxjs/toolkit';

const initialState = { cartItems: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      state.cartItems.push(action.payload);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.price * item.quantity;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
      }
    },
    clearCart(state) {
      state.cartItems = [];
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const calculateTotalQuantity = state =>
  state.cart.cartItems.reduce((sum, item) => sum + item.quantity, 0);

export const getCurrentQuantityById = id => state =>
  state.cart.cartItems.find(item => item.id === id)?.quantity ?? 0;