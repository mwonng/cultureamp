import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import surveryReducer from './surveyReducer'

export default combineReducers({
    surveryReducer,
    simpleReducer
});