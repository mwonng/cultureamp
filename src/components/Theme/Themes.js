import React from 'react';
import { getAvarageRate } from '../../utils'


function Themes({ allThemes }) {

    console.log(allThemes)

    const themes = allThemes.map(at =>
        <div key={at.name}>
            <h3>{at.name}</h3>
            <Questions questions={at.questions} />
        </div>
    )

    return (
        <div>
            {themes}

        </div>
    )
}


function Questions({ questions }) {

    const list = questions.map(q =>
        <li key={q.description}>{q.description} | {getAvarageRate(q.survey_responses, 'response_content').toFixed(2)}</li>
    )

    return (
        <ul>
            {list}
        </ul>
    )
}




export default Themes