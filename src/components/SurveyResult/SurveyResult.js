
import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { withRouter } from "react-router";
import ThemesContainer from '../Theme/ThemesContainer'
import { isEmptyObj, floatToPercent } from '../../utils'
import { useParams } from "react-router-dom";
import NotFound from '../ErrorPage/NotFound'
import Loading from '../ErrorPage/Loading'

function SurveryResult({ currentResult, prefetching, updateResult }) {
    const { id } = useParams();
    const url = `\\surveys\\${id}`
    const { data, loading, error } = useFetch(url)

    useEffect(() => {
        if (data) {
            updateResult(data)
        }
    }, [data, updateResult])

    let body;
    if (isEmptyObj(currentResult) && loading) body = <Loading />
    else if (prefetching) body = <Loading />
    else if (error) body = <NotFound />
    else if (!data && !currentResult) body = <p>No data</p>

    if (body) return body

    const result = isEmptyObj(currentResult) ? data : currentResult

    return (
        <div>
            <h1>{result.survey_result_detail.name}</h1>
            <p>Response Rate: {floatToPercent(result.survey_result_detail.response_rate, 2)}</p>
            <ThemesContainer />
        </div>
    )
}

export default withRouter(SurveryResult)