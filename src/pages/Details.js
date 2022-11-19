import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Loader from '../components/Loader'
import { useGlobalContext } from '../context'
import { AiFillStar } from 'react-icons/ai'

const Details = () => {
    const { fetchData } = useGlobalContext()
    const { type, id } = useParams()
    const [data, setData] = useState([])
    const [cast, setCast] = useState([])

    useEffect(() => {
        // GET DETAILS
        const syncData = async () => {
            if (type == 'movies') {
                const result = await fetchData(`/movie/${id}`)
                setData(result)
            } else {
                const result = await fetchData(`/tv/${id}`)
                setData(result)
            }
        }
        syncData()
        // GET CAST
        const fetchCast = async () => {
            if (type == 'movies') {
                const result = await fetchData(`/movie/${id}/credits`)
                setCast(result.cast)
            } else {
                const result = await fetchData(`/tv/${id}/credits`)
                setCast(result.cast)
            }
        }
        fetchCast()
    }, [])
    
    if (data.length == 0 || cast.length == 0) {
        return <Loader />
    }
    if (!data.success || !cast.success) {
        <h2 className='text-center color-primary'>Something went wrong. Please try again later</h2>
    }
    return (
        <section className='details-page d-flex flex-column flex-lg-row align-items-center align-items-lg-start mt-5 color-primary w-100'>
            <img className='poster rounded-2 me-0 me-lg-5 mb-5 mb-lg-0 select-none' src={`https://image.tmdb.org/t/p/original//${data.poster_path}`} alt="poster" />
            <div className='d-flex flex-column w-100'>
                <h1 className='fw-normal fs-1'>{type == 'movies' ? data.title : data.name}</h1>
                <h5 className='fw-normal fs-5 color-secondary'>{data.tagline}</h5>
                <br />
                <span className='d-flex align-items-center'>
                    <AiFillStar className='fs-4 me-3' />
                    <h2 className='fs-1 fw-normal'>{(data.vote_average / 2).toFixed(1)}/5</h2>
                </span>
                <br />
                <div className='d-flex justify-content-between'>
                    {type == 'movies'
                        ? <span>
                            <h5 className='color-secondary fs-5'>Length</h5>
                            <h5 className='fs-5'>{data.runtime} min.</h5>
                        </span>
                    : null    
                }
                    <span>
                        <h5 className='color-secondary fs-5'>Language</h5>
                        <h5 className='fs-5 text-capitalize'>{data.spoken_languages[0].name}</h5>
                    </span>
                    <span>
                        <h5 className='color-secondary'>Year</h5>
                        <h5 className='fs-5'>{type == 'movies' ? data.release_date.substring(0, 4) : data.first_air_date.substring(0, 4)}</h5>
                    </span>
                    <span>
                        <h5 className='color-secondary'>Status</h5>
                        <h5 className='fs-5'>{data.status}</h5>
                    </span>
                </div>
                <br />
                <h5 className="fs-5">Genres</h5>
                <div className='d-flex flex-wrap'>
                    {
                        data.genres.map(genre => <span className='px-2 bg-white text-black rounded-3 me-2 mb-2' key={genre.id}>
                            {genre.name}
                        </span>)
                    }
                </div>
                <br />
                <h5 className="fs-5">Synopsis</h5>
                <p>{data.overview}</p>
                <br />
                <h5 className="fs-5">Cast</h5>
                <div className='d-flex flex-wrap'>
                    {
                        cast.map((person, index) => {
                            if (index < 20) {
                                return <span className='px-2 border border-white rounded-3 me-2 mb-2' key={person.id}>
                                    {person.name}
                                </span>
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Details