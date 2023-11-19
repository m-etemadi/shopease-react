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

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
};

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;

      if (email === FAKE_USER.email && password === FAKE_USER.password) {
        state.user = FAKE_USER;
        state.isAuthenticated = true;
        localStorage.setItem('user', JSON.stringify(FAKE_USER));
        localStorage.setItem('isAuthenticated', 'true');
      } else alert('Wrong Username or Password');
    },

    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem('user');
      localStorage.setItem('isAuthenticated', 'false');
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
