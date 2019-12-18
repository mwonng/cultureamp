import SurveryList from './SurveyList'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    surverys: state.surveryReducer
})

export default connect(mapStateToProps)(SurveryList)