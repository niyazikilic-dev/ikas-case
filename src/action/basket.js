import {
  ADD_BASKET_ITEM,
  UPDATE_BASKET_ITEM,
  DELETE_BASKET_ITEM,
} from './types';
import store from '../store';

export const addBasketItems = (product) => async (dispatch) => {
  try {
    const basketItems = store.getState().basket.items;
    let basketItem = basketItems.find((item) => item.id === product.id);
    if (basketItem !== undefined) {
      dispatch({
        type: UPDATE_BASKET_ITEM,
        payload: { ...product, quantity: basketItem.quantity + 1 },
      });
    } else {
      dispatch({
        type: ADD_BASKET_ITEM,
        payload: { ...product, quantity: 1 },
      });
    }
  } catch (error) {
    console.log('error', error);
  }
};
export const deleteBasketItem = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_BASKET_ITEM,
      payload: id,
    });
  } catch (error) {
    console.log('error', error);
  }
};
