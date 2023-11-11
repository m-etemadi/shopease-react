import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

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

    case 'product/increased': {
      const updatedCartItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity++,
            totalPrice: item.totalPrice + item.price,
          };
        }
        return item;
      });

      return { ...state, cartItems: updatedCartItems };
    }

    case 'product/decreased': {
      const updatedCartItems = state.cartItems.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity--,
            totalPrice: item.totalPrice - item.price,
          };
        }
        return item;
      });

      return { ...state, cartItems: updatedCartItems };
    }

    case 'cart/cleared':
      return {
        ...state,
        cartItems: [],
      };

    default:
      throw new Error('Unknown action type');
  }
}

function CartProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(reducer, initialState);

  const cartLength = cartItems.length;

  // conver the following two into one function
  const totalQuantity = cartItems
    .map(item => item.quantity)
    .reduce((acc, cur) => acc + cur, 0);

  const subtotal = cartItems
    .map(item => item.totalPrice)
    .reduce((acc, cur) => acc + cur, 0);

  function getCurrentQuantityById(id) {
    return cartItems.find(item => item.id === id)?.quantity ?? 0;
  }

  function getTotalPriceById(id) {
    return cartItems.find(item => item.id === id)?.totalPrice;
  }

  function handleAddItem(item) {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);

    if (existingItem) return;

    dispatch({
      type: 'product/added',
      payload: item,
    });
  }

  function handleRemoveItem(id) {
    dispatch({
      type: 'product/removed',
      payload: id,
    });
  }

  function handleClearCart() {
    dispatch({
      type: 'cart/cleared',
    });
  }

  function handleIncrease(id) {
    dispatch({ type: 'product/increased', payload: id });
  }

  function handleDecrease(id, quantity) {
    if (quantity > 1) dispatch({ type: 'product/decreased', payload: id });
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartLength,
        getCurrentQuantityById,
        getTotalPriceById,
        increaseItemQuantity: handleIncrease,
        decreaseItemQuantity: handleDecrease,
        clearCart: handleClearCart,
        totalQuantity,
        subtotal,
        addToCart: handleAddItem,
        removeFromCart: handleRemoveItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  const context = useContext(CartContext);
  if (context === undefined)
    throw new Error('CartContext was used outside the CartProvider');
  return context;
}

export { CartProvider, useCart };
