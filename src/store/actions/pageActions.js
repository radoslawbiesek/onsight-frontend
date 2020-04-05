export const SELECT_PAGE = 'SELECT_PAGE';
export const GET_PRODUCT = 'GET_PRODUCT';

export const selectPage = (page) => {
    return {
        type: SELECT_PAGE,
        page
    };
};

export const getProduct = (id) => {
    return {
        type: GET_PRODUCT,
        id
    }
};

