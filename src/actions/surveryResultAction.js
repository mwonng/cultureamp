export const loadResult = (currentSurvey) => dispatch => {
    dispatch({
        type: 'LOAD_SURVEY',
        payload: currentSurvey
    })
}