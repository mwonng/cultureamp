import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { StyledList, StyledListWrapper } from './Style'

function SurveyList({
    surverys,
    loadResult,
    prefetchingStart,
    prefetchingEnd,
    resetResult,
}) {
    const shouldFetchRef = useRef(null)
    const { survey_results } = surverys

    useEffect(() => {
        resetResult()
        return () => {
            clearTimeout(shouldFetchRef.current)
        }
    }, [resetResult])

    const onMouseEnterHandler = result => {
        shouldFetchRef.current = setTimeout(async () => {
            try {
                console.log('trying to fetch', result.url)
                prefetchingStart()
                axios
                    .get(`${process.env.REACT_APP_ENDPOINT}/${result.url}`)
                    .then(res => {
                        loadResult(res.data)
                        prefetchingEnd()
                    })
                    .finally(() => {
                        prefetchingEnd()
                    })
            } catch (error) {
                console.log('prefetching went wrong')
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
            <Link
                to={{
                    pathname: sr.url,
                    state: { result: sr },
                }}
                key={sr.url}
            >
                <StyledList
                    onMouseEnter={() => onMouseEnterHandler(sr)}
                    onMouseLeave={onMouseLeaveHandler}
                >
                    {sr.name}
                </StyledList>
            </Link>
        )
    })

    return <StyledListWrapper>{list}</StyledListWrapper>
}

export default SurveyList
