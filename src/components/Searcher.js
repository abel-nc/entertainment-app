import React from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import { useGlobalContext } from '../context'

const Searcher = () => {
    const navigate = useNavigate()
    const { query, setQuery } = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (query == '') return null
        navigate('/')
        navigate(`/search/${query}`)
        setQuery('')
    }

    return (
        <form onSubmit={handleSubmit} className='searcher d-flex align-items-start mt-3 mb-4'>
            <button className='col-auto py-0 pe-4 bg-transparent color-primary border-0 mt-2'>
                <BsSearch className='fw-bold fs-4' />
            </button>
            <input className='col pb-2 mt-2 bg-transparent outline-0 color-primary fs-5 placeholder-secondary'
                onChange={(e) => setQuery(e.target.value)}
                type="text" 
                placeholder='Search for movies or TV series'
                value={query}
            />
        </form>
    )
}

export default Searcher