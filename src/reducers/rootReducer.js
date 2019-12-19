import { combineReducers } from 'redux'
import surveyReducer from './surveyReducer'
import currentSurveyReducer from './currentSurveyReducer'

export default combineReducers({
    surveyReducer,
    currentResult: currentSurveyReducer,
})
