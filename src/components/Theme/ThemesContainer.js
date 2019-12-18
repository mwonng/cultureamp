import Themes from './Themes'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    allThemes: state.currentResult.survey_result_detail.themes
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Themes)