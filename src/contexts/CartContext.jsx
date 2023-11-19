import { createContext, useContext, useEffect, useReducer } from 'react';

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

    case 'cart/cleared':
      return {
        ...state,
        cartItems: [],
      };

    case 'product/increased':
      return handleItemIncrease(state, action.payload);

    case 'product/decreased':
      return handleItemDecrease(state, action.payload);

    default:
      throw new Error('Unknown action type');
  }
}

const handleItemIncrease = (state, itemId) => {
  const updatedCartItems = state.cartItems.map(item => {
    if (item.id === itemId) {
      return {
        ...item,
        quantity: item.quantity + 1,
        totalPrice: item.totalPrice + item.price,
      };
    }
    return item;
  });

  return { ...state, cartItems: updatedCartItems };
};

const handleItemDecrease = (state, itemId) => {
  const updatedCartItems = state.cartItems.map(item => {
    if (item.id === itemId) {
      return {
        ...item,
        quantity: item.quantity - 1,
        totalPrice: item.totalPrice - item.price,
      };
    }
    return item;
  });

  return { ...state, cartItems: updatedCartItems };
};

function CartProvider({ children }) {
  const [{ cartItems }, dispatch] = useReducer(
    reducer,
    initialState,
    initial => {
      const storedCart = localStorage.getItem('cartItems');
      return {
        cartItems: storedCart ? JSON.parse(storedCart) : initial.cartItems,
      };
    }
  );

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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
        increaseItemQuantity: handleIncrease,
        decreaseItemQuantity: handleDecrease,
        addToCart: handleAddItem,
        removeFromCart: handleRemoveItem,
        clearCart: handleClearCart,
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
