import config from '~/config/'
import Home from '~/pages/Home'
import Blog from '~/pages/Blog'
import Contact from '~/pages/Contact'
import Profile from '~/pages/Profile'
import { HomeLayout,DefaultLayout } from '~/layouts'

//Public Route
// Những trang k cần login cũng vào được
const publicRoutes=[
{ path: config.routes.home,component:<Home/>, layout:HomeLayout},
{ path: config.routes.blog,component:<Blog/>,layout:DefaultLayout},
{ path: config.routes.contact,component:<Contact/>,layout:DefaultLayout},

]

//Private Route
// Những trang phảicần login mới truy cập được
const privateRoutes =[
    { path: config.routes.profile,component:<Profile/>, layout:DefaultLayout},

]
export {publicRoutes,privateRoutes}