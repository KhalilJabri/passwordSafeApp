import {
    LOGIN,
    LOGOUT,
    MODIFY_PROFILE,
    REGISTER,
    RESET_PASSWORD,
    SET_CODE
} from '../actions/authAct'

const initialState = {
    token: null,
    userId: null,
    codeOtp: '',
    user: {},
};

export default (state= initialState, action)=> {
    switch (action.type){

        default:
            return state;
    }

}