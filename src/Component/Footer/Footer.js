import React from 'react'
export default function Footer() {
    return (
        <div id='footer' className='footer'>
            <div className='footer-container'>
                <div className='footer-left'>
                    <h1 className='left-title'>NHẬN TIN SỰ KIỆN & KHUYẾN MÃI</h1>
                    <p className='left-detail'>LT-ACademy sẽ gởi các khóa học trực tuyến & các chương trình CyberLive hoàn toàn MIỄN PHÍ và các chương trình KHUYẾN MÃI hấp dẫn đến các bạn.</p>
                    <form className="left-form">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="your.address@email.com" />
                        <button type="submit" className="btn btn-primary mt-3">ĐĂNG KÝ NHẬN ƯU ĐÃI</button>
                    </form>
                </div>
                <div className='footer-center'>
                    <h1 className='center-title'>HỆ THỐNG TRUNG TÂM</h1>
                    <div className='center-address'>
                        <div className='center-item'>
                            <h3>Trụ sở: 112 Cao Thắng, Quận 3</h3>
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: Tầng 5, toà nhà Suri, 112 Cao Thắng, Quận 3, TPHCM</p>
                        </div>
                        <div className='center-item'>
                            <h3>459 Sư Vạn Hạnh, Quận 10</h3>
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: Tầng 2, toà nhà WinHome, 459 Sư Vạn hạnh, Quận 10, TPHCM</p>
                        </div>
                        <div className='center-item'>
                            <h3>56 Lê Cảnh Tuân, Tân Phú</h3>
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 56 Lê Cảnh Tuân, Tân Phú, TPHCM</p>
                        </div>
                        <div className='center-item'>
                            <h3>82 Ung Văn Khiêm, Bình Thạnh</h3>
                            <p>Hotline: 096.105.1014 – 077.886.1911</p>
                            <p>Địa chỉ: 82 Ung Văn Khiêm, Bình Thạnh, TPHCM</p>
                        </div>
                    </div>
                </div>
                <div className='footer-right'>
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5096836449284!2d106.67764925098272!3d10.772220662177789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fca39e3b493%3A0x865af6a617c57d82!2sCyberSoft%20Academy!5e0!3m2!1svi!2s!4v1642042493460!5m2!1svi!2s" width='100%' height='100%' frameBorder={0} allowFullScreen loading="lazy"></iframe>

                </div>
            </div>
        </div>
    )
}
