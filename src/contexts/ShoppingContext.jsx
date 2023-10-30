import { createContext, useContext, useReducer } from 'react';

const ShoppingContext = createContext();

const initialState = {
  cartItems: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'product/added':
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };

    case 'product/removed':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };

    default:
      throw new Error('Unknown action type');
  }
}

function ShoppingProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState);

  const cartLength = cartItems.length;

  // const totalQuantity = cartItems
  //   .map(item => item.quantity)
  //   .reduce((acc, cur) => acc + cur, 0);

  // const subtotal = cartItems
  //   .map(item => item.totalPrice)
  //   .reduce((acc, cur) => acc + cur, 0);

  function getCurrentQuantityById(id) {
    return cartItems.find(item => item.id === id)?.quantity ?? 0;
  }

  function handleAddItem(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) return;

    dispatch({
      type: 'product/added',
      payload: {
        ...item,
      },
    });
  }

  function handleRemoveItem(id) {
    dispatch({
      type: 'product/removed',
      payload: id,
    });
  }

  // function handleDecrease(id) {
  //   const item = cartItems.find(cartItem => cartItem.id === id);

  //   item.quantity--;
  //   item.totalPrice = item.quantity + item.price;

  //   dispatch({
  //     type: 'product/decreased',
  //     payload: id,
  //   });
  // }

  // function handleIncrease(id) {
  //   const item = cartItems.find(cartItem => cartItem.id === id);

  //   item.quantity++;
  //   item.totalPrice = item.quantity + item.price;

  //   dispatch({
  //     type: 'product/increased',
  //     payload: id,
  //   });
  // }

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        cartLength,
        getCurrentQuantityById,
        // decreaseItemQuantity: handleDecrease,
        // increaseItemQuantity: handleIncrease,
        // totalQuantity,
        // subtotal,
        addToCart: handleAddItem,
        removeFromCart: handleRemoveItem,
        dispatch,
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
}

function useShopping() {
  const context = useContext(ShoppingContext);
  if (context === undefined)
    throw new Error('ShoppingContext was used outside the ShoppingProvider');
  return context;
}

export { ShoppingProvider, useShopping };
