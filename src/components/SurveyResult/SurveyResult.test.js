import React from 'react'
import { render } from '@testing-library/react'
import SurveyResult from './SurveyResult'

test('renders learn react link', () => {
    const currentResult = {
        survey_result_detail: {
            name: 'Simple Survey',
            url: '/survey_results/1',
            participant_count: 6,
            response_rate: 0.8333333333333334,
            submitted_response_count: 5,
            themes: [
                {
                    name: 'The Work',
                    questions: [
                        {
                            description: 'I like the kind of work I do.',
                            question_type: 'ratingquestion',
                            survey_responses: [
                                {
                                    id: 1,
                                    question_id: 1,
                                    respondent_id: 1,
                                    response_content: '5',
                                },
                                {
                                    id: 6,
                                    question_id: 1,
                                    respondent_id: 2,
                                    response_content: '4',
                                },
                                {
                                    id: 11,
                                    question_id: 1,
                                    respondent_id: 3,
                                    response_content: '5',
                                },
                                {
                                    id: 16,
                                    question_id: 1,
                                    respondent_id: 4,
                                    response_content: '5',
                                },
                                {
                                    id: 21,
                                    question_id: 1,
                                    respondent_id: 5,
                                    response_content: '4',
                                },
                                {
                                    id: 26,
                                    question_id: 1,
                                    respondent_id: 6,
                                    response_content: '',
                                },
                            ],
                        },
                        {
                            description:
                                'In general, I have the resources (e.g., business tools, information, facilities, IT or functional support) I need to be effective.',
                            question_type: 'ratingquestion',
                            survey_responses: [
                                {
                                    id: 2,
                                    question_id: 2,
                                    respondent_id: 1,
                                    response_content: '5',
                                },
                                {
                                    id: 7,
                                    question_id: 2,
                                    respondent_id: 2,
                                    response_content: '5',
                                },
                                {
                                    id: 12,
                                    question_id: 2,
                                    respondent_id: 3,
                                    response_content: '5',
                                },
                                {
                                    id: 17,
                                    question_id: 2,
                                    respondent_id: 4,
                                    response_content: '5',
                                },
                                {
                                    id: 22,
                                    question_id: 2,
                                    respondent_id: 5,
                                    response_content: '5',
                                },
                                {
                                    id: 27,
                                    question_id: 2,
                                    respondent_id: 6,
                                    response_content: '',
                                },
                            ],
                        },
                        {
                            description:
                                'We are working at the right pace to meet our goals.',
                            question_type: 'ratingquestion',
                            survey_responses: [
                                {
                                    id: 3,
                                    question_id: 3,
                                    respondent_id: 1,
                                    response_content: '5',
                                },
                                {
                                    id: 8,
                                    question_id: 3,
                                    respondent_id: 2,
                                    response_content: '5',
                                },
                                {
                                    id: 13,
                                    question_id: 3,
                                    respondent_id: 3,
                                    response_content: '5',
                                },
                                {
                                    id: 18,
                                    question_id: 3,
                                    respondent_id: 4,
                                    response_content: '5',
                                },
                                {
                                    id: 23,
                                    question_id: 3,
                                    respondent_id: 5,
                                    response_content: '5',
                                },
                                {
                                    id: 28,
                                    question_id: 3,
                                    respondent_id: 6,
                                    response_content: '',
                                },
                            ],
                        },
                    ],
                },
                {
                    name: 'The Place',
                    questions: [
                        {
                            description:
                                'I feel empowered to get the work done for which I am responsible.',
                            question_type: 'ratingquestion',
                            survey_responses: [
                                {
                                    id: 4,
                                    question_id: 4,
                                    respondent_id: 1,
                                    response_content: '4',
                                },
                                {
                                    id: 9,
                                    question_id: 4,
                                    respondent_id: 2,
                                    response_content: '3',
                                },
                                {
                                    id: 14,
                                    question_id: 4,
                                    respondent_id: 3,
                                    response_content: '5',
                                },
                                {
                                    id: 19,
                                    question_id: 4,
                                    respondent_id: 4,
                                    response_content: '4',
                                },
                                {
                                    id: 24,
                                    question_id: 4,
                                    respondent_id: 5,
                                    response_content: '2',
                                },
                                {
                                    id: 29,
                                    question_id: 4,
                                    respondent_id: 6,
                                    response_content: '',
                                },
                            ],
                        },
                        {
                            description:
                                'I am appropriately involved in decisions that affect my work.',
                            question_type: 'ratingquestion',
                            survey_responses: [
                                {
                                    id: 5,
                                    question_id: 5,
                                    respondent_id: 1,
                                    response_content: '4',
                                },
                                {
                                    id: 10,
                                    question_id: 5,
                                    respondent_id: 2,
                                    response_content: '3',
                                },
                                {
                                    id: 15,
                                    question_id: 5,
                                    respondent_id: 3,
                                    response_content: '4',
                                },
                                {
                                    id: 20,
                                    question_id: 5,
                                    respondent_id: 4,
                                    response_content: '4',
                                },
                                {
                                    id: 25,
                                    question_id: 5,
                                    respondent_id: 5,
                                    response_content: '3',
                                },
                                {
                                    id: 30,
                                    question_id: 5,
                                    respondent_id: 6,
                                    response_content: '',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    }
    const prefetching = false
    const match = {
        path: '/surveys/:id',
        url: '/surveys/2',
        isExact: true,
        params: {
            id: '4',
        },
    }
    const { getByTestId } = render(
        <SurveyResult
            currentResult={currentResult}
            prefetching={prefetching}
            match={match}
        />
    )
    const node = getByTestId('result-component')
    expect(node).toBeTruthy()
})
