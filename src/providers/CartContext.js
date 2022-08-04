import {createContext,useState} from 'react'

const CartContext=createContext()
function CartProvider({children}) {
    const cartItem=JSON.parse(localStorage.getItem('cart'))
    const initNumCart=(!!cartItem)?cartItem: []    
    const [cart,setCart]= useState(initNumCart)
    const handleAddCart=(item) => {
		const itemCart={productId:item.id,amount:1}

		setCart(prev=> {
            // check san pham đa tồn tai trong giỏ hàng hay chưa
            const checkExistanceProduct=cart.find((obj) => {
                return obj.productId===item.id
                  
            })           
            // xu ly tăng số lượng nếu sản phẩm đã có trong giỏ hàng nếu không thêm sản phẩm mới vào giỏ hàng
            const newArrayCart=(!!checkExistanceProduct)
            ? cart.map((obj,index) => {
                return (obj.productId===item.id) ?{
                    productId:obj.productId,
                    amount:obj.amount++
                } :obj
            })
			:[...prev,itemCart]
			// luu vao gio hang
			localStorage.setItem('cart',JSON.stringify(newArrayCart));
			return newArrayCart })
		
	}
    const cartContext={
        cart,
        handleAddCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
     );
}

export { CartContext,CartProvider };