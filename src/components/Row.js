import React, { useEffect, useState } from 'react'
import '../assets/styles/Banner.css'
import axios from "../config/axios"
import requests from '../middlewares/Request';

function Row({title,  fetchUrl, isLarge = false}) {

    const [movies, setMovie] = useState([]);

  useEffect(() =>{
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results)
    }
    fetchData(); 
  },[fetchUrl])


  console.log(movies);
  return (
    <div className='row'>
        <h2>{title}</h2>
    </div>
  )
}

export default Row