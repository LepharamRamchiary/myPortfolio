import React from 'react'
import "./AboutContentStyle.css"
import { Link } from 'react-router-dom'

import React1 from "../assets/react1.png"
import React2 from "../assets/react2.jpg"

const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
                <h1>Who Am I?</h1>
                <p>I'm a fresh React frontend developer, I embark on an exhilarating journey, brimming with passion and determination. Eager to learn, grow, and craft captivating user experiences that leave a lasting impression. </p>
                <Link to="/contact">
                    <button className='btn'>Contact</button>
                </Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React1 } alt='recat_image' className='img' />
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React2 } alt='recat_image' className='img' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent