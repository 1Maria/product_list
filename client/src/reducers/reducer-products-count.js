import { FETCH_PRODUCTS_COUNT } from '../actions/index';

export default function(state = 0, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_COUNT:
      return action.payload.data.count;
    default:
      return state;
  }
}
