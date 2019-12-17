export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SURVEY_LIST_PENDING':
            return {
                ...state,
                pending: true
            }
        case 'FETCH_SURVEY_LIST_SUCCESS':
            return {
                ...state,
                pending: false,
                surverys: action.payload
            }
        case 'FETCH_SURVEY_LIST_ERROR':
            return {
                ...state,
                pending: false,
                error: action.payload
            }
        default:
            return state
    }
}