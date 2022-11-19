import React from 'react'
import TopRated from '../components/Home/TopRated'
import Trending from '../components/Home/Trending'
import Upcoming from '../components/Home/Upcoming'

const Home = () => {
    return (
        <section>
            {/* MOVIES */}
            <Trending type={'movie'} />
            <Upcoming type={'movie'} />
            <TopRated type={'movie'} />
            {/* TV SERIES */}
            <Trending type={'tv'} />
            <TopRated type={'tv'} />
        </section>
    )
}

export default Home