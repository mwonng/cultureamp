import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import SurveyResult from './SurveyResult'
import { renderWithRedux, mockStore } from '../../redux/testHelpers'
import { act } from 'react-dom/test-utils'
import { updateResult } from '../../actions/surveryResultAction'

test('renders SurveyResult component', async () => {
    const prefetching = false
    const match = {
        path: '/surveys/:id',
        url: '/surveys/1',
        isExact: true,
        params: {
            id: '1',
        },
    }
    const { getByTestId, getByText } = renderWithRedux(
        <SurveyResult
            currentResult={mockStore.currentResult}
            prefetching={prefetching}
            updateResult={updateResult}
            match={match}
        />,
        { initialState: mockStore }
    )
    expect(getByTestId('loading-component')).toHaveTextContent('Loading')
    const resolvedNode = await waitForElement(() =>
        getByTestId('result-component')
    )
    // expect(resolvedNode).toHaveTextContent('Response Rate')
    expect(resolvedNode).toBeTruthy()
})
