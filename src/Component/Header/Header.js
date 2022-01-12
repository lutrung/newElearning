import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import React, { useState } from 'react';
import logo from '../../Assets/Images/logo.png';
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
                        <li><a className='list-item' href='/'><LocalPhoneOutlinedIcon className='item-icon' />Liên Hệ</a></li>
                        <li><a className='list-item item-user' href='/'>Đăng nhập/Đăng ký</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
