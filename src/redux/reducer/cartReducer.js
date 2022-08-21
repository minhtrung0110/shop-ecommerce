import * as actionType from "../action/actionType";
const dataShop=localStorage.getItem('dataShop')
const yourCart=(!!dataShop)?JSON.parse(dataShop.cart) :[]
const initialState=(!!yourCart)?yourCart:[]

const cartReducer = (state = yourCart, action) => {
  switch (action.type) {
      case actionType.ADD_PRODUCT_CART:
     const checkExistanceProduct=state.cart.find((obj) => {
        return obj.product.id===action.payload.id
          
    }) 
   //console.log(!!checkExistanceProduct)     
      // sản phẩm đã tồn tại trong giỏ hàng
      if (!!checkExistanceProduct) {
        const newCart=   state.cart.map((obj,index) => {
            console.log(obj.product.id===action.payload.id)
            return (obj.product.id===action.payload.id) ?{
                product:obj,
                amount:Number(obj.amount)+1
            } :obj
        })
       // console.log(newCart)
        return newCart
      
        
      } 
      // san pham chua tồn tai trong giỏ hàng
      else {
        const newCartItem={product: action.payload,amount:1}
        return    [...state.cart,newCartItem]
    }
  
      
    case actionType.DELETE_PRODUCT_CART:
        const newCart=state
      const objIndex = state.cart.findIndex((obj) => obj.product.id === action.payload.id);
      newCart.splice(objIndex, 1);
      console.log(">>newcart", newCart);
      return  [...newCart]//, totalprice: 0 };*/
        
    default:
      return state.cart;
  }
};

export default cartReducer;
