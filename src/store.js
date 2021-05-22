import { createStore, combineReducers } from "redux";
import { productReducer } from "./containers/products/productReducers";

export const reducers = combineReducers({ allProducts: productReducer });

const store = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
