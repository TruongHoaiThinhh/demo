import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import Header from '../Header'
import Categories from '../Categories'
import ProductsDisplay from '../ProductsDisplay'
import BrandNew from '../BrandNew'
import Offer from '../Offer'
import Testimoial from '../Testimoial'
import Brand from '../Brand'
import Footer from '../Footer'

import '../../index.css'
export const ThemeContext = createContext('white');


function Home() {
    const [showGoToTop, setShowGoToTop] = useState(false);
    const [total, setTotal] = useState(0);

    const handleIncrease = useCallback(() => {
        return setTotal(total + 1)
    }, [total])

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
            } else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
    })

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    return (
        <div>
            <Header total={total}></Header>
            <Categories></Categories>
            <ProductsDisplay onIncrease={handleIncrease}></ProductsDisplay>
            <BrandNew></BrandNew>
            <Offer></Offer>
            <Testimoial></Testimoial>
            <Brand></Brand>
            <Footer></Footer>

            {showGoToTop && (<button id='btnTop' onClick={topFunction} ><i class="fa-solid fa-arrow-up"></i></button>)}
        </div>
    )
}

export default Home
