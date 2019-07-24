import axios from 'axios';

const ROOT_URL = `http://localhost:8000`;

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';

export function fetchProducts(page=1, category, price) {
  let url = `${ROOT_URL}/products?page=${page}`;
  if (category) {
    url = `${url}&category=${category}`;
  }
  if (price) {
    url = `${url}&price=${price}`;
  }
  const request = axios.get(url);

  console.log('Request', request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}
