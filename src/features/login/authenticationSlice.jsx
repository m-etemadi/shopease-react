import { createSlice } from '@reduxjs/toolkit';

const FAKE_USER = {
  name: 'John Smith',
  address: '6/42 Crown Street, Wollongong 2500, NSW',
  email: 'john@ecommerce.com',
  password: 'John1234',
  cardNum: 5217291895377726,
  cvv: 199,
  expDate: '07 / 25',
};

const initialState = { user: null, isAuthenticated: false };

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state) {
      state.user = FAKE_USER;
      state.isAuthenticated = true;
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
