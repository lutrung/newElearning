import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React, { Fragment, useState } from 'react';
import logo from '../../Assets/Images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ClearIcon from '@mui/icons-material/Clear';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_ITEM } from '../../Redux/Const/Course-Const';
export default function Header() {
    const dispatch = useDispatch()
    const listItemAdd = useSelector(state => state.CourseManagerReducer.listItemAdd)
    const [onScroll, setOnScroll] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const onOpenCart = () => {
        setOpenCart(!openCart)
    }

    const toggleOnScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setOnScroll(true)
        } else {
            setOnScroll(false)
        }
    };
    const deleteItemAdd = (codeCourse) => {
        dispatch({
            type: DELETE_ITEM,
            codeCourse: codeCourse
        })
    }
    const renderListItemAdd = () => {
        if (listItemAdd.length !== 0) {
            return listItemAdd?.map((item, index) => {
                return (
                    <div key={index} className='itemAdd-item'>
                        <img className='itemAdd-avatar' src={item.hinhAnh} alt='' onError={({ currentTarget }) => {
                            currentTarget.onerror = null;
                            currentTarget.src = 'https://void-of-course.com/wp-content/uploads/2020/08/Online-Courses.jpg';
                        }} />
                        <div className='itemAdd-detail'>
                            <h3 className='detail-name'>{item.biDanh}</h3>
                            <p className='detail-catagory'>{item.danhMucKhoaHoc?.tenDanhMucKhoaHoc}</p>
                            <span className='detail-price'>$100</span>
                            <ClearIcon className='detail-clear' onClick={() => deleteItemAdd(item.maKhoaHoc)} />
                        </div>
                    </div>
                )
            })
        } else {
            return <p className='itemAdd-empty'>Không có khóa học nào trong giỏ !</p>
        }
    }
    window.addEventListener('scroll', toggleOnScroll);
    return (
        <div className='header' style={{ backgroundColor: `${onScroll ? '#000' : '#00000093'}` }}>
            <div className='header-container'>
                <div className='header-logo'>
                    <a href='/' >
                        <img src={logo} alt='logo' />
                    </a>
                </div>
                <div className='header-menu'>
                    <ul className='menu-list'>
                        <li><a className='list-item' href='/'><HomeOutlinedIcon className='item-icon' />Trang chủ</a></li>
                        <li><a className='list-item' href='/#about'><BadgeOutlinedIcon className='item-icon' />Giới Thiệu</a></li>
                        <li><a className='list-item' href='/#category'><LibraryBooksOutlinedIcon className='item-icon' />Khóa Học</a></li>
                        <li><a className='list-item' href='#footer'><LocalPhoneOutlinedIcon className='item-icon' />Liên Hệ</a></li>
                        <li className='item-add'>
                            <Button variant="contained" className='shoppingCart' onClick={onOpenCart}><ShoppingCartIcon /></Button>
                            <div style={{ display: `${openCart ? 'flex' : 'none'}` }} className='list-itemAdd'>
                                <div className='itemAdd-list'>
                                    {renderListItemAdd()}
                                </div>
                                <Button className='goToCart' variant="contained">ĐI TỚI GIỎ HÀNG</Button>
                            </div>
                            <div className='number-item'>{listItemAdd.length}</div>
                        </li>
                        <li><a className='list-item item-user' href='/'>Đăng nhập/Đăng ký</a></li>
                    </ul>
                </div>
                <div className='header-menu-mobile'>
                    <div className='item-add'>
                        <Button variant="contained" className='shoppingCart' onClick={onOpenCart}><ShoppingCartIcon /></Button>
                        <div style={{ display: `${openCart ? 'flex' : 'none'}` }} className='list-itemAdd'>
                            <div className='itemAdd-list'>
                                {renderListItemAdd()}
                            </div>
                            <Button className='goToCart' variant="contained">ĐI TỚI GIỎ HÀNG</Button>
                        </div>
                        <div className='number-item'>0</div>
                    </div>
                    <label htmlFor='nav-mobile-input' >
                        <MenuIcon className='menu-icon' />
                    </label>
                    <input hidden type='checkbox' className='nav__input' id='nav-mobile-input' />
                    <label htmlFor='nav-mobile-input' className='menu-overlay'></label>
                    <nav className='nav__mobile'>
                        <div className='menu-login'>
                            <div className='login-left'>
                                <Fragment>
                                    <i className="fa fa-user-circle login-icon"></i>
                                    <a href='/dangnhap' className='login-user'>Đăng nhập</a></Fragment>
                            </div>
                            <label htmlFor='nav-mobile-input'><i className="fa fa-angle-right login-arrow"></i></label>

                        </div>
                        <ul className='menu-list'>
                            <li className='menu-item'>
                                <a href='/#about' className='nav__mobile-link'>Giới Thiệu</a>
                            </li>
                            <li className='menu-item'>
                                <a href='/#category' className='nav__mobile-link'>Khóa Học</a>
                            </li>
                            <li className='menu-item'>
                                <a href='#footer' className='nav__mobile-link'>Liên Hệ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}
