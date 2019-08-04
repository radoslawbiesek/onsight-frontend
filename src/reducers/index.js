import products from '../data/products.json';
import { RESET_FILTERS, REMOVE_FILTER, ADD_FILTER, GET_FILTERED_PRODUCTS } from '../actions/filterActions';
import { ADD_TO_CART } from '../actions/cartActions';

const initialState = {
    // products lists
    itemsAll: products,
    itemsFiltered: products,
    itemsFilteredLength: products.length,

    // filters
    filters : {
        color: [],
        size: [],
        category: [],
        brand: [],
    },

    // cart
    itemsInCart: [],
    totalPrice: 0,
    totalAmount: 0,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {

        case GET_FILTERED_PRODUCTS:
            const itemsFiltered = state.itemsAll.filter(product => {
                return Object.keys(state.filters).every(filterType => {
                    if (!state.filters[filterType].length) { 
                        return true;
                    } else {
                        return state.filters[filterType].includes(product[filterType]);
                    }
                })
            });
            console.log(itemsFiltered.length);
            return { ...state, itemsFiltered: itemsFiltered, itemsFilteredLength: itemsFiltered.length }

        // filters reducers
        case RESET_FILTERS:
            const resetFilters = { color: [], size: [], category: [], brand: [] };
            return {...state, filters: resetFilters};

        case REMOVE_FILTER:
            const reducedFilters = {...state.filters};
            reducedFilters[action.filterType] = state.filters[action.filterType].filter(item => item !== action.filterValue);
            return {...state, filters: reducedFilters};

        case ADD_FILTER:
            if (state.filters[action.filterType].includes(action.filterValue)) {
                return state;
            } else {
                const extendedFilters = {...state.filters};
                extendedFilters[action.filterType].push(action.filterValue);
                return {...state, filters: extendedFilters};
            }

        // cart reducers
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