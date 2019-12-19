const INITIAL_STATE = {
    allSurveys: null,
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INIT_APP':
            console.log(action)
            return {
                ...state,
                // ...action.payload,
                allSurveys: action.payload?.survey_results,
            }
        default:
            return state
    }
}
