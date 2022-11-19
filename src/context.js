import React, { useContext, useState } from "react";

export const key = '88ca94a353a1d5b0d99c27818292e0fb'
export const url = 'https://api.themoviedb.org/3'

const AppContext = React.createContext()
const AppProvider = ({ children }) => {
    const [query, setQuery] = useState([])

    // FETCH DATA
    const fetchData = async (endpoint) => {
        try {
            const response = await fetch(`${url}${endpoint}?api_key=${key}`)
            const result = await response.json()
            return result
        } catch (e) {
            console.log(e)
        }
    }

    const value = {
        fetchData,
        query,
        setQuery,
    }
    
    return (
        <AppContext.Provider value={value}>
            { children }
        </AppContext.Provider>
    )
}

// CUSTOM HOOK
const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, useGlobalContext }