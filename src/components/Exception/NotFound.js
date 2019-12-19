import React from 'react'
import { useLocation } from 'react-router-dom'

function NoMatch() {
    let location = useLocation()

    return (
        <div data-testid="not-found-component">
            <h3>
                No matched page for <code>{location.pathname}</code>
            </h3>
        </div>
    )
}

export default NoMatch
