import {combineReducers} from "redux";
import cartReducer from "./cartReducer";

const rootReducer=(state,action)=> {
    // chia thành các reducer nhỏ Slice dể dễ quản lý
    return    cartReducer(state, action)
}
/*const rootReducer=combineReducers({
        filters:filtersReducer,
        todoList:todoListReducer,
    }
)*/
export  default  rootReducer