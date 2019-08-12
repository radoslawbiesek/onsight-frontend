export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const DECREASE_AMOUNT = 'DECREASE_AMOUNT';
export const USE_DISCOUNT_CODE = 'USE_DISCOUNT_CODE';
export const CHECKOUT = 'CHECKOUT';

export const addToCart = (id, quantity = 1) => {
    return {
        type: ADD_TO_CART,
        id,
        quantity
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

export const useDiscountCode = (code) => {
    return {
        type: USE_DISCOUNT_CODE,
        code
    }
}

export const checkout = (productsTotalPrice, discount, freeShipping) => {
    return {
        type: CHECKOUT,
        productsTotalPrice,
        discount,
        freeShipping
    }
}
