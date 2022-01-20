import Axios from 'axios'
import { GET_COURSE_CATALOG, GET_COURSE_DETAIL, GET_COURSE_LIST } from '../Const/Course-Const'

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0'
export const getCourseCatalog = () => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc',
                method: 'GET',
                headers: {
                    TokenCybersoft: token
                }
            })
            dispatch({
                type: GET_COURSE_CATALOG,
                courseCatalog: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response)
        }
    }
}
export const getCourseList = () => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: 'https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
                method: 'GET',
                headers: {
                    TokenCybersoft: token
                }
            })
            dispatch({
                type: GET_COURSE_LIST,
                courseList: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response)
        }
    }
}
export const getCourseDetail = (courseCode) => {
    return async (dispatch) => {
        try {
            let result = await Axios({
                url: `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseCode}`,
                method: 'GET',
                headers: {
                    TokenCybersoft: token
                }
            })
            dispatch({
                type: GET_COURSE_DETAIL,
                courseDetail: result.data
            })
        } catch (err) {
            console.log('Thất bại', err.response)
        }
    }
}