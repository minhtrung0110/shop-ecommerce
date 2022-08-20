import {combineReducers} from "redux";
import cartReducer from "./cartReducer";
import loginReducer from "./loginReducer"

const rootReducer=(state={cart:[],user:null},action)=> {
    // chia thành các reducer nhỏ Slice dể dễ quản lý
    const CartContent=cartReducer(state, action)
    const UserLogin=loginReducer(state, action)
    localStorage.setItem('dataShop',JSON.stringify({ cart:CartContent, user:UserLogin }))

    return   {
        cart:CartContent,
        user:UserLogin
    }
}
/*const rootReducer=combineReducers({
        filters:filtersReducer,
        todoList:todoListReducer,
    }
)*/
export  default  rootReducer