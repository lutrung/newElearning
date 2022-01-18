import { ADD_ITEM, DELETE_ITEM, GET_COURSE_CATALOG, GET_COURSE_DETAIL, GET_COURSE_LIST } from "../Const/Course-Const"
import { toast } from 'react-toastify';
const stateDefault = {
    courseCatalog: [],
    courseList: [],
    courseDetail: {},
    listItemAdd: []
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
        case ADD_ITEM: {
            let newListItemAdd = [...state.listItemAdd]
            let check = newListItemAdd.some((item) => {
                return item.maKhoaHoc === action.item.maKhoaHoc
            })
            if (!check) {
                toast.success("Thêm thành công", { theme: 'dark' })
                newListItemAdd.push(action.item)
                state.listItemAdd = newListItemAdd
            } else {
                toast.error("Khóa học đã có trong giỏ !", { theme: 'dark' })
            }
            return { ...state }
        }
        case DELETE_ITEM: {
            let newListItemAdd = [...state.listItemAdd]
            let itemDel = newListItemAdd.find((item) => {
                return item.maKhoaHoc === action.codeCourse
            })
            let index = newListItemAdd.findIndex((item) => {
                return item.maKhoaHoc === itemDel.maKhoaHoc
            })
            newListItemAdd.splice(index, 1)
            state.listItemAdd = newListItemAdd
            return { ...state }
        }
        default: return { ...state }
    }
}
export default CourseManagerReducer;
