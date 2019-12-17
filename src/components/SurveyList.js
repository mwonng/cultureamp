import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
function SurveyList({ keyName }) {

    const toggleFetch = (survey) => {
        console.log("fetching should be start", survey)
    }

    return (
        <ul>
            {'list'}
        </ul>
    );
}

export default SurveyList