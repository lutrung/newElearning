import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { MenuItem, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import PaginationList from 'react-pagination-list';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';
import banner from '../../Assets/Images/banner.jpg';
import { getCourseCatalog, getCourseList } from '../../Redux/Action/CourseAction';
import { ADD_ITEM } from '../../Redux/Const/Course-Const';

const sortBy = [
    {
        value: 1,
        label: 'Giá tăng dần',
    },
    {
        value: 2,
        label: 'Giá giảm dần',
    }
];
function CourseList() {
    const dispatch = useDispatch()
    const [keySearch, setKeySearch] = useState('')
    const { courseList, courseCatalog } = useSelector(state => state.CourseManagerReducer)
    const userSignIn = useSelector(state => state.UserManagerReducer.userSignIn)
    const [user, setUser] = useState({})
    const [keyCatalog, setKeyCatalog] = useState('Tất cả')
    const [showCatalog, setShowCatalog] = useState(false)
    const onSelectCatelog = (index) => {
        let listCatelog = document.querySelectorAll('.catalog-item')
        listCatelog.forEach((item) => {
            item.classList.remove('active')
        })
        listCatelog[index].classList.add('active')
        setKeyCatalog(listCatelog[index].innerHTML)
        if (showCatalog) {
            document.querySelector('.catalog-list').style.height = '0px'
            setShowCatalog(false)
        }
    }
    const addItem = (item) => {
        if (user.taiKhoan) {
            dispatch({
                type: ADD_ITEM,
                item: item
            })
        } else {
            Swal.fire('Thông báo', 'Bạn chưa đăng nhập !', 'error')
        }
    }
    const onSearch = (event) => {
        let newKey = event.target.value
        setKeySearch(newKey)
    }
    const onShowHideCatalog = () => {
        if (showCatalog) {
            document.querySelector('.catalog-list').style.height = '0px'
        } else {
            document.querySelector('.catalog-list').style.height = '280px'
        }
        setShowCatalog(!showCatalog)
    }
    useEffect(() => {
        if (userSignIn?.taiKhoan) {
            setUser(userSignIn)
        }
    }, [userSignIn]);
    useEffect(() => {
        dispatch(getCourseCatalog())
        dispatch(getCourseList())
    }, [dispatch])
    return (
        <div className='courseList'>
            <div className='courseList-banner' style={{ backgroundImage: `url(${banner})` }}>
                <div className='overlay'></div>
                <div className='banner-content'>
                    <h1 className='content-title'>Danh sách các khóa học</h1>
                </div>
            </div>
            <ToastContainer />
            <div className='courseList-container'>
                <div className='courseList-searchSort'>
                    <TextField
                        className='courseList-search'
                        id="filled-basic"
                        label="Tìm kiếm"
                        variant="outlined"
                        onChange={onSearch}
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
                        <PaginationList
                            data={courseList?.filter((item) => {
                                if (keyCatalog !== 'Tất cả' && keyCatalog !== '') {
                                    return item.danhMucKhoaHoc.tenDanhMucKhoaHoc === keyCatalog
                                } else {
                                    return item
                                }
                            }).filter((item) => {
                                return item.tenKhoaHoc.toLowerCase().indexOf(keySearch) !== -1
                            })}
                            pageSize={6}
                            renderItem={(item, index) => (
                                <div key={index} className='products-item'>
                                    <img className='item-img' alt='' src={item.hinhAnh} onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = `https://picsum.photos/id/${index}/200/300`;
                                    }} />
                                    <div className='item-detail'>
                                        <div className='detail-info'>
                                            <div className='info-top'>
                                                <h3>{item.tenKhoaHoc}</h3>
                                                <span>Danh mục: {item.danhMucKhoaHoc.maDanhMucKhoahoc}</span>
                                            </div>
                                            <div className='info-bottom'>
                                                <div className='bottom-top'>
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
                                                        <span>...</span>
                                                    </div>
                                                </div>
                                                <div className='bottom-action'>
                                                    <NavLink to={'/chitiet/' + item.maKhoaHoc}><Button className='btn-action' variant="outlined">Chi tiết</Button></NavLink>
                                                    <Button className='btn-action' variant="contained" onClick={() => addItem(item)}><ShoppingCartOutlinedIcon /> Thêm vào giỏ</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                    <div className='body-catalog'>
                        <h2 className='catalog-title'>Danh mục <i className={`fas fa-caret-${showCatalog ? 'up' : 'down'} catalog-down`} onClick={onShowHideCatalog}></i></h2>
                        <ul className='catalog-list'>
                            <li key={0} className='catalog-item active' onClick={() => onSelectCatelog(0)}>Tất cả</li>
                            {courseCatalog?.map((item, index) => {
                                return <li className='catalog-item' key={index + 1} onClick={() => onSelectCatelog(index + 1)}>{item.tenDanhMuc}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default React.memo(CourseList)