import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import banner from '../../Assets/Images/banner.jpg'
import { getCourseDetail } from '../../Redux/Action/CourseAction'
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Button from '@mui/material/Button';
function CourseDetail(props) {
    const courseCode = props.match.params.courseCode
    const dispatch = useDispatch()
    const { courseDetail } = useSelector(state => state.CourseManagerReducer)
    console.log(courseDetail);
    useEffect(() => {
        dispatch(getCourseDetail(courseCode))
    }, [])
    return (
        <div className='courseDetail'>
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
                            <img src='https://picsum.photos/200/300' alt='' />
                        </div>
                        <div className='detail-teacher'>Giảng viên <p>{courseDetail.nguoiTao?.hoTen}</p></div>
                        <div className='detail-catalog'>Danh mục <p>{courseDetail.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p></div>
                        <Button className='detail-add' variant="contained">Thêm vào giỏ hàng</Button>
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
    )
}
export default React.memo(CourseDetail)
