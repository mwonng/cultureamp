export const fetchSurveyResultPending = () => dispatch => {
    dispatch({
        type: 'FETCH_SURVEY_RESULT_PENDING',
    })
}

export const fetchSurveyResultSuccess = (surveys) => dispatch => {
    dispatch({
        type: 'FETCH_SURVEY_RESULT_SUCCESS',
        payload: surveys
    })
}

export const fetchSurveyResultError = (error) => dispatch => {
    dispatch({
        type: 'FETCH_SURVEY_RESULT_ERROR',
        payload: error
    })
}