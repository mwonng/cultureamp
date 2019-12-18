import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function SurveyList({ surverys, loadResult, prefetchingStart, prefetchingEnd, resetResult }) {
    const shouldFetchRef = useRef(null)
    const { survey_results } = surverys

    useEffect(() => {
        resetResult();
        return () => {
            clearTimeout(shouldFetchRef.current)
        };
    }, [])

    const onMouseEnterHandler = (result) => {
        shouldFetchRef.current = setTimeout(async () => {
            try {
                console.log("trying to fetch", result.url);
                prefetchingStart()
                axios.get(`${process.env.REACT_APP_ENDPOINT}/${result.url}`)
                    .then(res => {
                        loadResult(res.data)
                        prefetchingEnd()
                    })
                    .finally(() => {
                        prefetchingEnd()
                    })
            } catch (error) {
                console.log("prefetching went wrong")
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
                        pathname: sr.url,
                        state: { result: sr }
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