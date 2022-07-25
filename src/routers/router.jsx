import React from 'react'

import { BrowserRouter,
    Routes,
    Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'

const Router = () => {
    return (
       <BrowserRouter>
            <Routes>
                <Route path='/' exact component={Home}/>
                <Route path='/catalog/:slug' component={Product}/>
                <Route path='/catalog' component={Catalog}/>
                <Route path='/cart' component={Cart}/>
            </Routes>
       </BrowserRouter>
    )
}

export default Router