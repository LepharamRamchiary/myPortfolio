import React from 'react'
import "./FooterStyle.css"

import { FaHome, FaMailBulk, FaPhone, FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Gogamukh, Dhemaji</p>
                            <p>Assam</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} /> 91013 18307</h4>
                    </div>
                    <div className='email'>
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} /> lepharamchiary@gmail.com</h4>
                    </div>
                </div>

                <div className='right'>
                    <h4>About Me</h4>
                    <p>LEPHARAM RAMCHIARY, a passionate web developer 
                        fresher, adept in HTML, CSS, and JavaScript,
                         eager to craft innovative, user-friendly 
                         interfaces.</p>
                    <div className='social'>
                        <FaLinkedinIn size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer