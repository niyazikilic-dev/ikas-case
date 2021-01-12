import {
  ADD_BASKET_ITEM,
  UPDATE_BASKET_ITEM,
  DELETE_BASKET_ITEM,
} from '../action/types';

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_BASKET_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
    case UPDATE_BASKET_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === payload.id ? { ...payload } : item
        ),
      };
    case DELETE_BASKET_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
}
