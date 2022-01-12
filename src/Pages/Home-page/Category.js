import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Category() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div id='category' className='category'>
            <h2 className='title'>Các khóa học</h2>
            <Slider {...settings}>
                <div>
                    <div className='category-item' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqe4ogtawyPDlZ9vZLmh5T3kAxw_EJwuaZQ&usqp=CAU)' }}>
                        <div className='item-overlay'></div>
                        <h2 className='item-title'>Lập trình BackEnd</h2>
                    </div>
                </div>
                <div>
                    <div className='category-item' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSws7jCqMaYlGlw5ntJ9roJ9j3dgPuJWVp7fDZUv1WL5_E8N8MQfSxVAwPP3vkOb4wpTmA&usqp=CAU)' }}>
                        <div className='item-overlay'></div>
                        <h2 className='item-title'>Thiết kế Web</h2>
                    </div>
                </div>
                <div>
                    <div className='category-item' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEZi_lGdT_EXPC76LzsBAwblns8TFCqvBkqsil9-5lonECOZQkV4W3WvDX2WshvQm7av0&usqp=CAU)' }}>
                        <div className='item-overlay'></div>
                        <h2 className='item-title'>Lập trình Mobile</h2>
                    </div>
                </div>
                <div>
                    <div className='category-item' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB0z8zW3Y55FHKzLth1MSMCcgGeSLl6MKWf8RMeufewZlR3TpnH4qKVjaGORKdJScR3lk&usqp=CAU)' }}>
                        <div className='item-overlay'></div>
                        <h2 className='item-title'>Lập trình FrontEnd</h2>
                    </div>
                </div>
                <div>
                    <div className='category-item' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7A5L1YGTEQqy4Fre991_5kLJYmngvSbprQmvauzlMmHmFFxLStntJKLieSpWSVGH8P0&usqp=CAU)' }}>
                        <div className='item-overlay'></div>
                        <h2 className='item-title'>Lập trình FullStack</h2>
                    </div>
                </div>
                <div>
                    <div className='category-item' style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEwWGy5RJtQFqjF0G2MWszF6Qk0AkIddgnPIf5X9TpTpx6VjAtwUc8y6mV5R1RBZBmTU8&usqp=CAU)' }}>
                        <div className='item-overlay'></div>
                        <h2 className='item-title'>Tư duy lập trình</h2>
                    </div>
                </div>
            </Slider>

        </div>
    )
}
