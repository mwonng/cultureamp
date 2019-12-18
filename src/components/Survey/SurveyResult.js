
import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch'
// import { getResult } from '../../api/surveys'
import { withRouter } from "react-router";


function SurveryResult({ survey, fetchResult, location }) {
    const { state } = location
    const url = state.result.url
    const { data, loading, error } = useFetch(url)
    let { id } = useParams();
    // console.log("data", data)

    let body;
    if (loading) body = <p>Loading...</p>
    else if (error) body = <p>Error</p>
    else if (!data) body = <p>No data</p>


    if (body) return body

    return (
        <div>
            id: {id}
        </div>
    )
}

export default withRouter(SurveryResult)