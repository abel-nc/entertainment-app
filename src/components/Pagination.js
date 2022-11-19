import React from 'react'

const Pagination = ({ currentPage, setCurrentPage }) => {
    const nextPage = () => {
        setCurrentPage(prev => prev + 1)
        document.body.scrollIntoView({ block: "start" })
    }

    const prevPage = () => {
        if (currentPage === 1) return null
        setCurrentPage(prev => prev - 1)
        document.body.scrollIntoView({ block: "start" })
    }

    return (
        <div className='d-flex mt-5 mx-auto'>
            <button className='py-2 px-4 text-capitalize rounded-start bg-transparent color-primary border border-2'
                onClick={prevPage}
            >
                prev
            </button>
            <span className='py-2 px-4 fw-bold bg-white color-tertiary'>Page {currentPage}</span>
            <button className='py-2 px-4 text-capitalize rounded-end bg-transparent color-primary border border-2'
                onClick={nextPage}
            >
                next
            </button>
        </div>
    )
}

export default Pagination