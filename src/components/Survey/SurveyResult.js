
import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { withRouter } from "react-router";

function isEmptyObj(obj) {
    return Object.keys(obj).length === 0
}

function floatToPercent(number, n) {
    const percentage = Math.floor(number * Math.pow(10, 2 + n)) / Math.pow(10, n)
    return `${percentage}%`
}

function SurveryResult({ currentResult, location, prefetching, updateResult }) {
    const { state } = location
    const url = state.result.url
    const { data, loading, error } = useFetch(url)

    useEffect(() => {
        if (data) {
            updateResult(data)
        }
    }, [data, updateResult])

    let body;
    if (isEmptyObj(currentResult) && loading) body = <p>Loading...</p>
    else if (prefetching) body = <p>Prefetching...</p>
    else if (error) body = <p>Error</p>
    else if (!data && !currentResult) body = <p>No data</p>

    if (body) return body

    const result = isEmptyObj(currentResult) ? data : currentResult

    return (
        <div>
            <p>id: {result.survey_result_detail.name}</p>
            <p>persentage: {floatToPercent(result.survey_result_detail.response_rate, 2)}</p>

        </div>
    )
}

export default withRouter(SurveryResult)