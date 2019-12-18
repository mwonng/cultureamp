export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SURVEY':
            return {
                ...state,
                ...action.payload
            }
        case 'UPDATE_RESULT':
            return {
                ...state,
                ...action.payload
            }
        case 'PREFETCHING_START':
            return {
                ...state,
                prefetching: true
            }
        case 'PREFETCHING_END':
            return {
                ...state,
                prefetching: false
            }
        default:
            return state
    }
}