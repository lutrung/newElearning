import { GET_COURSE_CATALOG, GET_COURSE_DETAIL, GET_COURSE_LIST } from "../Const/Course-Const"

const stateDefault = {
    courseCatalog: [],
    courseList: [],
    courseDetail: {}
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
        case GET_COURSE_DETAIL: {
            state.courseDetail = action.courseDetail
            return { ...state }
        }
        default: return { ...state }
    }
}
export default CourseManagerReducer;
