import React, { useState } from 'react'
import About from './About'
import Carousel from './Carousel'
import Category from './Category'
import Count from './Count'
import Button from '@mui/material/Button';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Review from './Review'
import Video from './Video'

export default function HomePage() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700) {
            setVisible(true)
        }
        else if (scrolled <= 700) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <div className='App' style={{ paddingBottom: 500 }}>
            <Carousel />
            <About />
            <Count />
            <Category />
            <Review />
            <Video />
            <Button id='backToTop' variant='contained' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
                <KeyboardArrowUpIcon className='icon' />
            </Button>
        </div>
    )
}
