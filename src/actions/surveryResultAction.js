export const loadSurvey = (currentSurvey) => dispatch => {
    dispatch({
        type: 'LOAD_SURVEY',
        payload: currentSurvey
    })
}