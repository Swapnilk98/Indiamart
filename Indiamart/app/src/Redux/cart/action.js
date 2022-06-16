export const CART = "CART_DATA";

export const addCart = (data) => {
  return {
    type: CART,
    payload: data,
  };
};


export const TOKEN = "TOKEN_DATA";

export const addToken = (data) => {
  return {
    type: TOKEN,
    payload: data,
  };
};

