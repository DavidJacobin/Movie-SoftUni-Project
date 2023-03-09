import React, { useEffect, useState } from 'react'
import '../assets/styles/Banner.css'
import axios from "../config/axios"
import requests from '../middlewares/Request';

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(() =>{
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ])
    }
    fetchData(); 
  },[])

  

  function truncate(string, end){
    return string?.length > end ? string.substr(0, end - 1) + '...' : string
  };

  return (
    <header className='banner' style={
        {
            backgroundSize: 'cover',
            backgroundImage: `url('http://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
            }}
        >
            <div className='banner__content'>
                <h1 className='banner__title'>{movie?.title || movie?.name}</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{ truncate(movie.overview, 150)}
                 </h1>
            </div>
            
            <div className='banner--fadeBottom'/>

    </header>
  )
}

export default Banner