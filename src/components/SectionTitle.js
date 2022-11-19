import React from 'react'

const SectionTitle = ({ text, titleType }) => {
    return (
        <div className='d-flex align-items-center color-primary mb-3'>
            <h2 className='fs-2 fw-light me-3 text-capitalize'>{text}</h2>
            { titleType 
                ? <h6 className='fs-small text-uppercase py-1 px-2 border border-white rounded'>{titleType}</h6>
                : null
            }
        </div>
    )
}

export default SectionTitle