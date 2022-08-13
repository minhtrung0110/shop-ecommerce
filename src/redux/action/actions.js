import * as actionType from "./actionType";

export const addProductCart = (product) => {
  return {
    type: actionType.ADD_PRODUCT_CART,
    payload: product,
  };
};

export const deleteProductCart = (product) => {
  return {
    type: actionType.DELETE_PRODUCT_CART,
    payload: product,
  };
};
