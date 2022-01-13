import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
export default function About() {
    return (
        <div id='about' className='about'>
            <div className='about-container'>
                <h1 className='about-title wow slideInLeft'>Điểm ưu việt chỉ có ở LT-Academy</h1>
                <p className='about-detail wow slideInRight'>LT-Academy là học viện tiên phong tại Việt Nam áp dụng phương pháp đào tạo Active Learning và Flipped Learning thông qua các dự án thực tiễn trong lĩnh vực đào tạo CNTT. Học viên sẽ đóng vai trò là một Scrum member trong mô hình Agile để trở thành một lập trình chuyên nghiệp, đáp ứng mọi nhu cầu tuyển dụng của Doanh nghiệp.</p>
                <div className='about-card'>
                    <div className='card-item wow fadeInDown'>
                        <MapOutlinedIcon className='item-icon' />
                        <h2 className='item-title' >Học theo lộ trình có định hướng rõ ràng</h2>
                        <p className='item-detail' >LT-Academy sẽ định hướng và đưa ra các lộ trình học tập cho nghề bạn theo đuổi. Phát triển năng lực và niềm đam mê cảm hứng lập trình của bạn.</p>
                    </div>
                    <div className='card-item wow fadeInUp'>
                        <LightModeOutlinedIcon className='item-icon' />
                        <h2 className='item-title' >Nền tảng, tư duy, cốt lõi trong lập trình</h2>
                        <p className='item-detail' >LT-Academy cung cấp những nền tảng, giá trị tư duy cốt lõi nhất trong lập trình. Bạn sẽ tự tin trước sự thay đổi của công nghệ và môi trường làm việc.</p>
                    </div>
                    <div className='card-item wow fadeInDown'>
                        <BarChartOutlinedIcon className='item-icon' />
                        <h2 className='item-title' >Mài giũa bạn qua kinh nghiệm dự án thực tế</h2>
                        <p className='item-detail' >Đội ngũ giảng viên và các mentor là những người dày dạn kinh nghiệm qua các dự án thực tế tại các công ty lớn sẽ truyền đạt những kinh nghiệm "máu lửa" cho bạn.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
