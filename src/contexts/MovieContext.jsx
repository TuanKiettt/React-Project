import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorite, setFavorite] = useState([])

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorite")

        if (storedFavs) setFavorite (JSON.parse(storedFavs))
    },[])

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favorite))
    },[favorite])

    const addToFavorite = (movie) => {
        setFavorite(prev => [...prev, movie])
    }

    const removeFromFavorite = (movieID) => {
        setFavorite(prev => prev.filter(movie=>movie.id !== movieID))
    }
    
    const isFavorite = (movieID) => {
        return favorite.some(movie => movie.id !== movieID)
    }

    const value = {
        favorite,
        addToFavorite,
        removeFromFavorite,
        isFavorite
    }
    
    return <MovieContext.Provider value ={value}>
        {children}
    </MovieContext.Provider>
}