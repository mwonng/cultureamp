import React, { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { useFetch } from '../hooks/useFetch'
import axios from 'axios'

function SurveyList({ surverys, loadResult }) {
    const shouldFetchRef = useRef(null)
    const [prefetching, setPrefetching] = useState(false)
    const { survey_results } = surverys

    useEffect(() => {
        return () => {
            console.log("clear")
            setPrefetching(false)
        };
    }, [])

    const onMouseEnterHandler = (result) => {
        shouldFetchRef.current = setTimeout(async () => {
            // const { data, loading, error } = useFetch(result.url)
            try {
                console.log("trying to fetch", result.url);
                setPrefetching(true)
                const res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/${result.url}`)
                loadResult(res.data)
                // setPrefetching(false)
            } catch (error) {
                console.log("something went wrong")
            }
        }, 1000)
    }


    const onMouseLeaveHandler = () => {
        if (shouldFetchRef.current) {
            clearTimeout(shouldFetchRef.current)
        }
    }

    const list = survey_results.map(sr => {
        return (
            <li
                onMouseEnter={() => onMouseEnterHandler(sr)}
                onMouseLeave={onMouseLeaveHandler}
                key={sr.url}
            >
                <Link
                    to={{
                        pathname: '/survey',
                        state: { result: sr, prefetching: prefetching }
                    }}
                >
                    {sr.name}
                </Link>
            </li>
        )
    })

    return (
        <ul>
            {list}
        </ul>
    );
}

export default SurveyList