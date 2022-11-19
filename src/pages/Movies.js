import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { useGlobalContext } from '../context'

const Movies = () => {
    const { fetchData } = useGlobalContext()
    const [data, setData] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({})

    useEffect(() => {
        const syncData = async () => {
            const result = await fetchData(`/genre/movie/list`)
            setData(result)
        }
        syncData()
    }, [])

    if (data.length == 0) {
        return <Loader />
    }
    if (!data.success) {
        <h2 className='text-center color-primary'>Something went wrong. Please try again later</h2>
    }
    return (
        <section className='row g-3 mt-4'>
            {
                data.genres.map((genre, index) => {
                    return (
                        <div className='col-6 col-md-4 col-lg-3 col-xl-2' key={genre.id}>
                                <Link to={`/movies/genre/${genre.id}/${genre.name}`}
                                    onClick={() => setSearchParams({ name: genre.name, page: 1 })}
                                    className='genre-card d-flex align-items-center justify-content-center 
                                        rounded-2 text-decoration-none color-primary fs-4 text-center select-none'
                                    style={{ backgroundColor: index % 2 == 0 ? '#0E7490' : '#171E31' }}
                                    key={genre.id}>
                                    {genre.name}
                                </Link>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default Movies