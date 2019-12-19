import React from 'react'
import { render } from '@testing-library/react'
import Loading from './Loading'
import NotFound from './NotFound'

test('Loading renders', () => {
    const { getByTestId } = render(<Loading />)
    const linkElement = getByTestId('loading-component')
    expect(linkElement).toBeTruthy()
})

// test('NotFound renders', () => {
//     const { getByTestId } = render(<NotFound />)
//     const element = getByTestId('not-found-component')
//     expect(element).toBeTruthy()
// })
