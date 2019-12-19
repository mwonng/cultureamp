import React from 'react'

function Loading() {
    return (
        <div
            className="d-flex justify-content-center"
            data-testid="loading-component"
        >
            <div className="spinner-border mt-5" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
