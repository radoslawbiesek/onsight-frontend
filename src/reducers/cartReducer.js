import products from '../data/products.json';
import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
    items: products,
    itemsInCart: [],
    totalPrice: 0,
    totalAmount: 0,
}

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const itemToAdd = state.items.find(item => item.id === action.id);

            if (state.itemsInCart.find(item => action.id === item.id)) {
                itemToAdd.quantity++;
                return {
                    ...state,
                    totalPrice: state.totalPrice + itemToAdd.price,
                    totalAmount: state.totalAmount+ 1,
                };    
            } else {
                itemToAdd.quantity = 1;
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart, itemToAdd],
                    totalPrice: state.totalPrice + itemToAdd.price,
                    totalAmount: state.totalAmount + 1,
                };
            }       
    }
    return state;
}

export default cartReducer;