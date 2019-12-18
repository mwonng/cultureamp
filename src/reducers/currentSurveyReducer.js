export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SURVEY':
            return {
                current: action.payload
            }
        default:
            return state
    }
}