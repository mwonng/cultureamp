import SurveryList from './SurveyList'
import { connect } from 'react-redux'
import { loadResult, prefetchingStart, prefetchingEnd, resetResult } from '../actions/surveryResultAction'
const mapStateToProps = (state) => ({
    surverys: state.surveryReducer
})

const mapDispatchToProps = dispatch => ({
    loadResult: (data) => dispatch(loadResult(data)),
    resetResult: (data) => dispatch(resetResult(data)),
    prefetchingStart: () => dispatch(prefetchingStart()),
    prefetchingEnd: () => dispatch(prefetchingEnd())
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveryList)