import React from 'react'
import { useNavigate } from 'react-router'

const CarouselCard = (props) => {
    const { title, date, id, audience, poster, mediaType } = props
    const navigate = useNavigate()

    return (
        <div className='carousel-card d-flex flex-column justify-content-end rounded-2 bg-secondary p-3 
            me-4 select-none c-pointer overflow-hidden'
            onClick={() => mediaType == 'movie' ? navigate(`/movies/${id}`) : navigate(`/series/${id}`)}
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.45)), url(${poster})` }}
        >
            <h6 className='fw-light text-capitalize mb-1'>
                {date} 
                <span className='mx-2'>•</span>
                {mediaType == 'movie' ? mediaType : 'TV series'} 
                <span className='mx-2'>•</span>
                {audience} 
            </h6>
            <h4 className='fw-semibold fs-4 m-0'>{title}</h4>
        </div>
    )
}

export default CarouselCard