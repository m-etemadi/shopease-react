import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload.id);

      if (!item) {
        state.cartItems.push(action.payload);
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        item => item.id !== action.payload
      );
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    increaseItemQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);

      item.quantity++;
      item.totalPrice = item.price * item.quantity;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseItemQuantity(state, action) {
      const item = state.cartItems.find(item => item.id === action.payload);

      if (item.quantity > 1) {
        item.quantity--;
        item.totalPrice = item.price * item.quantity;
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
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

export const getPropertyById = (id, property) => state =>
  state.cart.cartItems.find(item => item.id === id)?.[property] ?? 0;

export const calculateTotalByProperty = property => state =>
  state.cart.cartItems.reduce((sum, item) => sum + item[property], 0);
