export const SORT_BY = 'SORT_BY';

export const sortBy = (sortingBy) => {
    return {
        type: SORT_BY,
        sortingBy
    }
};