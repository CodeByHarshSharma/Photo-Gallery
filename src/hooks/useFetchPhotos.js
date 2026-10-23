import { useState, useEffect } from 'react'

const API_URL = import.meta.env.VITE_API_URL

const useFetchPhotos = () => {
    const [photos, setPhotos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function loadPhotos() {
            try {
                const res = await fetch(API_URL)
                if (!res.ok) {
                    throw new Error(`Request failed with status ${res.status}`)
                }
                const data = await res.json()
                setPhotos(data)
            }
            catch (err) {
                setError(err.message || "Something went wrong")
            }
            finally {
                setLoading(false)
            }
        }

        loadPhotos()
    }, [])

    return { photos, loading, error }
}

export default useFetchPhotos