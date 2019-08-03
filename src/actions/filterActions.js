export const ADD_FILTER = 'ADD_FILTER';
export const RESET_FILTERS = 'RESET_FILTERS';

export const addFilter = (filter) => {
    console.log(filter);
    return {
        type: ADD_FILTER,
        filter
    }
}

export const resetFilters = () => {
    return {
        type: RESET_FILTERS,
    }
}