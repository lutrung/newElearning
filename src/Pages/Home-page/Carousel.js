import React from 'react'
import banner from '../../Assets/Images/banner.jpg';

function Carousel() {
    return (
        <div className='carousel' style={{ backgroundImage: `url(${banner})` }}>
            <div className='carousel-overlay'></div>
            <div className='carousel-body'>
                <div className='carousel-content wow slideInRight'>
                    <h1>KHỞI ĐẦU SỰ NGHIỆP CỦA BẠN</h1>
                    <p>Học thật, dự án thật, việc làm thật <br />Trở thành lập trình chuyên nghiệp tại LT-Academy</p>
                    <a href='#category'>Xem khóa học</a>
                    <div id='about'></div>
                </div>
            </div>
        </div>
    )
}
export default React.memo(Carousel)
