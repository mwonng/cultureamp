import axios from 'axios'

export const getSurveys = () => axios.get(`https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys/`)
export const getResult = () => axios.get(`https://px2yf2j445.execute-api.us-west-2.amazonaws.com/production/surveys/1`)
