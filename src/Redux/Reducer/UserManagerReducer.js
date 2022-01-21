import { PERSONAL_INFO, SIGN_IN } from "../Const/Course-Const";


let userSignIn = {}
if (localStorage.getItem("USER_SIGNIN")) {
    userSignIn = JSON.parse(localStorage.getItem("USER_SIGNIN"));
}
const stateDefault = {
    userSignIn: userSignIn,
    personalInfo: {}
}
const UserManagerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SIGN_IN: {
            state.userSignIn = action.userSignIn
            return { ...state }
        }
        case PERSONAL_INFO: {
            state.personalInfo = action.personalInfo
            return { ...state }
        }
        default: return { ...state }
    }
}

export default UserManagerReducer;

