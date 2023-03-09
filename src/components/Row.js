import React, { useEffect, useState } from 'react'
import '../assets/styles/Row.css'
import axios from "../config/axios"


function Row({ title, fetchUrl, isLarge = false }) {

    const baseUrl = "http://image.tmdb.org/t/p/w500"

    const [movies, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovie(request.data.results)
        }
        fetchData();
    }, [fetchUrl])


    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row__posters'>
                {movies.map(movie => (
                    <img className={`row__poster ${isLarge && 'row__largePoster'}`} key={movie.id}
                        src={`${baseUrl}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row