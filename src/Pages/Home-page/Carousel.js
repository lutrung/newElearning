import React from 'react'
import banner from '../../Assets/Images/banner.jpg';

export default function Carousel() {
    return (
        <div className='carousel' style={{ backgroundImage: `url(${banner})` }}>
            <div className='carousel-overlay'></div>
            <div className='carousel-body'>
                <div className='carousel-content'>
                    <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
                    <p>Học thật, dự án thật, việc làm thật <br />Trở thành lập trình chuyên nghiệp tại LT-Academy</p>
                    <a href='/'>Xem khóa học</a>
                </div>
            </div>
        </div>
    )
}
