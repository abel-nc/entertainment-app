import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../components/Home/Card'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import SectionTitle from '../components/SectionTitle'
import { key, url } from '../context'

const Search = () => {
    const [data, setData] = useState([])
    const { query } = useParams()
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/search/multi?api_key=${key}&query=${query}&page=${currentPage}`)
                const result = await response.json()
                setData(result)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [query, currentPage])

    useEffect(() => {
        console.log(data)
    }, [data])
    
    if (data.length == 0) {
        return <Loader />
    }
    if (!data.success) {
        <h2 className='text-center color-primary'>Something went wrong. Please try again later</h2>
    }
    return (
        <section className='color-primary mb-5'>
            <div className='d-flex align-items-center color-primary mb-3'>
                <h2 className='fs-2 fw-light me-3'>
                    Showing results for '{query}'
                </h2>
            </div>
            <div className='d-flex align-items-center flex-column'>
                <div className='row g-3 g-sm-4'>
                    {
                        data.results.map(item => {
                            if (item.backdrop_path) {
                                return <Card 
                                    key={item.id}
                                    id={item.id}
                                    date={item.media_type == 'movie' ? item.release_date.substring(0, 4) : item.first_air_date.substring(0, 4)}
                                    title={item.media_type == 'movie' ? item.title : item.name}
                                    audience={item.adult ? 'PG' : 'G'}
                                    poster={`https://image.tmdb.org/t/p/original//${item.backdrop_path}`}
                                    mediaType={item.media_type == 'movie' ? 'movie' : 'TV series'}
                                />
                            }
                        })
                    }
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    )
}

export default Search