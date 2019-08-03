import products from '../data/products.json';
import { ADD_TO_CART } from '../actions/cartActions';
import { ADD_FILTER } from '../actions/filterActions';

const initialState = {
    itemsAll: products,
    items: products,
    itemsInCart: [],
    totalPrice: 0,
    totalAmount: 0,
    filters: ['red']
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FILTER:
            return {
                ...state,
                filters: [action.filter],
                items: state.items.filter(item => {
                    for (let key in item) {
                        state.filters.includes(item[key]);
                    }
                })
            }
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

export default reducers;