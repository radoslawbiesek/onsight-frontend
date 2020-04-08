import { BASE_URL } from '../config/config';

export const getProducts = async (limit, offset, sort) => {
  try {
    const params = new URLSearchParams([
      ['limit', limit],
      ['offset', offset],
      ['sort', sort]
    ]);
    const response = await fetch(`${BASE_URL}/products?${params.toString()}`);
    const { data } = await response.json();
    const { products, count } = data;
    return { products, count };
  } catch (error) {
    throw new Error(error);
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    const { data } = await response.json();
    const { product } = data;
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

export const getFilters = async () => {
  try {
    const response = await fetch(`${BASE_URL}/filters/`);
    const { data } = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
