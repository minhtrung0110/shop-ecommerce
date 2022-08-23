import React from 'react'

const routes = {
    home:"/",
    shop:"/shop",
    profile:"/@:nickname",
    blog:"/blog",
    search:"/search",
    contact:"/contact",
    login:"/login",
    register:"/register",
    cart:"/cart",
    detailProduct:"/detailproduct/:id",
    orders:"/orders/",
    notfound:"/*",
    detailProductWithoutId:"/detailproduct/"
   
}

export default routes