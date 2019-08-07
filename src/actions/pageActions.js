export const SELECT_PAGE = 'SELECT_PAGE';

export const selectPage = (page) => {
    return {
        type: SELECT_PAGE,
        page
    };
};

