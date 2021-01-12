import { GET_PRODUCTS } from '../action/types';

const initialState = {
  products: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
}
