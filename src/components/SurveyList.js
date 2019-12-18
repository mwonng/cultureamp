import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function SurveyList({ surverys }) {
    const shouldFetchRef = useRef(null)

    const { survey_results } = surverys

    const onMouseEnterHandler = () => {
        shouldFetchRef.current = setTimeout(() => {
            console.log("trying to fetch")
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
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                key={sr.url}
            >
                <Link
                    to={{
                        pathname: '/survey',
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