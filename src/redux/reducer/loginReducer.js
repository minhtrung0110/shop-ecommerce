import * as actionType from "../action/actionType";
const userLogin=JSON.parse(localStorage.getItem('dataShop')).user
const initialState=(!!userLogin)?userLogin:null

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_USER_LOGIN:
            return action.payload

        default:
            return state.user;
    }
};

export default loginReducer;
