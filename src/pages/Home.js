import React from 'react'
import TopRated from '../components/Home/TopRated'
import Trending from '../components/Home/Trending'
import Popular from '../components/Home/Popular'

const Home = () => {
    return (
        <section>
            {/* MOVIES */}
            <Trending type={'movie'} />
            <Popular type={'movie'} />
            <TopRated type={'movie'} />
            {/* TV SERIES */}
            <Trending type={'tv'} />
            <Popular type={'tv'} />
            <TopRated type={'tv'} />
        </section>
    )
}

export default Home
