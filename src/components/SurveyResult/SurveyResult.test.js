import React from 'react'
import { render } from '@testing-library/react'
import SurveyResult from './SurveyResult'
import { renderWithRedux, mockStore } from '../../redux/testHelpers'

test('renders SurveyResult component', () => {
    const prefetching = false
    const match = {
        path: '/surveys/:id',
        url: '/surveys/2',
        isExact: true,
        params: {
            id: '1',
        },
    }
    const { getByTestId } = renderWithRedux(
        <SurveyResult
            currentResult={mockStore.currentResult}
            prefetching={prefetching}
            match={match}
        />,
        { initialState: mockStore }
    )
    const node = getByTestId('result-component')
    expect(node).toBeTruthy()
})
