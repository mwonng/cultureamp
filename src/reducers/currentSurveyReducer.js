export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SURVEY':
            return {
                ...action.payload
            }
        default:
            return state
    }
}