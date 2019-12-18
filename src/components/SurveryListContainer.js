import SurveryList from './SurveyList'
import { connect } from 'react-redux'
import { loadResult } from '../actions/surveryResultAction'
const mapStateToProps = (state) => ({
    surverys: state.surveryReducer
})

const mapDispatchToProps = dispatch => ({
    loadResult: (data) => dispatch(loadResult(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(SurveryList)