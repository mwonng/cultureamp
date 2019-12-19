import React from 'react'
import { getAvarageRate } from '../../utils'
import { ThemeWrapper } from './Style'

function Themes({ allThemes }) {
    const themes = allThemes.map(at => (
        <ThemeWrapper key={at.name} className="container-fluid">
            <table className="table">
                <thead className="thead-light">
                    <tr className="row">
                        <th className="col-9">{at.name}</th>
                        <th className="col-3 text-right">Average Rate</th>
                    </tr>
                </thead>
                <Questions questions={at.questions} />
            </table>
        </ThemeWrapper>
    ))
    return <div>{themes}</div>
}

const Questions = ({ questions }) => {
    const list = questions.map(q => (
        <tr key={q.description} className="row">
            <td className="col-9">{q.description}</td>
            <td className="col-3 text-right">
                {getAvarageRate(q.survey_responses, 'response_content').toFixed(
                    2
                )}
            </td>
        </tr>
    ))

    return <tbody>{list}</tbody>
}

export default Themes
