export const loadResult = (data) => dispatch => {
    dispatch({
        type: 'LOAD_SURVEY',
        payload: data
    })
}