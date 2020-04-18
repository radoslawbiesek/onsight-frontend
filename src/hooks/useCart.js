import React, {
  createContext,
  useReducer,
  useCallback,
  useContext,
  useMemo,
} from 'react';

const CartContext = createContext();

const initialState = {
  items: [],
  totalAmount: 0,
  totalPrice: 0,
};

export function CartProvider(props) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);
  return <CartContext.Provider value={value} {...props} />;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }
  const [state, dispatch] = context;

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

  return { ...state, addToCart, removeFromCart, decreaseAmount };
}

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
      let increasedItems;
      if (itemInCart) {
        increasedItems = changeQuantityById(state.items, item._id, quantity);
      } else {
        increasedItems = [...state.items, { ...item, quantity }];
      }

      return {
        ...state,
        totalAmount: state.totalAmount + quantity,
        totalPrice: state.totalPrice + quantity * item.price,
        items: increasedItems,
      };
    }

    case actionTypes.REMOVE_FROM_CART: {
      const { _id } = action.payload;
      const { quantity, price } = findItemById(state.items, _id);
      const filteredItems = filterItemsById(state.items, _id);

      return {
        ...state,
        totalAmount: state.totalAmount - quantity,
        totalPrice: state.totalPrice - quantity * price,
        items: filteredItems,
      };
    }

    case actionTypes.DECREASE_AMOUNT: {
      const { _id, quantity } = action.payload;
      const itemInCart = findItemById(state.items, _id);
      let decreasedItems;
      if (itemInCart.quantity <= quantity) {
        decreasedItems = filterItemsById(state.items, _id);
      } else {
        decreasedItems = changeQuantityById(state.items, _id, -quantity);
      }

      return {
        ...state,
        totalAmount: state.totalAmount - quantity,
        totalPrice: state.totalPrice - quantity * itemInCart.price,
        items: decreasedItems,
      };
    }

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
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
