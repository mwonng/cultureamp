import React, { useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import ThemesContainer from '../Theme/ThemesContainer'
import { isEmptyObj, floatToPercent } from '../../utils'
import NotFound from '../Exception/NotFound'
import Loading from '../Exception/Loading'
import { ResultWrapper } from './Style'

function SurveryResult(props) {
    const { currentResult, prefetching, updateResult, match } = props
    console.log(match)
    const resultEndpointPath = `/surveys/${match.params.id}`
    const { data, loading, error } = useFetch(resultEndpointPath)

    useEffect(() => {
        if (data) {
            updateResult(data)
        }
    }, [data, updateResult])

    let body
    if (isEmptyObj(currentResult) && loading) body = <Loading />
    else if (prefetching) body = <Loading />
    else if (error) body = <NotFound />
    else if (!data && !currentResult) body = <p>No data</p>

    if (body) return body

    const result = isEmptyObj(currentResult) ? data : currentResult

    return (
        <ResultWrapper data-testid="result-component">
            <h1>{result.survey_result_detail.name}</h1>
            <h4>
                Response Rate:{' '}
                {floatToPercent(result.survey_result_detail.response_rate, 2)}
            </h4>
            <ThemesContainer />
        </ResultWrapper>
    )
}

export default SurveryResult
