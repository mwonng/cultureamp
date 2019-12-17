export const fetchSurveyListPending = () => dispatch => {
    dispatch({
        type: 'FETCH_SURVEY_LIST_PENDING',
    })
}

export const fetchSurveyListSuccess = (surveys) => dispatch => {
    dispatch({
        type: 'FETCH_SURVEY_LIST_SUCCESS',
        payload: surveys
    })
}

export const fetchSurveyListError = (error) => dispatch => {
    dispatch({
        type: 'FETCH_SURVEY_LIST_ERROR',
        payload: error
    })
}
