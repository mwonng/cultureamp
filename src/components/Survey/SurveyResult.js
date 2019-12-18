
import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { withRouter } from "react-router";

function isEmptyObj(obj) {
    return Object.keys(obj).length === 0
}

function SurveryResult({ currentResult, fetchResult, location }) {
    const { state } = location
    const url = state.result.url
    const { data, loading, error } = useFetch(url)

    let body;

    if (isEmptyObj(currentResult) && loading) body = <p>Loading...</p>
    else if (error) body = <p>Error</p>
    else if (!data && !currentResult) body = <p>No data</p>

    if (body) return body

    const result = isEmptyObj(currentResult) ? data : currentResult

    return (
        <div>
            id: {result.survey_result_detail.name}
        </div>
    )
}

export default withRouter(SurveryResult)