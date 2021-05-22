import { actionTypes } from "../constants/actions-types";
export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};
