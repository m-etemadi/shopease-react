import { createContext, useContext, useEffect, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'logout':
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error('Unknown action');
  }
}

const FAKE_USER = {
  name: 'John Smith',
  address: '6/42 Crown Street, Wollongong 2500, NSW',
  email: 'john@ecommerce.com',
  password: 'John1234',
  cardNum: 5217291895377726,
  cvv: 199,
  expDate: '07 / 25',
};

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
    initial => {
      const storedUser = localStorage.getItem('user');
      const storedIsAuthenticated = localStorage.getItem('isAuthenticated');

      return {
        user: storedUser ? JSON.parse(storedUser) : initial.user,
        isAuthenticated: storedIsAuthenticated
          ? JSON.parse(storedIsAuthenticated)
          : initial.isAuthenticated,
      };
    }
  );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
  }, [user, isAuthenticated]);

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: 'login', payload: FAKE_USER });
    else alert('Wrong Username or Password');
  }

  function logout() {
    dispatch({ type: 'logout' });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error('AuthContext was used outside AuthProvider');
  return context;
}

export { AuthProvider, useAuth };
