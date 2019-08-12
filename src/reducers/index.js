import products from '../data/products.json';
import codes from '../data/codes.json';

import { RESET_FILTERS, REMOVE_FILTER, ADD_FILTER, FILTER_PRODUCTS, SET_PRICES } from '../actions/filterActions';
import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_AMOUNT, USE_DISCOUNT_CODE, CHECKOUT } from '../actions/cartActions';
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
    priceMin: 0,
    priceMax: Infinity,
    
    // sorting
    sortingBy: 'A-Z',

    // pagination
    page: 1,
    pages: Math.ceil(products.length / 6),
    showing: 6,

    // cart
    itemsInCart: [],
    
    totalAmount: 0,
    productsTotalPrice: 0,
    discount: 0, // 35% discount = 0.35 etc.
    freeShipping: false,

    validCodes: codes,

    freeShippingFrom: 250,
    shippingCost: 8.99,

}

const reducers = (state = initialState, action) => {
    switch(action.type) {
                
        // SORTING REDUCERS
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
            return {
                ...state, 
                itemsToDisplay: sortedItems, 
                sortingBy: action.sortingBy
            }

        // FILTERS REDUCERS
        case RESET_FILTERS:
            return {
                ...state, 
                filters: { color: [], size: [], category: [], brand: [] },
                priceMin: 0,
                priceMax: Infinity,
            };

        case REMOVE_FILTER:
            const reducedFilters = {...state.filters};
            reducedFilters[action.filterType] = state.filters[action.filterType].filter(item => item !== action.filterValue);
            return {
                ...state, 
                filters: reducedFilters
            };

        case ADD_FILTER:
            if (state.filters[action.filterType].includes(action.filterValue)) {
                return state;
            } else {
                const extendedFilters = {...state.filters};
                extendedFilters[action.filterType].push(action.filterValue);
                return {
                    ...state, 
                    filters: extendedFilters
                };
            }

        case FILTER_PRODUCTS:
            // filter by categories, color, size, brand
            let itemsFiltered = state.itemsAll.filter(product => {
                return Object.keys(state.filters).every(filterType => {
                    if (!state.filters[filterType].length) { 
                        return true;
                    } else if (Array.isArray(product[filterType])) {
                        return product[filterType].some(productProp => state.filters[filterType].includes(productProp));
                    } else {
                        return state.filters[filterType].includes(product[filterType]);
                    }
                })
            });
            // filter by price
            if (state.priceMin !== 0 || state.priceMax !== Infinity) {
                itemsFiltered = itemsFiltered.filter(item => {
                    return (parseFloat(item.price) > parseFloat(state.priceMin) && parseFloat(item.price) < parseFloat(state.priceMax));
                });
            }
            return { 
                ...state, 
                itemsToDisplay: itemsFiltered, 
                itemsToDisplayLength: itemsFiltered.length, 
                pages: Math.ceil(itemsFiltered.length / 6)
            };
        
        case SET_PRICES:
            return {
                ...state, 
                priceMin: action.priceMin, 
                priceMax: action.priceMax
            };

        // PAGE REDUCERS 
        case SELECT_PAGE:
            return (action.page > state.pages) ? state : { ...state, page: action.page}

        // CART REDUCERS
        case ADD_TO_CART:
            const itemToAdd = state.itemsAll.find(item => item.id === action.id);
            if (state.itemsInCart.find(item => action.id === item.id)) {
                itemToAdd.quantity += action.quantity;
                return {
                    ...state,
                    productsTotalPrice: state.productsTotalPrice + parseFloat(itemToAdd.price),
                    totalAmount: state.totalAmount + 1,
                    freeShipping: (state.productsTotalPrice + parseFloat(itemToAdd.price)) > state.freeShippingFrom,
                };    
            } else {
                itemToAdd.quantity = 1;
                return {
                    ...state,
                    itemsInCart: [...state.itemsInCart, itemToAdd],
                    productsTotalPrice: state.productsTotalPrice + parseFloat(itemToAdd.price),
                    totalAmount: state.totalAmount + 1,
                    freeShipping: (state.productsTotalPrice + parseFloat(itemToAdd.price)) > state.freeShippingFrom,
                };
            }

        case DECREASE_AMOUNT:
            const itemToDecrease = state.itemsAll.find(item => item.id === action.id);
            if (itemToDecrease.quantity === 1) {
                return { 
                    ...state
                };
            } else {
                itemToDecrease.quantity--;
                return {
                    ...state,
                    productsTotalPrice: state.productsTotalPrice - parseFloat(itemToDecrease.price),
                    totalAmount: state.totalAmount - 1,
                    freeShipping: (state.productsTotalPrice - parseFloat(itemToDecrease.price)) > state.freeShippingFrom,
                };
            }

        case REMOVE_FROM_CART:
            const { price, quantity } = state.itemsAll.find(item => item.id === action.id);
            const itemsAfterRemove = state.itemsInCart.filter(item => item.id !== action.id);

            return { 
                ...state,
                itemsInCart: itemsAfterRemove,
                totalAmount: state.totalAmount - quantity,
                productsTotalPrice: state.productsTotalPrice - quantity * price,
                freeShipping: (state.productsTotalPrice - quantity * price) > state.freeShippingFrom,
            }
        
        case USE_DISCOUNT_CODE:
            if (Object.keys(state.validCodes).includes(action.code)) {
                return {
                    ...state,
                    discount: parseFloat(state.validCodes[action.code]),
                };
            } else {
                return { 
                    ...state,
                    discount: 0,
                }
            }
        
        case CHECKOUT:
            const totalPrice = state.productsTotalPrice * (1 - state.discount) + (state.freeShipping ? 0 : state.shippinCost ); 
            return {
                ...state,
                totalPrice
            }

        default:
            return {
                ...state
            };
    }
}

export default reducers;