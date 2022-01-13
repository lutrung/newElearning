import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React, { Fragment, useState } from 'react';
import logo from '../../Assets/Images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    const [onScroll, setOnScroll] = useState(false)
    const toggleOnScroll = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 100) {
            setOnScroll(true)
        } else {
            setOnScroll(false)
        }
    };

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
                        <li><a className='list-item' href='#about'><BadgeOutlinedIcon className='item-icon' />Giới Thiệu</a></li>
                        <li><a className='list-item' href='#category'><LibraryBooksOutlinedIcon className='item-icon' />Khóa Học</a></li>
                        <li><a className='list-item' href='#footer'><LocalPhoneOutlinedIcon className='item-icon' />Liên Hệ</a></li>
                        <li><a className='list-item item-user' href='/'>Đăng nhập/Đăng ký</a></li>
                    </ul>
                </div>
                <div className='header-menu-mobile'>
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
                                <a href='#about' className='nav__mobile-link'>Giới Thiệu</a>
                            </li>
                            <li className='menu-item'>
                                <a href='#category' className='nav__mobile-link'>Khóa Học</a>
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
