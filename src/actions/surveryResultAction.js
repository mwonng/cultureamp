export const loadResult = (data) => dispatch => {
    dispatch({
        type: 'LOAD_SURVEY',
        payload: data
    })
}

export const prefetchingStart = (data) => dispatch => {
    dispatch({
        type: 'PREFETCHING_START',
    })
}

export const prefetchingEnd = (data) => dispatch => {
    dispatch({
        type: 'PREFETCHING_END',
    })
}