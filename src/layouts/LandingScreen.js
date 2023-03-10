import React from 'react'
import "../assets/styles/LandingScreen.css"
import logo from "../assets/images/Logonetflix.png"

function LandingScreen() {
    return (
        <header className='landing'>
            <div className='landingScreen__showcaseTop'>
                <img src={logo} alt='Netflix Logo' />
                <a href='#' className='btn btn__rounded'>Sing In</a>
            </div>
            <div className='landingScreen__content'>
                <h1>See what's next</h1>
                <p>Whatch anywhere. Cancel anytime.</p>
                <a href='#' className='btn btn__xl'>
                    Whatch Free For 30 Days 
                </a>

            </div>

        </header>
    )
}

export default LandingScreen