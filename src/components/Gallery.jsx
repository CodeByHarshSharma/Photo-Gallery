import { useReducer, useEffect, useState, useCallback, useMemo } from 'react';
import useFetchPhotos from '../hooks/useFetchPhotos';
import { favouritesReducer, getInitialFavourites, STORAGE_KEY } from '../reducers/favouriteReducer';
import PhotoCard from './PhotoCard';

const Gallery = () => {

    const { photos, loading, error } = useFetchPhotos()
    const [query, setQuery] = useState("")
    const [favourites, dispatch] = useReducer(
        favouritesReducer,
        [],
        getInitialFavourites
    )

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favourites))
    }, [favourites])

    const handleSearch = useCallback((e) => {
        setQuery(e.target.value)
    }, [])

    const filteredSearch = useMemo(() => {
        const term = query.trim().toLowerCase();
        return photos.filter((photo) => photo.author.toLowerCase().includes(term))
    }, [photos, query])

    if (loading) {
        return (
            <div className='flex justify-center py-20'>
                <div
                    role='status'
                    aria-label='Loading Photos'
                    className='h-10 w-10 animate-spin rounded-full border-4 border-gray-400 border-t-gray-700'
                />
            </div>
        )
    }

    if (error) {
        return (
            <p className='py-20 text-center text-red-600'>
                Failed to load photos: {error}
            </p>
        )
    }

    return (
        <div>
            <input
                type='text'
                value={query}
                onChange={handleSearch}
                placeholder='Search by author name...'
                aria-label='Search by author name'
                className='mb-6 w-3xs rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-gray-500'
            />

            {filteredSearch.length === 0 ? (
                <p className='py-10 text-center text-gray-500'>
                    No Photos Found!
                </p>
            ) : (
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                    {filteredSearch.map((photo) => (
                        <PhotoCard
                            key={photo.id}
                            photo={photo}
                            isFavourite={favourites.includes(photo.id)}
                            onToggle={(id) => dispatch({ type: "TOGGLE_FAVOURITE", id})}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Gallery
