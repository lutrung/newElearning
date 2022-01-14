import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Review() {
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
                            <img className='user-avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpPGoxCJrh8O044hXPa8cafY-YORCeCSXvaA&usqp=CAU' alt='' />
                            <p className='user-name'>Chucky</p>
                        </div>
                    </div>
                    <div className='review-item'>
                        <div className='item-content'>
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                        </div>
                        <div className='item-user'>
                            <div className='user-avatar'>
                                <img src='https://vcdn-giaitri.vnecdn.net/2019/03/31/set-top-annabelle-comes-home-C-3206-1248-1554002819.jpg' alt='' />
                            </div>
                            <p className='user-name'>Annabella</p>
                        </div>
                    </div>
                    <div className='review-item'>
                        <div className='item-content'>
                            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it"
                        </div>
                        <div className='item-user'>
                            <img className='user-avatar' src='https://vcdn1-giaitri.vnecdn.net/2018/09/10/settopvideothenungioithieuvutr-9940-7895-1536550930.jpg?w=900&h=540&q=100&dpr=1&fit=crop&s=Imav9EEwYy8dqBRIFOLTYg' alt='' />
                            <p className='user-name'>Valak</p>
                        </div>
                    </div>
                </Slider>
                <iframe className='wow fadeInUp' width={960} height={550} title="video" src="https://www.youtube.com/embed/686mNAJVXzA" frameBorder={0} allowFullScreen />
            </div>
        </div>
    )
}
export default React.memo(Review)
