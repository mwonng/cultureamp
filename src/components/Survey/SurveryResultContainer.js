import SurveyResult from './SurveyResult';
import { connect } from 'react-redux'
import { loadResult } from '../../actions/surveryResultAction'


const mapStateToProps = state => ({
    survey: state.currentSurvey
})

const mapDispatchToprops = dispatch => ({
    fetchResult: (result) => dispatch(loadResult(result))
})


export default connect(mapStateToProps, mapDispatchToprops)(SurveyResult)