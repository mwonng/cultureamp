import {useEffect, useState } from 'react'

export const useFetch = (promise) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const {data} = await promise()
        setData(data)
      } catch (error) {
        setError("something went wrong")
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [promise])

  return {data, loading, error}
}