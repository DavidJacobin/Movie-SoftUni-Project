import React from 'react'
import '../assets/styles/HomeScreen.css'
import Banner from '../components/Banner'
import Nav from '../components/Nav'
import Row from '../components/Row'
import requests from '../middlewares/Request'

function HomeScreen() {
  return (
    <div className='homeScreen'>
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row
        title="Trending Now"fetchUrl={requests.fetchTrending}/>
      <Row
        title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row
        title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row
        title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    </div>
  )
}

export default HomeScreen