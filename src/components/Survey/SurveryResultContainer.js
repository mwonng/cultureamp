import SurveyResult from './SurveyResult';
import { connect } from 'react-redux'


const mapStateToProps = state => ({
    survey: state.currentSurvey
})


export default connect(mapStateToProps)(SurveyResult)