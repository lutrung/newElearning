import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Review() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className='review'>
            <div className='review-container'>
                <h1 className='review-title wow slideInLeft'>Học viên nói gì về LT-Academy</h1>
                <Slider {...settings} className='wow slideInRight'>
                    <div className='review-item'>
                        <div className='item-content'>
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                        </div>
                        <div className='item-user'>
                            <img className='user-avatar' src='https://picsum.photos/75/75' alt='' />
                            <p className='user-name'>Iron Man</p>
                        </div>
                    </div>
                    <div className='review-item'>
                        <div className='item-content'>
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                        </div>
                        <div className='item-user'>
                            <img className='user-avatar' src='https://picsum.photos/75/75' alt='' />
                            <p className='user-name'>Thor</p>
                        </div>
                    </div>
                    <div className='review-item'>
                        <div className='item-content'>
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                        </div>
                        <div className='item-user'>
                            <img className='user-avatar' src='https://picsum.photos/75/75' alt='' />
                            <p className='user-name'>Captain America</p>
                        </div>
                    </div>
                </Slider>
                <iframe className='wow fadeInUp' width={960} height={550} title="video" src="https://www.youtube.com/embed/686mNAJVXzA" frameBorder={0} allowFullScreen />
            </div>
        </div>
    )
}
