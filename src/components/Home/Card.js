import React from 'react'
import { useNavigate } from 'react-router'

const Card = (props) => {
    const { title, date, audience, id, mediaType, poster } = props
    const navigate = useNavigate()

    return (
        <div className='col-6 col-md-6 col-lg-4 col-xl-3'>
            <div className='d-flex flex-column c-pointer color-primary'
                onClick={() => mediaType == 'movie' ? navigate(`/movies/${id}`) : navigate(`/series/${id}`)}
            >
                <div className='card-img rounded-2 bg-secondary mb-2'
                    style={{ backgroundImage: `url(${poster})` }}
                ></div>
                <div>
                    <h6 className='fs-small fw-light text-capitalize mb-1'>
                        {date}
                        <span className='mx-2'>•</span>
                        {mediaType}
                        <span className='mx-2'>•</span>
                        {audience}
                    </h6>
                    <h5 className='fw-semibold fs-5 m-0'>{title}</h5>
                </div>
            </div>
        </div>
    )
}

export default Card