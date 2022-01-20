import { combineReducers } from "redux";
import CourseManagerReducer from './CourseManagerReducer'
import UserManagerReducer from './UserManagerReducer'
export const rootReducer = combineReducers({
    CourseManagerReducer,
    UserManagerReducer
})