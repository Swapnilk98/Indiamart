import { CART,TOKEN } from "./action";

const init = {
  cart: "",
  token:null,

};

export const cartReducer = (store = init, { type, payload }) => {
  console.log(payload, "");
  switch (type) {
    case CART:
      return {
        ...store,
        cart: payload,
      };
      case TOKEN:
        return {
          ...store,
          token: payload,
        }
    default:
      return store;
  }
};
