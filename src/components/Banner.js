import React from 'react'
import '../assets/styles/Banner.css'

function Banner() {

  function truncate(string, end){
    return string?.length > end ? string.substr(0, end - 1) + '...' : string
  };

  return (
    <header className='banner'>
        <div className='banner__content'>
            <h1 className='banner__title'>Movie Name</h1>
            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className='banner__description'>{truncate('Description', 150)}</h1>
        </div>
        <div className='banner__fade'/>
    </header>
  )
}

export default Banner