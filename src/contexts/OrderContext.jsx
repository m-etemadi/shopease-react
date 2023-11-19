import { createContext, useContext, useReducer } from 'react';

const BASE_URL = 'http://localhost:9000';

const OrderContext = createContext();

const initialState = {
  orders: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'order/placed':
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };

    default:
      throw new Error('Unknown action type');
  }
}

function OrderProvider({ children }) {
  const [{ orders }, dispatch] = useReducer(reducer, initialState);

  async function handlePlaceOrder(newOrder) {
    try {
      const res = await fetch(`${BASE_URL}/orders`, {
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
    <OrderContext.Provider
      value={{
        placeOrder: handlePlaceOrder,
        orders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined)
    throw new Error('OrderContext was used outside the OrderProvider');
  return context;
}

export { OrderProvider, useOrder };
