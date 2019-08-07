import products from '../data/products.json';
import { RESET_FILTERS, REMOVE_FILTER, ADD_FILTER, FILTER_PRODUCTS } from '../actions/filterActions';
import { ADD_TO_CART } from '../actions/cartActions';
import { SELECT_PAGE } from '../actions/pageActions';
import { SORT_BY } from '../actions/sortingActions';

const initialState = {
    // products lists
    itemsAll: products,
    itemsToDisplay: products.sort((a, b) => a.name.localeCompare(b.name)),
    itemsToDisplayLength: products.length,

    // filters
    filters : {
        color: [],
        size: [],
        category: [],
        brand: [],
    },

    // sorting
    sortingBy: 'A-Z',

    // pagination
    page: 1,
    pages: Math.ceil(products.length / 6),
    showing: 6,

    // cart
    itemsInCart: [],
    totalPrice: 0,
    totalAmount: 0,
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
                
        // sorting reducers:
        case SORT_BY:
            let sortedItems;
            switch (action.sortingBy) {
                case 'Lowest Price':
                    sortedItems = state.itemsToDisplay.sort((a, b) => a.price - b.price);
                    break;
                case 'Highest Price':
                    sortedItems = state.itemsToDisplay.sort((a, b) => b.price - a.price);
                    break;
                case 'Z-A':
                    sortedItems = state.itemsToDisplay.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                default: //A-Z
                    sortedItems = state.itemsToDisplay.sort((a, b) => a.name.localeCompare(b.name));
            }
            return { ...state, itemsToDisplay : sortedItems, sortingBy: action.sortingBy }

        // filters reducers
        case RESET_FILTERS:
            return {...state, filters: { color: [], size: [], category: [], brand: [] }};

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

        case FILTER_PRODUCTS:
                const itemsToDisplay = state.itemsAll.filter(product => {
                    return Object.keys(state.filters).every(filterType => {
                        if (!state.filters[filterType].length) { 
                            return true;
                        } else {
                            return state.filters[filterType].includes(product[filterType]);
                        }
                    })
                });
                return { ...state, itemsToDisplay: itemsToDisplay, itemsToDisplayLength: itemsToDisplay.length, pages: Math.ceil(itemsToDisplay.length / 6)};

        // page reducers   
        case SELECT_PAGE:
            return (action.page > state.pages) ? state : { ...state, page: action.page}

        // cart reducers
        case ADD_TO_CART:
            const itemToAdd = state.itemsAll.find(item => item.id === action.id);

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