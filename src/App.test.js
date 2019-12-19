import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from './App'

test('renders learn react link', async () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('loading-component')).toHaveTextContent('Loading')

    const resolvedNode = await waitForElement(() =>
        getByTestId('app-container')
    )
    expect(resolvedNode).toBeTruthy()
})
