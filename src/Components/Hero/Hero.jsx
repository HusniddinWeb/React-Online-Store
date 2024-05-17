import React from 'react'
import "./Hero.css"
import hand_icon from '../Assets/hand-icon.png'
import shop_fon from '../Assets/shop-fon.png'

import { MdArrowRightAlt } from "react-icons/md";



function Hero() {
  return (
    <div className='hero'>

        <div className="hero-left">

            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="" className='hand-icon' />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <MdArrowRightAlt />
            </div>

        </div>

        <div className="hero-right">
            <img src={shop_fon} alt="" />
        </div>

    </div>
  )
}

export default Hero