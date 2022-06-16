import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { cartReducer } from "./cart/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  cartReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
