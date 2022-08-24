import * as actionType from "./actionType";

export const addProductCart = (product) => {
  return {
    type: actionType.ADD_PRODUCT_CART,
    payload: product,
  };
};
export const addProductCartWithQuantity = (product,quantity) => {
  return {
    type: actionType.ADD_PRODUCT_CART_WITH_QUANTITY,
    payload: {product,quantity}
  };
};
export const deleteProductCart = (id) => {
  return {
    type: actionType.DELETE_PRODUCT_CART,
    payload: id,
  };
};
export const increaseQtyCart = (id) => {
  return {
    type: actionType.INCREASEE_QTY_CART,
    payload: id,
  };
};
export const decreaseQtyCart = (id) => {
  return {
    type: actionType.DECREASEE_QTY_CART,
    payload: id,
  };
};
export const addUserLogin = (user) => {
  return {
    type: actionType.ADD_USER_LOGIN,
    payload: user
  };
};
export const logoutUser=  {
    type: actionType.LOGOUT_USER,
  };

