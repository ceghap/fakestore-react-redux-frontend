import { actionTypes } from "../constants/actions-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "flipper",
      category: "kasut",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
      return { ...state, products: action.payload };
    case actionTypes.SELECTED_PRODUCTS:
      return state;
    default:
      return state;
  }
};
