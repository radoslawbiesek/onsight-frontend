import React, {
  createContext,
  useReducer,
  useCallback,
  useContext,
} from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  DECREASE_AMOUNT: 'DECREASE_AMOUNT',
};

function cartReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { quantity, item } = action.payload;
      const itemInCart = findItemById(state.items, item._id);

      if (itemInCart) {
        const increasedItems = changeQuantityById(
          state.items,
          item._id,
          quantity
        );
        return {
          ...state,
          totalAmount: state.totalAmount + quantity,
          items: increasedItems,
        };
      }

      return {
        ...state,
        totalAmount: state.totalAmount + quantity,
        items: [...state.items, { ...item, quantity }],
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const { _id } = action.payload;
      const { quantity } = findItemById(state.items, _id);
      const filteredItems = filterItemsById(state.items, _id);
      return {
        ...state,
        totalAmount: state.totalAmount - quantity,
        items: filteredItems,
      };
    }

    case actionTypes.DECREASE_AMOUNT: {
      const { _id, quantity } = action.payload;
      const itemInCart = findItemById(state.items, _id);

      if (itemInCart.quantity <= quantity) {
        const filteredItems = filterItemsById(state.items, _id);
        return {
          ...state,
          totalAmount: state.totalAmount - quantity,
          items: filteredItems,
        };
      }

      const decreasedItems = changeQuantityById(state.items, _id, -quantity);
      return {
        ...state,
        totalAmount: state.totalAmount - quantity,
        items: decreasedItems,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  function findItemById(items, _id) {
    return items.find((item) => item._id === _id);
  }

  function filterItemsById(items, _id) {
    return items.filter((item) => item._id !== _id);
  }

  function changeQuantityById(items, _id, quantity) {
    return items.map((item) => {
      if (item._id === _id) {
        return {
          ...item,
          quantity: item.quantity + quantity,
        };
      }
      return item;
    });
  }
}

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = useCallback(
    (item, quantity = 1) => {
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { item, quantity },
      });
    },
    [dispatch]
  );

  const removeFromCart = useCallback(
    (_id) => {
      dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: { _id },
      });
    },
    [dispatch]
  );

  const decreaseAmount = useCallback(
    (_id, quantity = 1) => {
      dispatch({
        type: actionTypes.DECREASE_AMOUNT,
        payload: { _id, quantity },
      });
    },
    [dispatch]
  );

  return (
    <CartContext.Provider
      value={{ ...cart, addToCart, removeFromCart, decreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
