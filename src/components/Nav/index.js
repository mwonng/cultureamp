import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="nav navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="nav-link active">
                    Home
                </Link>
                <a
                    className="nav-link"
                    href="https://www.cultureamp.com/"
                    target="_blank"
                    tabIndex="-1"
                    rel="noopener noreferrer"
                    aria-disabled="true"
                >
                    Culture Amp
                </a>
            </div>
        </nav>
    )
}

export default Nav
