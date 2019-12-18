import { useEffect, useState } from 'react'
import axios from 'axios'

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/${url}`);
                console.log(res.data)
                setLoading(true)
                const { data } = res
                setData(data)
            } catch (error) {
                setError("something went wrong")
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}