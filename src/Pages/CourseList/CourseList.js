import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import banner from '../../Assets/Images/banner.jpg'
import { TextField, MenuItem } from '@mui/material';
import { getCourseList } from '../../Redux/Action/CourseAction';
const sortBy = [
    {
        value: 1,
        label: 'Tên A-Z',
    },
    {
        value: 2,
        label: 'Giá tăng dần',
    },
    {
        value: 3,
        label: 'Giá giảm dần',
    }

];
export default function CourseList() {
    const dispatch = useDispatch()
    const courseList = useSelector(state => state.CourseManagerReducer.courseList)
    // console.log(courseList[1].nguoiTao.hoTen);
    useEffect(() => {
        dispatch(getCourseList())
    }, [])
    return (
        <div className='courseList'>
            <div className='courseList-banner' style={{ backgroundImage: `url(${banner})` }}>
                <div className='overlay'></div>
                <div className='banner-content'>
                    <h1 className='content-title'>Các khóa học của chúng tôi</h1>
                </div>
            </div>
            <div className='courseList-container'>
                <div className='courseList-searchSort'>
                    <TextField
                        className='courseList-search'
                        id="filled-basic"
                        label="Tìm kiếm"
                        variant="outlined"
                    // onChange={onChange}
                    />
                    <TextField
                        className='courseList-sort'
                        id="filled-select-currency"
                        select
                        label="Sắp xếp"
                        // onChange={onSortBy}
                        variant="outlined"
                    >
                        {sortBy.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div className='courseList-body'>
                    <div className='body-products'>
                        {courseList?.slice(21, 35).map((item, index) => {
                            return <a key={index} href='/' className='products-item'>
                                <img className='item-img' alt='' src={item.hinhAnh} onError='https://picsum.photos/50/50/' />
                                <div className='item-detail'>
                                    <div className='detail-user'>
                                        <img className='user-img' alt='' src='https://picsum.photos/50/50' style={{ borderRadius: '50%' }} />
                                        {console.log(item.nguoiTao)}
                                        <h4>{item.nguoiTao.hoTen}</h4>
                                    </div>
                                    <div className='detail-info'>
                                        <h3>{item.tenKhoaHoc}</h3>
                                        <div className='info-bottom'>
                                            <div className='info-name'>
                                                <p>Học viên</p>
                                                <span>{item.soLuongHocVien}</span>
                                            </div>
                                            <div className='info-views'>
                                                <p>Lượt xem</p>
                                                <span>{item.luotXem}</span>
                                            </div>
                                            <div className='info-price'>
                                                <p>Giá</p>
                                                <span>50</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        })}
                    </div>
                    <div className='body-catalog'>

                    </div>
                </div>
            </div>
        </div >
    )
}
