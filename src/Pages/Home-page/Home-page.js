import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Button from '@mui/material/Button'
import React, { useEffect, useState } from 'react'
import { WOW } from 'wowjs'
import About from './About'
import Carousel from './Carousel'
import Category from './Category'
import Count from './Count'
import Review from './Review'

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
    useEffect(() => {
        const wow = new WOW({
            offset: 100,
            mobile: false,
            live: true
        })
        wow.init();
    }, [])
    window.addEventListener('scroll', toggleVisible);
    return (
        <div className='App'>
            <Carousel />
            <About />
            <Count />
            <Category />
            <Review />
            <Button id='backToTop' variant='contained' onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
                <KeyboardArrowUpIcon className='icon' />
            </Button>
        </div>
    )
}
