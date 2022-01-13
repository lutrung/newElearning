import React from 'react'
export default function Count() {
    return (
        <div className='count' >
            <div className='count-background' style={{ backgroundImage: `url(https://cyberlearn.vn/wp-content/uploads/2020/03/funfact_bg.png)` }}>
                <div className='count-container'>
                    <div className='count-item wow flipInX' data-wow-duration="2s">
                        <div className='count-number'>5014</div>
                        <h2 className='count-name'>Khóa học & videos</h2>
                    </div>
                    <div className='count-item wow flipInY' data-wow-duration="2s">
                        <div className='count-number '>3890</div>
                        <h2 className='count-name'>Học viên online</h2>
                    </div>
                    <div className='count-item wow flipInX' data-wow-duration="2s">
                        <div className='count-number '>15</div>
                        <h2 className='count-name'>Năm kinh nghiệm</h2>
                    </div>
                    <div className='count-item wow flipInY' data-wow-duration="2s">
                        <div className='count-number '>54</div>
                        <h2 className='count-name'>Đối tác</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
