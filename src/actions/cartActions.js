export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
};

export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
};

export const decreaseAmount = (id) => {
    return {
        type: DECREASE_AMOUNT,
        id
    }
};