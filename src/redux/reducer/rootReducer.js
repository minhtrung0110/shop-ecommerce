import {combineReducers} from "redux";
import cartReducer from "./cartReducer";

const rootReducer=(state,action)=> {
    // chia thành các reducer nhỏ Slice dể dễ quản lý
    const CartContent=cartReducer(state, action)
    localStorage.setItem('dataShop',JSON.stringify({ cart:CartContent,
        user:false }))
    return   { cart:CartContent,
        user:false }
}
/*const rootReducer=combineReducers({
        filters:filtersReducer,
        todoList:todoListReducer,
    }
)*/
export  default  rootReducer