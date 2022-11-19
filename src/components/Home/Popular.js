import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context'
import Loader from '../Loader'
import SectionTitle from '../SectionTitle'
import Card from './Card'

const Popular = ({ type }) => {
    const { fetchData } = useGlobalContext()
    const [data, setData] = useState([])

    useEffect(() => {
        const syncData = async () => {
            const result = await fetchData(`/${type}/popular`)
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
        <section className='color-primary mb-5'>
            <SectionTitle text={'Popular'} titleType={type == 'movie' ? 'movies' : 'tv series'} />
            <div className='row g-3 g-sm-4'>
                {
                    data.results.map((item, index) => {
                        if (index < 8) {
                            return <Card 
                                key={item.id}
                                id={item.id}
                                date={type == 'movie' ? item.release_date.substring(0, 4) : item.first_air_date.substring(0, 4)}
                                title={type == 'movie' ? item.title : item.name}
                                audience={item.adult ? 'PG' : 'G'}
                                poster={`https://image.tmdb.org/t/p/original//${item.backdrop_path}`}
                                mediaType={type == 'movie' ? 'movie' : 'TV series'}
                            />
                        }
                    })
                }
            </div>
        </section>
    )
}

export default Popular
