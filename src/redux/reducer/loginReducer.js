import * as actionType from "../action/actionType";
const dataShop=JSON.parse(localStorage.getItem('dataShop'))
const initialState=(!!dataShop)?dataShop.user :[]

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_USER_LOGIN:
            return action.payload
        case actionType.LOGOUT_USER:
            return null
        default:
            return state.user;
    }
};

export default loginReducer;
