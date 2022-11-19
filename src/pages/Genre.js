import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Card from '../components/Home/Card'
import Loader from '../components/Loader'
import Pagination from '../components/Pagination'
import SectionTitle from '../components/SectionTitle'
import { url, key } from '../context'

const Genre = () => {
    const { type, id, name } = useParams()
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${url}/discover/${type == 'movies' ? 'movie' : 'tv'}?api_key=${key}&with_genres=${id}&page=${currentPage}`)
                const result = await response.json()
                setData(result)
            } catch (e) {
                console.log(e)
            }
        }
        fetchData()
    }, [currentPage])

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
            <SectionTitle text={name} titleType={type == 'movies' ? type : 'tv series'} />
            <div className='d-flex align-items-center flex-column'>
                <div className='row g-3 g-sm-4'>
                    {
                        data.results.map(item => <Card 
                                    key={item.id}
                                    id={item.id}
                                    date={type == 'movies' ? item.release_date.substring(0, 4) : item.first_air_date.substring(0, 4)}
                                    title={type == 'movies' ? item.title : item.name}
                                    audience={item.adult ? 'PG' : 'G'}
                                    poster={`https://image.tmdb.org/t/p/original//${item.backdrop_path}`}
                                    mediaType={type == 'movies' ? 'movie' : 'TV series'}
                        />)
                    }
                </div>
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
        </section>
    )
}

export default Genre