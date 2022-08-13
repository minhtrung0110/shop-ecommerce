import * as actionType from "../action/actionType";

const initialState = {
  cartAr: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_PRODUCT_CART:
      const productInCart = state.cartAr.find(
        (p) => p.id === action.payload.id
      );
      // san pham chua tồn tai trong giỏ hàng
      if (!productInCart) {
        return {
          cartAr: [...state.cartAr, action.payload],
        };
      } 
      // sản phẩm đã tồn tại trong giỏ hàng
      else {
        let newcart = state.cartAr;
        const objIndex = newcart.findIndex(
          (obj) => obj.id == action.payload.id
        );
        if (newcart[objIndex].amount === undefined) {
          newcart[objIndex].amount = 2;
        } else {
          newcart[objIndex].amount = newcart[objIndex].amount + 1;
        }

        return { cartAr: [...newcart] };
      }
    case actionType.DELETE_PRODUCT_CART:
      let newcart = state.cartAr;
      const objIndex = newcart.findIndex((obj) => obj.id == action.payload.id);
      newcart.splice(objIndex, 1);
      console.log(">>newcart", newcart);
      return { cartAr: [...newcart]}//, totalprice: 0 };

    default:
      return state;
  }
};

export default cartReducer;
