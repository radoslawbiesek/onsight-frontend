export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const ADD_FILTER = 'ADD_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';
export const REMOVE_FILTER = 'REMOVE_FILTER';

export const filterProducts = () => { 
    return {
        type: FILTER_PRODUCTS 
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