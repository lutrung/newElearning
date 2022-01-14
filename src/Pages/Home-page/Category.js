import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { getCourseCatalog } from '../../Redux/Action/CourseAction';
function Category() {
    const courseCatalog = useSelector(state => state.CourseManagerReducer.courseCatalog)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCourseCatalog())
    }, [dispatch])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='category wow fadeIn' data-wow-delay="0.5s">
            <h2 className='title wow slideInLeft'>Các khóa học</h2>
            <Slider {...settings} className='wow slideInRight'>
                {courseCatalog?.map((item, index) => {
                    return <div key={index}>
                        <div className='category-item' style={{ backgroundImage: `url(https://picsum.photos/id/${index + 50}/200/300)` }}>
                            <div className='item-overlay'></div>
                            <h2 className='item-title'>{item.tenDanhMuc}</h2>
                        </div>
                    </div>
                })}
            </Slider>
            <NavLink to='/khoahoc' className='more'>
                Xem tất cả
            </NavLink>
        </div>
    )
}
export default React.memo(Category)