import products from '../data/products.json';

const initialState = {
    items: products,
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    return state;
}

export default cartReducer;