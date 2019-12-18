import { combineReducers } from 'redux';
import surveryReducer from './surveyReducer'
import currentSurveyReducer from './currentSurveyReducer'

export default combineReducers({
    surveryReducer,
    currentResult: currentSurveyReducer
});