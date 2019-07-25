import { combineReducers } from 'redux';
import ProductsReducer from './reducer-products';
import ProductsCountReducer from './reducer-products-count';

const rootReducer = combineReducers({
  products: ProductsReducer,
  productsCount: ProductsCountReducer
});

export default rootReducer;
