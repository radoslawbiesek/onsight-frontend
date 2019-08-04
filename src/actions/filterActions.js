export const GET_FILTERED_PRODUCTS = 'GET_FILTERED_PRODUCTS';
export const ADD_FILTER = 'ADD_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const getFilteredProducts = () => { 
    return {
        type: GET_FILTERED_PRODUCTS 
    }
};

export const addFilter = (filterType, filterValue) => {
    return {
        type: ADD_FILTER,
        filterType,
        filterValue
    }
}

export const removeFilter = (filterType, filterValue) => {
    return {
        type: REMOVE_FILTER,
        filterType,
        filterValue
    }
}

export const resetFilters = () => { 
    return {
        type: RESET_FILTERS
    }
};