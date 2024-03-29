import config from '~/config/'
import Home from '~/pages/Home'
import Blog from '~/pages/Blog'
import Contact from '~/pages/Contact'
import Profile from '~/pages/Profile'
import Cart from '~/pages/Cart'
import {HomeLayout, DefaultLayout} from '~/layouts'
import {LoginForm, RegisteryForm} from "~/components/Form";
import SignIn from "~/pages/Login/SignIn";
import NotFound from "~/pages/NotFound";
import Shop from "~/pages/Shop";
import ProductDetail from "~/pages/ProductDetail";

//Public Route
// Những trang k cần login cũng vào được
const publicRoutes = [
    {path: config.routes.home, component: <Home/>, layout: HomeLayout},
    {path: config.routes.shop, component: <Shop />,layout:DefaultLayout },
    {path: config.routes.blog, component: <Blog/>, layout: DefaultLayout},
    {path: config.routes.contact, component: <Contact/>, layout: DefaultLayout},
    {path: config.routes.cart, component: <Cart/>, layout: DefaultLayout},
    {path: config.routes.register, component: <RegisteryForm />,layout:null },
    {path: config.routes.login, component: <SignIn />,layout:null },
    {path: config.routes.orders, component: <Profile/>,layout:null },
    {path: config.routes.notfound,component:<NotFound/>, layout: null},
    {path:config.routes.detailProduct,component: <ProductDetail />,layout: DefaultLayout},
]

//Private Route
// Những trang phảicần login mới truy cập được
const privateRoutes = [
    {path: config.routes.profile, component: <Profile/>, layout: DefaultLayout},

]
export {publicRoutes, privateRoutes}