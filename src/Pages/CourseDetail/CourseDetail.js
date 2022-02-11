import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button from '@mui/material/Button';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import banner from '../../Assets/Images/banner.jpg';
import user from '../../Assets/Images/user.png';
import { getCourseDetail } from '../../Redux/Action/CourseAction';
import { ADD_ITEM } from '../../Redux/Const/Course-Const';
function CourseDetail() {

    const params = useParams();
    const dispatch = useDispatch()
    const { courseDetail } = useSelector(state => state.CourseManagerReducer)
    const addItem = (item) => {
        dispatch({
            type: ADD_ITEM,
            item: item
        })
    }
    useEffect(() => {
        dispatch(getCourseDetail(params.courseCode))
    }, [])
    return (
        <div className='courseDetail'>
            <ToastContainer />
            <div className='courseDetail-banner' style={{ backgroundImage: `url(${banner})` }}>
                <div className='overlay'></div>
                <div className='banner-content'>
                    <h1 className='content-title'>Chi tiết khóa học</h1>

                </div>
            </div>
            <div className='courseDetail-body'>
                <div className='body-left'>
                    <h2>{courseDetail.tenKhoaHoc}</h2>
                    <div className='left-detail'>
                        <div className='detail-avatar'>
                            <img src={user} alt='' />
                        </div>
                        <div className='detail-teacher'>Giảng viên <p>{courseDetail.nguoiTao?.hoTen}</p></div>
                        <div className='detail-catalog'>Danh mục <p>{courseDetail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p></div>
                        <Button className='detail-add' variant="contained" onClick={() => addItem(courseDetail)}>Thêm vào giỏ hàng</Button>
                    </div>
                    <div className='left-thumnail' >
                        <img src={courseDetail.hinhAnh} alt='' onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = 'https://void-of-course.com/wp-content/uploads/2020/08/Online-Courses.jpg';
                        }} />
                    </div>
                </div>
                <div className='body-right'>
                    <h2 className='body-title'>Thông tin khóa học</h2>
                    <div className='right-list'>
                        <div className='right-item'>
                            <LibraryBooksOutlinedIcon className='item-icon' />
                            <span className='item-title' >Tên khóa học: </span>
                            <span className='item-name' title={courseDetail.tenKhoaHoc}>{courseDetail.tenKhoaHoc}</span>
                        </div>
                        <div className='right-item'>
                            <ListOutlinedIcon className='item-icon' />
                            <span className='item-title'>Danh mục: </span>
                            <span className='item-name'>{courseDetail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</span>
                        </div>
                        <div className='right-item'>
                            <AssignmentLateOutlinedIcon className='item-icon' />
                            <span className='item-title'>Mô tả: </span>
                            <span className='item-name' title={courseDetail.moTa}>{courseDetail.moTa}</span>
                        </div>
                        <div className='right-item'>
                            <DateRangeOutlinedIcon className='item-icon' />
                            <span className='item-title'>Ngày tạo: </span>
                            <span className='item-name'>{courseDetail.ngayTao}</span>
                        </div>
                        <div className='right-item'>
                            <PageviewOutlinedIcon className='item-icon' />
                            <span className='item-title'>Lượt xem: </span>
                            <span className='item-name'>{courseDetail.luotXem}</span>
                        </div>
                        <div className='right-item'>
                            <PersonOutlineOutlinedIcon className='item-icon' />
                            <span className='item-title'>Học viên: </span>
                            <span className='item-name'>{courseDetail.soLuongHocVien}</span>
                        </div>
                        <div className='right-item'>
                            <LocalAtmOutlinedIcon className='item-icon' />
                            <span className='item-title'>Giá: </span>
                            <span className='item-name'>xx</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(CourseDetail)

