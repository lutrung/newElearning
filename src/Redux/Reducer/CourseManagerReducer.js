import { GET_COURSE_CATALOG, GET_COURSE_LIST } from "../Const/Course-Const"

const stateDefault = {
    courseCatalog: [],
    courseList: []
}
const CourseManagerReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_COURSE_CATALOG: {
            state.courseCatalog = action.courseCatalog
            return { ...state }
        }
        case GET_COURSE_LIST: {
            state.courseList = action.courseList
            return { ...state }
        }
        default: return { ...state }
    }
}
export default CourseManagerReducer;
