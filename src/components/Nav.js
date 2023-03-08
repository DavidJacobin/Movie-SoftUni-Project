import React, { useEffect, useState } from 'react'
import "../assets/styles/Nav.css"
import logo from '../assets/images/Logonetflix.png'
import avatar from '../assets/images/avatar.jpg'

function Nav() {

    const [show , handleShow] = useState(false)

    const transitionBar = () => {
        if (window.scrollY > 100){
            handleShow(true)
        }else{
            handleShow(false)
        }
    };

    useEffect(() =>{
        window.addEventListener('scroll', transitionBar)
        return () => window.removeEventListener('scroll', transitionBar)
    }, [])
 
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img className='nav__logo' src={logo} alt='Netflix Logo' />

                <img className='nav__avatar' src={avatar} alt='Avater Logo' />
            </div>
        </div >
    )
}

export default Nav