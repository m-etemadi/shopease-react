import { createContext, useContext, useReducer } from 'react';

const BASE_URL = 'http://localhost:9000';

const ShoppingContext = createContext();

const initialState = {
  cartItems: [],
  placedOrders: [],
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

    case 'order/placed':
      return {
        ...state,
        placedOrders: [...state.placedOrders, action.payload],
      };

    default:
      throw new Error('Unknown action type');
  }
}

function ShoppingProvider({ children }) {
  const [{ cartItems, placedOrders }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const cartLength = cartItems.length;

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

  async function handlePlaceOrder(newOrder) {
    try {
      const res = await fetch(`${BASE_URL}/placedOrders`, {
        method: 'POST',
        body: JSON.stringify(newOrder),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();

      dispatch({ type: 'order/placed', payload: data });
    } catch {
      console.log('rejected');
    }
  }

  return (
    <ShoppingContext.Provider
      value={{
        cartItems,
        cartLength,
        getCurrentQuantityById,
        getTotalPriceById,
        increaseItemQuantity: handleIncrease,
        decreaseItemQuantity: handleDecrease,
        clearCart: handleClearCart,
        placeOrder: handlePlaceOrder,
        placedOrders,
        totalQuantity,
        subtotal,
        addToCart: handleAddItem,
        removeFromCart: handleRemoveItem,
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
