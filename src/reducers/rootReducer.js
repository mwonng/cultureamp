import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import surveryReducer from './surveyReducer'
import currentSurveyReducer from './currentSurveyReducer'

export default combineReducers({
    surveryReducer,
    simpleReducer,
    currentResult: currentSurveyReducer
});