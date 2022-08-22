import * as actionType from "../action/actionType";
const dataShop=JSON.parse(localStorage.getItem('dataShop'))
const yourCart=(!!dataShop)?dataShop.cart:[]
const initialState=(!!yourCart)?yourCart:[]

const cartReducer = (state = yourCart, action) => {
  switch (action.type) {
      case actionType.ADD_PRODUCT_CART:
          const inCart = state.cart.find((item) =>
              item.id === action.payload.id ? true : false
          );
          return  (inCart)
              ? state.cart.map((item) =>
                  item.id === action.payload.id
                      ? { ...item,  qty: item.qty + 1 }
                      : item
              )
              : [...state.cart, {...action.payload, qty: 1 }]
   //console.log(state)
      // sản phẩm đã tồn tại trong giỏ hàng
     /* if (!!checkExistanceProduct) {
        const newCart=   state.cart.map((obj) => {
           // console.log(obj.product.id===action.payload.id)
            if (obj.product.id===action.payload.id) {
                console.log({
                    product:obj,
                    amount:Number(obj.amount)+1
                })
                return {
                ...obj,
                amount:Number(obj.amount)+1
            }} else console.log('case 2')
        })*/
      // san pham chua tồn tai trong giỏ hàng
     /* else {
        const newCartItem={product: action.payload,amount:1}
        return    [...state.cart,newCartItem]
    }*/
      case actionType.INCREASEE_QTY_CART:
          return state.cart.map((item) =>
              item.id === action.payload
                  ? { ...item,  qty: item.qty + 1 }
                  : item
          )
      case actionType.DECREASEE_QTY_CART:
          return state.cart.map((item) =>
              item.id === action.payload
                  ? { ...item,  qty:(item.qty===1)?1:item.qty - 1 }
                  : item
          )

      case actionType.DELETE_PRODUCT_CART:
        return  state.cart.filter((item) => item.id !== action.payload)

        
    default:
      return state.cart;
  }
};

export default cartReducer;
